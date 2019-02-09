const activityModel = require("../models/activity");
const { pick } = require("../utils");

exports.addActivityToUser = async function(req, res) {
  await activityModel.addActivityToUser(req.body, req.user.id);
  res.status(201).end();
};

exports.updateActivity = async function(req, res) {
  const updatePatch = pick(req.body, ["name"]);
  const activityToUpdate = await activityModel.getActivity(req.params.id);
  if (activityToUpdate.user !== req.user.id) {
    return res.status(401).end();
  }
  await activityModel.updateActivity(req.params.id, updatePatch);
  res.end();
};

exports.deleteActivity = async function(req, res) {
  const activityToDelete = await activityModel.getActivity(req.params.id);
  if (!activityToDelete) {
    return res.status(404).end();
  }
  if (activityToDelete.user !== req.user.id) {
    return res.status(401).end();
  }
  await activityModel.deleteActivity(req.params.id);
  res.end();
};
