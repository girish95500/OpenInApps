import { models } from "../app.js";

const getAllUserSubTasks = async (req, res) => {
    try {
        const { task_model, sub_task_model } = models;
        const { task_id } = req.body;

        const subTasks = await sub_task_model.findAll({
            where: {
                task_id,
            },
            include: [{ model: task_model, attributes: ['title', 'description', 'due_date', 'priority', 'status'] }],
        });

        return res.status(200).send({
            subTasks,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal Server Error",
        });
    }
};

export default getAllUserSubTasks;
