const passport = require('passport');
const express = require('express');

const requireUser = require('../middlewares/requireUser');
const quizHandler = require('../handlers/quiz.handler');

const requireApiKey = passport.authenticate('apikey');

const initQuizRoutes = () => {
  const router = express.Router();

  router
    .route('/')
    .all(requireApiKey)
    .all(requireUser)
    .get(quizHandler.getQuizzes)
    .post(quizHandler.createQuiz);

  router
    .route('/:id')
    .all(requireApiKey)
    .all(requireUser)
    .post(quizHandler.createQuizQuestion)
    .patch(quizHandler.updateQuiz)
    .delete(quizHandler.deleteQuiz);

  router
    .route('/:quizId/:questionId')
    .all(requireApiKey)
    .all(requireUser)
    .patch(quizHandler.updateQuizQuestion)
    .delete(quizHandler.deleteQuizQuestion);

  return router;
};

module.exports = initQuizRoutes;
