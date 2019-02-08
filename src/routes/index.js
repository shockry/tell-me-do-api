const express = require("express");
const router = express.Router();
const activityRouter = require("./activity");
const auth = require("../middlewares/auth");

router.use("/activities", auth, activityRouter);

module.exports = router;
