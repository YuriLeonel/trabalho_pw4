const Sequelize = require("sequelize");
const banco = require("../db.js");

const Account = banco.define("conta", {
    id_account:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    tag: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    region: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
})

module.exports = Account;