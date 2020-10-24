const express = require("express");
const moment = require("moment");
const { dbConnection, models } = require("../database/index");

const router = new express.Router();

//* ****************************
//  Helper Helpers
//* ****************************
moment().format();

function howManyMonths(createdAt) {
    const start = createdAt;
    const end = moment().format("YYYY-MM-DD");
    const monthsSince = moment(new Date(end)).diff(
        new Date(start),
        "months",
        true,
    );
    return Math.round(monthsSince);
}

//* ****************************
// HOMEOWNERS
//* ****************************

// Add a Homeowner
router.post("/api/addHomeOwner", (req, res) => {
    const {
        hoaId,
        firstName,
        lastName,
        address,
        city,
        state,
        zipcode,
        monthlyDues,
        email,
        phone,
    } = req.body;
    models.HomeOwners.create({
        hoaId,
        firstName,
        lastName,
        fullName: `${req.body.lastName}, ${req.body.firstName}`,
        address,
        city,
        state,
        zipcode,
        monthlyDues,
        email,
        phone,
    })
        .then(() => {
            const sqlGetQuery = `SELECT * FROM homeowners WHERE ID = (SELECT MAX(ID) FROM homeowners WHERE email = '${email}')`;
            return dbConnection
                .query(sqlGetQuery, {
                    model: models.HomeOwners,
                })
                .then((response) => {
                    res.send({
                        ...response[0].dataValues,
                    });
                })
                .catch((err) => res.send(err));
        })
        .catch((error) => {
            console.error(error);
        });
});

// Delete a Homeowner
router.delete("/api/removeHomeowner/:id", (req, res) => {
    const { id } = req.params;
    models.HomeOwners.destroy({
        where: {
            id,
        },
    })
        .then(() => {
            res.send({
                deleted: true,
            });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send(error);
        });
});

// Update a Homeowner
router.put("/api/updateHomeowner/:id", (req, res) => {
    const { id } = req.params;
    const {
        firstName,
        lastName,
        address,
        city,
        state,
        zipcode,
        monthlyDues,
        email,
        phone,
    } = req.body;
    models.HomeOwners.update(
        {
            firstName,
            lastName,
            fullName: `${req.body.lastName}, ${req.body.firstName}`,
            address,
            city,
            state,
            zipcode,
            monthlyDues,
            email,
            phone,
        },
        {
            where: {
                id,
            },
        },
    )
        .then(() => {
            const sqlGetQuery = `SELECT * FROM homeowners WHERE ID = (SELECT id FROM homeowners WHERE id = '${id}')`;
            return dbConnection
                .query(sqlGetQuery, {
                    model: models.Hoa,
                })
                .then((resp) => {
                    res.send({
                        infoWasUpdated: true,
                        homeOwner: resp[0].dataValues,
                    });
                });
        })
        .catch((error) => {
            console.error(error);
        });
});

// Get ALL HomeOwners
router.get("/api/getHomeowners/:hoaId", (req, res) => {
    const { hoaId } = req.params;
    models.HomeOwners.findAll({
        where: {
            hoaId,
        },
    })
        .then((homeowners) => {
            homeowners.forEach((homeowner) => {
                homeowner.fullName = `${homeowner.lastName}, ${homeowner.firstName}`;
                return homeowner;
            });
            res.send(homeowners);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Get a Homeowners current balance
router.post("/api/memberBalance", (req, res) => {
    const {
        hoaId, id, createdAt, monthlyDues,
    } = req.body;
    const finances = {};
    const totalOwedOverLifetime = howManyMonths(createdAt) * monthlyDues;
    finances.totalOwedOverLifetime = totalOwedOverLifetime;

    models.Revenues.findAll({
        where: {
            hoaId,
            accountId: id,
        },
    })
        .then((paymentObjects) => {
            const paymentArray = paymentObjects.map((paymentObject) => Number(paymentObject.amountPaid));
            const totalPaidOverLifetime = paymentArray.reduce(
                (a, b) => a + b,
                0,
            );
            finances.totalPaidOverLifetime = totalPaidOverLifetime;
        })
        .then(() => {
            const balance = finances.totalOwedOverLifetime - finances.totalPaidOverLifetime;
            return models.HomeOwners.update(
                {
                    balanceDue: balance,
                },
                {
                    where: {
                        hoaId,
                        id,
                    },
                },
            );
        })
        .catch((error) => {
            console.error(error);
        });
});

module.exports.homeOwnersRouter = router;
