const express = require('express');
const path = require('path');
const Database = require('../database/Database');

class Server {
  constructor() {
    this.app = express();
  }

  /**
   * Adds body parser to server app
   * @return this
   */
  withBodyParser() {
    return this;
  }

  /**
   * Adds cors to server app
   * @return this
   */
  withCors() {
    return this;
  }

  /**
   * Adds morgan to server app
   * @return this
   */
  withMorgan() {
    return this;
  }

  /**
   * Adds cookie session to server app
   * @return this
   */
  withCookieParser() {
    return this;
  }

  /**
   * Add passport to the server
   * @return this
   */
  withPassport() {
    return this;
  }

  /**
   * Add mongodb to the server app
   * @return this
   */
  withPostgres() {
    Database.build();

    return this;
  }

  /**
   * Addes routes to the application
   * @return this
   */
  withRoutes() {
    this.app.get('/api/', (req, res) => {
      res.send({ hello: 'test' });
    });

    return this;
  }

  withStaticServe() {
    if (['production', 'staging'].includes(process.env.NODE_ENV)) {
      this.app.use(express.static('frontend/public'));
      this.app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
      });
    }

    return this;
  }

  /**
   * Startes server on port
   */
  listen() {
    const PORT = process.env.PORT || 5000;

    this.app.listen(PORT, () => {
      console.log('Listening on port', PORT);
    });
  }
}

module.exports = Server;
