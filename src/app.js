require("dotenv").config();
const express = require("express");
const mainRouter = require("./routes");

const app = express();
const port = process.env.PORT || 3001;

app.use(mainRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));
