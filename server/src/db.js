const Sequelize = require("sequelize");

const sequelize = new Sequelize("sql10581289", "sql10581289", "AKMuNqPGyf", {
    host: "sql10.freemysqlhosting.net",
    dialect: "mysql",
    port: "3306",
    logging: false
});

module.exports = sequelize;