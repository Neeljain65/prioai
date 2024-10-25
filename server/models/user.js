const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as necessary

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    other_user_details: {
        type: DataTypes.TEXT
    },
    role: {  // Added role column
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'User' // Default role
    }
}, {
    tableName: 'User',
    timestamps: false
});

module.exports = User;
