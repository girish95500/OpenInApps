import { Sequelize } from "sequelize";
import subTaskSchema from "./schema/SubTaskSchema.js";

/**
 * @method SubTaskModel
 * @param {Sequelize} sequelize - sequelize object
 * @returns sub_task_model
 */
export default (sequelize) => {
	const sub_task_model = sequelize.define(
		"sub_task_model",
		subTaskSchema,
		{
			sequelize,
			modelName: "sub_task_model",
			tableName: "sub_task_model",
			timestamps: true,
			underscored: false,
            paranoid: true,
		},
	);
	return sub_task_model;
};
