const database = require("../database");

exports.addActivityToUser = function(activity, userId) {
  return database.insert("activities", { ...activity, user: userId });
};

exports.getActivity = function(activityId) {
  return database.findFirst("activities", { id: parseInt(activityId) });
};

exports.getUserActivities = function(userId) {
  return database.find("activities", { user: userId });
};

exports.updateActivity = function(activityId, updatePatch) {
  return database.update(
    "activities",
    { id: parseInt(activityId) },
    updatePatch
  );
};

exports.deleteActivity = function(activityId) {
  return database.delete("activities", { id: parseInt(activityId) });
};
