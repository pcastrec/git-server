const { DataTypes } = require('sequelize');
const database = require('../database');

const User = database.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        defaultValue: 'andré'
    }
});

module.exports = User;