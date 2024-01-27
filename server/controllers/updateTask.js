import { models } from "../app.js";

const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { due_date, status } = req.body;
        const { task_model } = models;

        const taskToUpdate = await task_model.findByPk(taskId);

        if (!taskToUpdate) {
            return res.status(404).send({
                message: "Task not found",
            });
        }

        if (due_date) {
            taskToUpdate.due_date = new Date(due_date);
        }

        if (status) {
            taskToUpdate.status = status;
        }

        await taskToUpdate.save();

        return res.status(200).send({
            message: "Task updated successfully",
            updatedTask: taskToUpdate,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal Server Error",
        });
    }
};

export default updateTask;
