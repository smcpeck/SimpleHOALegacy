const express = require("express");
const pdf = require("html-pdf");
const pdfTemplate = require("../../documents/index");

const router = new express.Router();

//* ****************************
//  PDF generation
//* ****************************

// post route for pdf generation
router.post("/api/createPdf", (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (error) => {
        if (error) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

// get route for serving pdf to client
router.get("api/fetchPdf", (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
});

module.exports.pdfRouter = router;
