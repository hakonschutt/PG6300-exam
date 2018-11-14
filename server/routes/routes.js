const express = require('express');
const path = require('path');

const initSignRoutes = require('./sign.routes');
const initUserRoutes = require('./user.routes');
const initQuizRoutes = require('./quiz.routes');

const initRoutes = (app) => {
  app.use('/api/v1/sign', initSignRoutes());
  app.use('/api/vi/users', initUserRoutes());
  app.use('/api/v1/quizzes', initQuizRoutes());

  if (['production', 'staging'].includes(process.env.NODE_ENV)) {
    app.use(express.static('public'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
    });
  }
};

module.exports = initRoutes;
