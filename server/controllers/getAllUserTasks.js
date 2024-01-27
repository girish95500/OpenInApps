import { models } from "../app.js";
import { Op } from "sequelize";

const getAllUserTasks = async (req, res) => {
    try {
        const { user_id, priority, due_date, page = 1, pageSize = 10 } = req.body;

        const { user_model, task_model } = models;

        const offset = (page - 1) * pageSize;

        const userTasks = await task_model.findAll({
            where: {
                user_id,
                [Op.or]: [
                    { priority },
                    { due_date },
                ],
            },
            include: [{ model: user_model, attributes: ['phoneNo', 'priority'] }],
            limit: pageSize,
            offset,
        });

        return res.status(200).send({
            userTasks,
            currentPage: page,
            totalPages: Math.ceil(userTasks.count / pageSize),
        });

    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal Server Error",
        });
    }
};

export default getAllUserTasks;