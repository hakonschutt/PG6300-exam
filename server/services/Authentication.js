const passport = require('passport');
const User = require('../database/models/User');

exports.signin = (req, res) => {
  req.session.save((err) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.status(204).send();
  });
};

exports.signup = async (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(422).send();
  }

  try {
    await User.findByEmail(email);
    await new User({ name, email, password }).save();

    return next();
  }
  catch (err) {
    return res.status(409).send(err);
  }
};

exports.logout = (req, res) => {
  req.logout();
  res.status(204).send();
};
