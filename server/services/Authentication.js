const User = require('../database/models/User');

exports.signin = (req, res) => {
  req.session.save(async (err) => {
    if (err) {
      return res.status(422).send(err);
    }

    delete req.user.password;

    return res.status(200).send({ ...req.user, isAuthenticated: req.isAuthenticated() });
  });
};

exports.signup = async (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(422).send();
  }

  try {
    const old = await User.findByEmail(email);
    if (old) {
      throw new Error('User already exists');
    }

    await new User({ name, email, password }).save();
    return next();
  }
  catch (err) {
    return res.status(409).send(err);
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send();
    }
    else {
      res.status(204).send();
      req.logout();
    }
  });
};
