const express = require('express');

const requireUser = require('../middlewares/requireUser');
const userHandler = require('../handlers/user.handler');

const initUserRoutes = () => {
  const router = express.Router();

  router
    .route('/current')
    .get(requireUser)
    .get(userHandler.getCurrentUser);

  return router;
};

module.exports = initUserRoutes;
