const database = require("../database");

exports.addActivityToUser = function(activity, userId) {
  return database.insert("activities", { ...activity, user: userId });
};

exports.getActivity = function(activityId) {
  return database.get("activities", { id: activityId });
};
