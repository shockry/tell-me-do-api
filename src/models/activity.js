const database = require("../database");

exports.addActivityToUser = function(activity, userId) {
  return database.insert("activities", { ...activity, user: userId });
};

exports.getActivity = function(activityId) {
  return database.getFirst("activities", { id: activityId });
};

exports.getUserActivities = function(userId) {
  return database.get("activities", { user: userId });
};
