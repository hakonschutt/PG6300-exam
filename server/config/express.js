const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const uuid = require('uuid/v4');

const keys = require('./keys');
const initRoutes = require('../routes/routes');
const initPassport = require('./passport');
const initDatabase = require('./database');
const initWebsockets = require('./websockets');

const initExpress = () => {
  const app = express();

  const sessionMiddleware = session({
    genid: () => uuid(),
    cookie: { maxAge: 5 * 60 * 60 * 1000 },
    secret: keys.sessionKey,
    resave: false,
    saveUninitialized: false
  });

  app.use(bodyParser.json());
  app.use(sessionMiddleware);

  initDatabase();
  initPassport(app);
  initRoutes(app);

  const server = initWebsockets(app, sessionMiddleware);

  return server;
};

module.exports = initExpress;
