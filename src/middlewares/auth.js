module.exports = function(req, res, next) {
  const user = req.headers.authorization;
  if (!user) {
    next({ status: 401, message: "Not authorized" });
  }
  req.user = { id: user };
  next();
};
