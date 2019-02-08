const express = require("express");
const { getUserActivities } = require("../controllers/user");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/activities", auth, getUserActivities);

module.exports = router;
