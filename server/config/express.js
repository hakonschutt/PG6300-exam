const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const uuid = require('uuid/v4')
const FileStore = require('session-file-store')(session);

const keys = require('./keys');
const initRoutes = require('../routes/routes');
const initPassport = require('./passport');
const initDatabase = require('./database');
const initWebsockets = require('./websockets');

const initExpress = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(session({
    genid: () => uuid(),
    store: new FileStore(),
    cookie: { maxAge: 60 * 60 * 1000 },
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
