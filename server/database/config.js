const Sequelize = require("sequelize");
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "hoa_database";
const DB_USER = process.env.DB_USER || "hoa_user";
const DB_PASSWORD = process.env.DB_PASSWORD || "hoa_password;

const dialectOptions = {
    host: DB_HOST,
    dialect: process.env.DB_DIALECT || "mariadb"
};

module.exports.dbConnection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, dialectOptions);
