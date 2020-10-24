const Sequelize = require("sequelize");
const { dbConnection } = require("../config");
const { Hoa } = require("./hoa");

const RevenueYTD = dbConnection.define(
    "revenueYTD",
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
        totalYTD: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        jan: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        feb: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        mar: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        apr: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        may: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        jun: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        jul: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        aug: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        sep: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        oct: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        nov: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        dec: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timeStamps: true,
    },
);

module.exports.RevenueYTD = RevenueYTD;
