const { dbConnection } = require("./config");
const { Hoa } = require("./models/hoa");
const { HomeOwners } = require("./models/homeOwners");
const { BoardMembers } = require("./models/boardMembers");
const { Staff } = require("./models/staff");
const { WorkTickets } = require("./models/workTickets");
const { Revenues } = require("./models/revenues");
const { RevenueYTD } = require("./models/revenueYTD");
const { Expenses } = require("./models/expenses");
const { ExpenseYTD } = require("./models/expenseYTD");

const models = {
    Hoa,
    HomeOwners,
    BoardMembers,
    Staff,
    WorkTickets,
    Revenues,
    RevenueYTD,
    Expenses,
    ExpenseYTD,
};

// { force: true }
models.Hoa.sync();
models.HomeOwners.sync();
models.BoardMembers.sync();
models.Staff.sync();
models.WorkTickets.sync();
models.Revenues.sync();
models.RevenueYTD.sync();
models.Expenses.sync();
models.ExpenseYTD.sync();

dbConnection.authenticate()
    .then(() => {
        console.log("Connected to the database.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

module.exports = { dbConnection, models };
