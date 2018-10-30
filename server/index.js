const Server = require('./classes/Server');

new Server()
  .withBodyParser()
  .withCors()
  .withMorgan()
  .withCookieParser()
  .withPassport()
  .withPostgres()
  .withRoutes()
  .withStaticServe()
  .listen();
