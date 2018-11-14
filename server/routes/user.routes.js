const passport = require('passport');
const express = require('express');

const requireUser = require('../middlewares/requireUser');
const userHandler = require('../handlers/user.handler');

const requireApiKey = passport.authenticate('apikey');

const initUserRoutes = () => {
  const router = express.Router();

  router
    .route('/current')
    .get(requireApiKey)
    .get(requireUser)
    .get(userHandler.getCurrentUser);

  return router;
};

module.exports = initUserRoutes;
