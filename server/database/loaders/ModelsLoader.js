import TaskModel from "../models/TaskModel.js";
import SubTaskModel from "../models/SubTaskModel.js";
import UserModel from "../models/UserModel.js";

/**
 * @description Load Models and Set up associations for all models in db
 * @class ModelsLoader
 */
class ModelsLoader {
	/**
	 * @description Constructor to load models and set up associations for all models in db
	 * @param {Sequelize} sequelize - sequelize object
	 */
	constructor(sequelize) {
		// Set up models
		this.models = {
			task_model: TaskModel(sequelize),
			sub_task_model: SubTaskModel(sequelize),
			user_model: UserModel(sequelize),
		};
		this.setUpAssociations();
	}

	/**
	 * @description Set up associations for all models in models
	 */
	setUpAssociations() {
		this.setUpTaskModelAssociations();
		this.setUpSubTaskModelAssociations();
        this.setUpUserModelAssociations();
	}

	/**
	 * @description Set up associations for task_model
	 */
	setUpTaskModelAssociations() {
		this.models.task_model.hasMany(this.models.sub_task_model, {
			foreignKey: "id",
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});
        this.models.task_model.belongsTo(this.models.user_model, {
			foreignKey: "user_id",
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});
	}

	/**
	 * @description Set up associations for sub_task_model
	 */
	setUpSubTaskModelAssociations() {
		this.models.sub_task_model.belongsTo(this.models.task_model, {
			foreignKey: "task_id",
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});
	}

    	/**
	 * @description Set up associations for sub_task_model
	 */
	setUpUserModelAssociations() {
		this.models.user_model.hasMany(this.models.task_model, {
			foreignKey: "id",
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});
	}

}

export default ModelsLoader;
