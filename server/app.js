require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");
const bodyParser = require("body-parser");

const { hoaRouter } = require("./routes/hoa");
const { pdfRouter } = require("./routes/pdf");
const { revenueRouter } = require("./routes/revenues");
const { expenseRouter } = require("./routes/expenses");
const { homeOwnersRouter } = require("./routes/homeOwners");
const { staffRouter } = require("./routes/staff");
const { ticketRouter } = require("./routes/tickets");
const { boardRouter } = require("./routes/boardMembers");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    }),
);

// serve static files
app.use(express.static(`${__dirname}/../client/dist`));

// user server routes
app.use(hoaRouter);
app.use(pdfRouter);
app.use(revenueRouter);
app.use(expenseRouter);
app.use(homeOwnersRouter);
app.use(staffRouter);
app.use(ticketRouter);
app.use(boardRouter);

// force requests to client files
app.get("*", (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`you servin on port ${port}`);
});
