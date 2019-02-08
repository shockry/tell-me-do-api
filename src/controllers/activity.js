const activityModel = require("../models/activity");

exports.addActivityToUser = async function(req, res) {
  await activityModel.addActivityToUser(req.body, req.user.id);
  res.end();
};
