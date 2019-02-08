module.exports = function(req, res, next) {
  const user = req.headers.authorization;
  if (!user) {
    res.status(401).end();
  }
  req.user = { id: user };
  next();
};
