const express = require("express");
const { models } = require("../database/index");

const router = new express.Router();

//* ****************************
// STAFF
//* ****************************

// Add a Staff Person
router.post("/api/addStaff", (req, res) => {
    const {
        hoaId, department, firstName, lastName, phone, email,
    } = req.body;
    models.Staff.create({
        hoaId,
        department,
        firstName,
        lastName,
        fullName: `${req.body.lastName}, ${req.body.firstName}`,
        phone,
        email,
    })
        .then(() => {
            res.send(201);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Get ALL Staff
router.post("/api/getStaff", (req, res) => {
    const { hoaId } = req.body;
    models.Staff.findAll({
        where: {
            hoaId,
        },
    })
        .then((staff) => {
            res.send(staff);
        })
        .catch((error) => {
            console.error(error);
        });
});

module.exports.staffRouter = router;
