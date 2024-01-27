import { DataTypes } from "sequelize";

/**
 * @description user table schema
 */
const user_schema = {
    phone_no: {
        type: DataTypes.STRING(10),
        allowNull: false,
        trim: true,
        validate: {
            is: /^[0-9]{10}$/i,
        },
    },
    priority: {
        type: DataTypes.ENUM("0", "1", "2"),
        allowNull: false,
    },
};

export default user_schema;