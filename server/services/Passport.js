const LocalStrategy = require('passport-local');
const CustomStrategy = require('passport-custom');

const keys = require('../config/keys');
const User = require('../database/models/User');

exports.apiKeyStrategy = new CustomStrategy((req, done) => {
  const { auth } = req.headers;
  const isMatch = auth && auth === keys.globalApiKey;

  return done(null, isMatch);
});

exports.loginStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      const user = await User.findByEmail(email);
      const isMatch = await user.comparePassword(password);

      return done(null, isMatch ? user : false);
    }
    catch (err) {
      return done(err, false);
    }
  }
);
