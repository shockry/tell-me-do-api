const activityModel = require("../models/activity");

exports.getUserActivities = async function(req, res, next) {
  try {
    const activities = await activityModel.getUserActivities(req.user.id);
    res.send(activities);
  } catch (error) {
    next(error);
  }
};
