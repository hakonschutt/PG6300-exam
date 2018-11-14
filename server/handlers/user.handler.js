exports.getCurrentUser = async (req, res) => {
  delete req.user.password;

  /* eslint-disable */
  console.log(req.user);
  /* eslint-enable */

  res.status(200).send(req.user);
};
