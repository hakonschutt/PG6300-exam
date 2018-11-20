const express = require('express');

const requireUser = require('../middlewares/requireUser');
const gameHandler = require('../handlers/game.handler');

const initGameRoutes = () => {
  const router = express.Router();

  router
    .route('/')
    .all(requireUser)
    .get(gameHandler.findPendingGames)
    .post(gameHandler.createNewMatch);

  router
    .route('/:token')
    .all(requireUser)
    .get(gameHandler.checkForGameAccess);

  return router;
};

module.exports = initGameRoutes;
