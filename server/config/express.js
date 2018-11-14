const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const keys = require('./keys');
const initRoutes = require('../routes/routes');
const initPassport = require('./passport');
const initDatabase = require('./database');
const initWebsockets = require('./websockets');

const initExpress = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(session({
    secret: keys.sessionKey,
    resave: false,
    saveUninitialized: false
  }));

  initDatabase();
  initPassport(app);
  initRoutes(app);
  initWebsockets(app);

  return app;
};

module.exports = initExpress;
