exports.getCurrentUser = async (req, res) => {
  delete req.user.password;
  return res.status(200).send({ ...req.user, isAuthenticated: req.isAuthenticated() });
};
