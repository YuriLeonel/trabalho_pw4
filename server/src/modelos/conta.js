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
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    hash: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    email: {
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