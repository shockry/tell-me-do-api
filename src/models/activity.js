const database = require("../database");

exports.addActivity = function(activity) {
  return database.insert("activities", activity);
};

exports.getActivity = function(activityId) {
  return database.get("activities", { id: activityId });
};
