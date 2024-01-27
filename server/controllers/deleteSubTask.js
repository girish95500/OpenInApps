import { models } from "../app.js";

const deleteSubTask = async (req, res) => {
    try {
        const { subTaskId } = req.params;
        const { sub_task_model } = models;

        const subTaskToDelete = await sub_task_model.findByPk(subTaskId, { paranoid: false });

        if (!subTaskToDelete) {
            return res.status(404).send({
                message: "Subtask not found",
            });
        }

        if (subTaskToDelete.deletedAt !== null) {
            return res.status(404).send({
                message: "Subtask already deleted",
            });
        }

        await subTaskToDelete.destroy();

        return res.status(200).send({
            message: "Subtask deleted successfully",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal Server Error",
        });
    }
};

export default deleteSubTask;
