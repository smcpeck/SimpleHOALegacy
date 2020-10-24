const Sequelize = require("sequelize");
const { dbConnection } = require("../config");
const { Hoa } = require("./hoa");

const Expenses = dbConnection.define(
    "expenses",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        hoaId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: Hoa,
                key: "id",
            },
        },
        date: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        payType: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        amountPaidOut: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timeStamps: true,
    },
);

module.exports.Expenses = Expenses;
