const activityModel = require("../models/activity");

exports.getUserActivities = async function(req, res) {
  const activities = await activityModel.getUserActivities(req.user.id);
  res.send(activities);
};
