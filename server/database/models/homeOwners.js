const Sequelize = require("sequelize");
const { dbConnection } = require("../config");
const { Hoa } = require("./hoa");

const HomeOwners = dbConnection.define(
    "homeowners",
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
        firstName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        fullName: {
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
        state: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        zipcode: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        monthlyDues: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        balanceDue: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        isBoardMember: {
            type: Sequelize.SMALLINT,
            allowNull: true,
        },
        boardMemberId: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timeStamps: true,
    },
);

module.exports.HomeOwners = HomeOwners;
