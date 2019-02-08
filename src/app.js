require("dotenv").config();
const express = require("express");
const mainRouter = require("./routes");
const initializeDatabase = require("./database").initializeDatabase;
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

initializeDatabase();

app.use(bodyParser.json());
app.use(mainRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));
