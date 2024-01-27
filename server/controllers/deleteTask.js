import { models } from "../app.js";

const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { task_model } = models;

        const taskToDelete = await task_model.findByPk(taskId, { paranoid: false });

        if (!taskToDelete) {
            return res.status(404).send({
                message: "Task not found",
            });
        }

        if (taskToDelete.deletedAt !== null) {
            return res.status(404).send({
                message: "Task already deleted",
            });
        }

        await taskToDelete.destroy();

        return res.status(200).send({
            message: "Task deleted successfully",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal Server Error",
        });
    }
};

export default deleteTask;
