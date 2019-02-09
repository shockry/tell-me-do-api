require("dotenv").config();
const express = require("express");
const mainRouter = require("./routes");
const { initializeDatabase } = require("./database");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

initializeDatabase();

app.use(bodyParser.json());
app.use(mainRouter);

app.use(function(req, res) {
  res.status(404).end();
});

app.use(function(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).send(message);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
