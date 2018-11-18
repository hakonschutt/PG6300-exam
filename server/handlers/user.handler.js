exports.getCurrentUser = async (req, res) => {
  delete req.user.password;
  return res.status(200).send({ ...req.user, isAuthenticated: req.isAuthenticated() });
};

exports.updateCurrentUser = async (req, res) => {
  try {
    const user = await req.user.update(req.body);

    delete user.password;

    return res.status(200).send(user);
  }
  catch (err) {
    return res.status(422).send();
  }
};
