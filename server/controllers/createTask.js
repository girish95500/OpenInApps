import jwt from "jsonwebtoken";
import { models } from "../app.js";
import getEnvironmentConfigs from "../config/config.js";

const calculatePriorityFor = (due_date) => {
    const currentDate = new Date();
    const timeDiff = due_date.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysDiff;
};

const createTask = async (req, res) => {
    try {
        const Secret_Key = getEnvironmentConfigs().SECRET_KEY;
        let { title, description, due_date, user_id } = req.body;
        let task_object = { title, description, due_date };
        due_date = new Date(due_date);
        const task_model = models.task_model;

        let status = "TODO";
        let priority = calculatePriorityFor(due_date);

        const createdTask = await task_model.create({
            title,
            description,
            due_date,
            priority,
            status,
            user_id
        });

        await createdTask.save();

        const jwt_token = jwt.sign({ task_object }, Secret_Key);

        return res.status(200).send({
            jwt_token,
            message: "Task Created Successfully",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal Server Error",
        });
    }
};

export default createTask;
