const express = require("express");
const { dbConnection, models } = require("../database/index");

const router = new express.Router();

//* ****************************
// EXPENSES
//* ****************************

// Add an Expense
router.post("/api/addExpense", (req, res) => {
    const {
        hoaId, payType, amountPaidOut, description,
    } = req.body;
    models.Expenses.create({
        hoaId,
        date: dbConnection.literal("CURRENT_TIMESTAMP"),
        payType,
        amountPaidOut,
        description,
    })
        .then(() => {
            res.send(201);
        })
        .catch((error) => {
            console.error(error);
        });
});

// get ALL Expenses
router.post("/api/getExpenses", (req, res) => {
    const { hoaId } = req.body;
    models.Expenses.findAll({
        where: {
            hoaId,
        },
    })
        .then((allExpenses) => {
            res.send(allExpenses);
        })
        .catch((error) => {
            console.error(error);
        });
});

// get Expenses of a certain type
router.post("/api/getTypeExpenses", (req, res) => {
    const { hoaId, payType } = req.body;
    models.Expenses.findAll({
        where: {
            hoaId,
            payType,
        },
    })
        .then((typeExpenses) => {
            res.send(typeExpenses);
        })
        .catch((error) => {
            console.error(error);
        });
});

module.exports.expenseRouter = router;
