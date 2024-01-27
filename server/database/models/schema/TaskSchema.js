import { DataTypes } from "sequelize";

/**
 * @description task table schema
 */
const taskSchema = {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    priority: {
        type: DataTypes.ENUM("0", "1", "2", "3"),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("TODO", "IN_PROGRESS", "DONE"),
        allowNull: false,
    },
};

export default taskSchema;
