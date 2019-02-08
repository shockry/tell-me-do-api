const express = require("express");
const activityModel = require("../models/activity");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const activity = await activityModel.getActivity(id);
  res.send(activity);
});

router.post("/", async (req, res) => {
  await activityModel.addActivity(req.body);
  res.sendStatus(200);
});

module.exports = router;
