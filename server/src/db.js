const Sequelize = require("sequelize");

const sequelize = new Sequelize("sql10522653", "sql10522653", "qcH1clJYWD", {
    host: "sql10.freemysqlhosting.net",
    dialect: "mysql",
    port: "3306",
    logging: false
});

module.exports = sequelize;