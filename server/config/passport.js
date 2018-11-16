const passport = require('passport');
const User = require('../database/models/User');
const passportService = require('../services/Passport');

const initPassport = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user.userId);
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

  passport.use('login', passportService.loginStrategy);

  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports = initPassport;
