const passport = require('passport');
const express = require('express');
require('../services/Passport');

const Authentication = require('../services/Authentication');
const requireUser = require('../middlewares/requireUser');

const requireUserSignin = passport.authenticate('login');

const initSignRoutes = () => {
  const router = express.Router();

  router
    .route('/in')
    .post(requireUserSignin)
    .post(Authentication.signin);

  router
    .route('/out')
    .post(requireUser)
    .post(Authentication.logout);

  router
    .route('/up')
    .post(Authentication.signup)
    .post(requireUserSignin)
    .post(Authentication.signin);

  return router;
};

module.exports = initSignRoutes;
