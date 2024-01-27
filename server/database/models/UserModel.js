import { Sequelize } from "sequelize";
import user_schema from "./schema/UserSchema.js";

/**
 * @method UserModel
 * @param {Sequelize} sequelize - sequelize object
 * @returns user_model
 */
export default (sequelize) => {
	const user_model = sequelize.define(
		"user_model",
		user_schema,
		{
			sequelize,
			modelName: "user_model",
			tableName: "user_model",
			timestamps: false,
			underscored: false,
		},
	);
	return user_model;
};
