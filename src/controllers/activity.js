const activityModel = require("../models/activity");
const { pick } = require("../utils");

exports.addActivityToUser = async function(req, res, next) {
  try {
    await activityModel.addActivityToUser(req.body, req.user.id);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

exports.updateActivity = async function(req, res, next) {
  try {
    const updatePatch = pick(req.body, ["name"]);
    const activityToUpdate = await activityModel.getActivity(req.params.id);
    if (activityToUpdate.user !== req.user.id) {
      next({ status: 403, message: "Not authorized" });
    }
    await activityModel.updateActivity(req.params.id, updatePatch);
    res.end();
  } catch (error) {
    next(error);
  }
};

exports.deleteActivity = async function(req, res, next) {
  try {
    const activityToDelete = await activityModel.getActivity(req.params.id);
    if (activityToDelete.user !== req.user.id) {
      next({ status: 403, message: "Not authorized" });
    }
    if (!activityToDelete) {
      next({ status: 404, message: "Activity not found" });
    }
    await activityModel.deleteActivity(req.params.id);
    res.end();
  } catch (error) {
    next(error);
  }
};
