const express = require('express');

const requireUser = require('../middlewares/requireUser');
const quizHandler = require('../handlers/quiz.handler');

const initQuizRoutes = () => {
  const router = express.Router();

  router
    .route('/')
    .all(requireUser)
    .get(quizHandler.getQuizzes)
    .post(quizHandler.createQuiz);

  router
    .route('/:id')
    .all(requireUser)
    .post(quizHandler.createQuizQuestion)
    .delete(quizHandler.deleteQuiz);

  return router;
};

module.exports = initQuizRoutes;
