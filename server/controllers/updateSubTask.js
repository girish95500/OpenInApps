import { models } from "../app.js";

const updateSubTask = async (req, res) => {
    try {
        const { subTaskId } = req.params;
        const { status } = req.body;
        const { sub_task_model } = models;

        const subTaskToUpdate = await sub_task_model.findByPk(subTaskId);

        if (!subTaskToUpdate) {
            return res.status(404).send({
                message: "Subtask not found",
            });
        }

        if (status) {
            subTaskToUpdate.status = status;
        }

        await subTaskToUpdate.save();

        return res.status(200).send({
            message: "Subtask updated successfully",
            updatedSubTask: subTaskToUpdate,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal Server Error",
        });
    }
};

export default updateSubTask;
