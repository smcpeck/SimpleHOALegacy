const express = require("express");
const Sequelize = require("sequelize");
const { dbConnection, models } = require("../database/index");

const router = new express.Router();

//* ****************************
// HOA
//* ****************************

// when a user attemps to login, this endpoint will be hit (see handleClick function in Login.jsx):
router.get("/checkForUser/:firebaseid", (req, res) => {
    const sqlQuery = `SELECT * FROM hoa WHERE firebaseid='${req.params.firebaseid}'`;
    dbConnection
        .query(sqlQuery, {
            model: models.Hoa,
        })
        .then((hoaInfoFromDatabase) => {
            const hoaInfoFromDb = hoaInfoFromDatabase[0];
            let response = {
                registered: false,
            };
            if (hoaInfoFromDb) {
                response = {
                    registered: !!hoaInfoFromDatabase.length,
                    hoaInfoFromDb: hoaInfoFromDb.dataValues,
                };
            }
            // send back an object with regisetered equal to true or false:
            /* registered will be false if an empty array is returned (this means this is the first
                time the user signed-in so the firebaseid wasn't saved in the db yet) */
            res.send(response);
        })
        .catch((err) => {
            console.error(err, "ERROR: CANNOT SELECT ACCOUNTS.");
        });
});

// this endpoint is hit when a new user sumbits the HoaInfo form (see handleSubmit in InputInfo.jsx)
router.post("/saveHoaInfo", (req, res) => {
    const {
        name,
        address,
        city,
        state,
        zipcode,
        phone,
        email,
        firebaseid,
    } = req.body;

    // when the form is submitted, query the database for the user with the logged-in firebaseid
    const sqlQuery1 = `SELECT * FROM hoa WHERE firebaseid='${firebaseid}'`;
    dbConnection
        .query(sqlQuery1, {
            model: models.Hoa,
        })
        .then((currentHoaInfo) => {
            // return the user's info retrieved fro mthe database
            if (currentHoaInfo.length) {
                return res.send(currentHoaInfo[0]);
            }
            /* else, if currentHoaInfo comes back as an empty array (meaning they're a new user),
         save their data in the database */
            const sqlQuery = `INSERT INTO hoa (name, address, city, state, zipcode, phone, email, firebaseid) 
        VALUES ('${name}', '${address}', '${city}', '${state}', '${zipcode}', '${phone}', '${email}', '${firebaseid}')`;
            return dbConnection
                .query(sqlQuery, {
                    model: models.Hoa,
                    type: Sequelize.QueryTypes.INSERT,
                })
                .then(() => {
                    const sqlGetQuery = `SELECT * FROM hoa WHERE ID = (SELECT MAX(ID) FROM hoa WHERE firebaseid = '${firebaseid}')`;
                    return dbConnection
                        .query(sqlGetQuery, {
                            model: models.Hoa,
                            // type: models.Sequelize.QueryTypes.INSERT,
                        })
                        .then((resp) => {
                            res.send({
                                infoWasSaved: true,
                                hoaInfoFromDb: resp[0].dataValues,
                            });
                        })
                        .catch((err) => res.send(err));
                })
                .catch((err) => {
                    console.error("ERROR: Info was not saved.", err);
                    res.status(500).send({
                        infoWasSaved: false,
                    });
                });
        });
});

module.exports.hoaRouter = router;
