const express = require('express');

const requireUser = require('../middlewares/requireUser');
const requireUserPassword = require('../middlewares/requireUserPassword');
const userHandler = require('../handlers/user.handler');

const initUserRoutes = () => {
  const router = express.Router();

  router
    .route('/current')
    .all(requireUser)
    .get(userHandler.getCurrentUser)
    .patch(requireUserPassword)
    .patch(userHandler.updateCurrentUser);

  return router;
};

module.exports = initUserRoutes;
