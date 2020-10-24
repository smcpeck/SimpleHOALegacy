const Sequelize = require("sequelize");
const { dbConnection } = require("../config");
const { Homeowners } = require("./homeOwners");
const { Hoa } = require("./hoa");

const Revenues = dbConnection.define(
    "revenues",
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
        accountId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: Homeowners,
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
        amountPaid: {
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

module.exports.Revenues = Revenues;
