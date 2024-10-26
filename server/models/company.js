const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as necessary
const User = require('./user'); // Ensure you import the User model

const Company = sequelize.define('Company', {
    company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    job_position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: { // Added owner column as a foreign key
        type: DataTypes.INTEGER,
        references: {
            model: User, // This refers to the User model
            key: 'user_id'
        },
        onUpdate: 'CASCADE', // Optional: Specify actions on updates
        onDelete: 'SET NULL' // Optional: Specify actions on deletions
    }
}, {
    tableName: 'Company',
    timestamps: false
});

// Establish association if necessary
Company.belongsTo(User, { foreignKey: 'owner', targetKey: 'user_id' });

module.exports = Company;
