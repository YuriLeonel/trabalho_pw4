const Sequelize = require("sequelize");
const database = require("../db.js");

const Agents = database.define("agents", {
    id_agent:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    displayIcon: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
})

module.exports = Agents;