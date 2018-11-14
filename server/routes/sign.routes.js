const passport = require('passport');
const express = require('express');
require('../services/Passport');

const Authentication = require('../services/Authentication');

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
    .post(Authentication.logout);

  router
    .route('/up')
    .post(requireApiKey)
    .post(Authentication.signup);

  return router;
};

module.exports = initSignRoutes;
