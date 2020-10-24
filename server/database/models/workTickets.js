const Sequelize = require("sequelize");
const { dbConnection } = require("../config");
const { Staff } = require("./staff");
const { Hoa } = require("./hoa");

const WorkTickets = dbConnection.define(
    "workTickets",
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
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        assignedTo: {
            type: Sequelize.INTEGER,
            allowNull: true,
            foreignKey: true,
            references: {
                model: Staff,
                key: "id",
            },
        },
        isOpen: {
            type: Sequelize.SMALLINT,
            allowNull: true,
        },
        dateCompleted: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timeStamps: false,
    },
);

module.exports.WorkTickets = WorkTickets;
