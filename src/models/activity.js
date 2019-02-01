const databse = require("../database");

exports.addActivity = function(activity) {
  return databse.insert("activities", activity);
};

exports.getActivity = function(activityId) {
  return databse.get("activities", { id: activityId });
};
