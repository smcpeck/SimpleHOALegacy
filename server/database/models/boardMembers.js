const Sequelize = require("sequelize");
const { dbConnection } = require("../config");
const { Homeowners } = require("./homeOwners");
const { Hoa } = require("./hoa");

const BoardMembers = dbConnection.define(
    "boardMembers",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
        hoaId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: Hoa,
                key: "id",
            },
        },
        position: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timeStamps: false,
    },
);

module.exports.BoardMembers = BoardMembers;
