const express = require("express");
const { dbConnection, models } = require("../database/index");

const router = new express.Router();

//* ****************************
// WORK TICKETS
//* ****************************

// Add a Work Ticket
router.post("/api/addTicket", (req, res) => {
    const {
        hoaId, title, description, assignedTo,
    } = req.body;
    models.WorkTickets.create({
        hoaId,
        title,
        description,
        assignedTo,
    })
        .then(() => {
            res.send(201);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Get Open Tickets
router.post("/api/getOpenTickets", (req, res) => {
    const { hoaId } = req.body;
    models.WorkTickets.findAll({
        where: {
            isOpen: 1,
            hoaId,
        },
    })
        .then((openTickets) => {
            res.send(openTickets);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Get All Tickets
router.get("/api/getAllTickets", (req, res) => {
    const { hoaId } = req.body;
    models.WorkTickets.findAll({
        where: {
            hoaId,
        },
    })
        .then((allTickets) => {
            res.send(allTickets);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Close a Work Ticket
router.post("/api/closeWorkTicket", (req, res) => {
    models.WorkTickets.update(
        {
            isOpen: 0,
            dateCompleted: dbConnection.literal("CURRENT_TIMESTAMP"),
        },
        {
            where: {
                id: req.body.id,
            },
        },
    )
        .then(() => {
            res.send(204);
        })
        .catch((error) => {
            console.error(error);
        });
});

module.exports.ticketRouter = router;
