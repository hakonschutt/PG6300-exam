const requireUser = (req, res, next) => {
  if (!req.user || !req.isAuthenticated()) {
    return res.status(401).send();
  }

  return next();
};

module.exports = requireUser;
