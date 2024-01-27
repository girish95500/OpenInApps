import { models } from "../app.js";

const createSubTask = async (req,res) => {
    try {
        let {task_id} = req.body;
        let status = "0";
        let sub_task_model = models.sub_task_model;
        let createdSubTask = await sub_task_model.create({
            task_id,
            status
        });
        await createdSubTask.save();
        return res.status(200).send({
            message: "Sub Task Created Successfully"
        });
    }
    catch (err) {
        res.status(500).send({
            message: "Internal Server Error"
        });
    }
}

export default createSubTask;