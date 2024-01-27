import { Sequelize } from "sequelize";
import taskSchema from "./schema/TaskSchema.js";

/**
 * @method TaskModel
 * @param {Sequelize} sequelize - sequelize object
 * @returns task_model
 */
export default (sequelize) => {
	const task_model = sequelize.define(
		"task_model",
		taskSchema,
		{
			sequelize,
			modelName: "task_model",
			tableName: "task_model",
			timestamps: false,
			underscored: false,
            paranoid: true,
		},
	);
	return task_model;
};
