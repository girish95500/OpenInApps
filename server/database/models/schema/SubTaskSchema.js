import { DataTypes } from "sequelize";

/**
 * @description sub task table schema
 */
const subTaskSchema = {
    status: {
        type: DataTypes.ENUM("0", "1"),
        allowNull: false,
    },
};

export default subTaskSchema;
