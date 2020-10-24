const Sequelize = require("sequelize");
const { dbConnection } = require("../config");

const Hoa = dbConnection.define(
    "hoa",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        zipcode: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        firebaseid: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timeStamps: true,
    },
);

module.exports.Hoa = Hoa;
