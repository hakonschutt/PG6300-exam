const LocalStrategy = require('passport-local');

const User = require('../database/models/User');

exports.loginStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      const user = await User.findByEmail(email);
      await user.comparePassword(password);

      return done(null, user);
    }
    catch (err) {
      return done(err, false);
    }
  }
);
