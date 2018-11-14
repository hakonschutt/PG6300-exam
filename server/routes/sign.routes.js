const passport = require('passport');
const express = require('express');
require('../services/Passport');

const Authentication = require('../services/Authentication');
const requireUser = require('../middlewares/requireUser');

const requireUserSignin = passport.authenticate('login', { session: false });
const requireApiKey = passport.authenticate('apikey', { session: false });

const initSignRoutes = () => {
  const router = express.Router();

  router
    .route('/in')
    .post(requireApiKey)
    .post(requireUserSignin)
    .post(Authentication.signin);

  router
    .route('/out')
    .post(requireApiKey)
    .post(requireUser)
    .post(Authentication.logout);

  router
    .route('/up')
    .post(requireApiKey)
    .post(Authentication.signup)
    .post(requireUserSignin)
    .post(Authentication.signin);

  return router;
};

module.exports = initSignRoutes;
