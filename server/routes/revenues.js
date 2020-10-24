const express = require("express");
const { dbConnection, models } = require("../database/index");

const router = new express.Router();

//* ****************************
// REVENUES
//* ****************************

// Add a Deposit
router.post("/api/addDeposit", (req, res) => {
    const {
        hoaId, accountId, amountPaid, description,
    } = req.body;
    models.Revenues.create({
        hoaId,
        accountId,
        date: dbConnection.literal("CURRENT_TIMESTAMP"),
        amountPaid,
        description,
    })
        .then(() => {
            res.send(201);
        })
        .catch((error) => {
            console.error(error);
        });
});

// get All Revenues (For now, this is just Dues.
// However, this can be expanded to other revenue sources as well)
router.post("/api/getRevenues", (req, res) => {
    const { hoaId } = req.body;
    models.Revenues.findAll({
        where: {
            hoaId,
        },
    })
        .then((revenues) => {
            res.send(revenues);
        })
        .catch((error) => {
            console.error(error);
        });
});

module.exports.revenueRouter = router;
