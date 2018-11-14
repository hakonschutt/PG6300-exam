const passport = require('passport');
const User = require('../database/models/User');

const initPassport = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    }
    catch (err) {
      done(null, false);
    }
  });

  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports = initPassport;
