const Sequelize = require("sequelize");
const banco = require("../db.js");

const Account_agent = banco.define("account_agent", {
    id_account_agent:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_account:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_agent:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    
    main: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        primaryKey: false
    },
})

module.exports = Account_agent;