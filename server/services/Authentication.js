
exports.signin = (req, res) => {
  res.send({ singin: true });
};

exports.signup = (req, res) => {
  res.send({ singup: true });
};

exports.logout = (req, res) => {
  res.send({ logout: true });
};
