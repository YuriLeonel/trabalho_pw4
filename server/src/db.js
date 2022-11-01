const Sequelize = require("sequelize");

const sequelize = new Sequelize("sql10531541", "sql10531541", "svtkzc8p5b", {
    host: "sql10.freemysqlhosting.net",
    dialect: "mysql",
    port: "3306",
    logging: false
});

module.exports = sequelize;