const express = require("express");
const activityModel = require("../models/activity");
const {
  addActivityToUser,
  updateActivity,
  deleteActivity
} = require("../controllers/activity");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const activity = await activityModel.getActivity(id);
  res.send(activity);
});

router.post("/", auth, addActivityToUser);
router.patch("/:id", auth, updateActivity);
router.delete("/:id", auth, deleteActivity);

module.exports = router;
