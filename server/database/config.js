const Sequelize = require("sequelize");

const { DATABASE_URL } = process.env;

const dialectOptions = {
    ssl: {
        require: true,
        rejectUnauthorized: false,
    },
};

module.exports.dbConnection = new Sequelize(DATABASE_URL, { dialectOptions });
