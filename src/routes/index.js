const express = require("express");
const router = express.Router();
const activityRouter = require("./activity");

router.use("/activities", activityRouter);

module.exports = router;
