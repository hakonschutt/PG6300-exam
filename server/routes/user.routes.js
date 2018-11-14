const passport = require('passport');
const express = require('express');
require('../services/Passport');

const requireApiKey = passport.authenticate('apikey', { session: false });

const initUserRoutes = () => {
  const router = express.Router();

  router
    .route('/:id')
    .get(requireApiKey)
    .get();

  return router;
};

module.exports = initUserRoutes;
