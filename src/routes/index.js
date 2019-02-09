const express = require("express");
const router = express.Router();
const activityRouter = require("./activity");
const userRouter = require("./user");

router.use("/activities", activityRouter);
router.use("/users", userRouter);

module.exports = router;
