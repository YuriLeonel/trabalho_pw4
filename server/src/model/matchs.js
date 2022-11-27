const Sequelize = require("sequelize");
const database = require("../db.js");

const Matchs = database.define("matchs", {
    id_match:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_account_one:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_account_two:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        primaryKey: false
    },
    created: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: false
    },
})

module.exports = Matchs;