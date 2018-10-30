const npsUtils = require("nps-utils");
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    publish: {
      description: "clean the project before delievery",
      default: concurrent.nps('publish.frontend', 'publish.server', 'publish.parent'),
      frontend: 'npm run clean --prefix frontend',
      server: 'npm run clean --prefix server',
      parent: rimraf('node_modules')
    },
    setup: {
      description: "Install all dependencies and run build setup",
      default: concurrent.nps('setup.frontend', 'setup.server'),
      frontend: 'npm install --prefix frontend --silent',
      server: 'npm install --prefix server --silent'
    },
    validate: {
      description: "Validate setup for frontend and server",
      default: concurrent.nps('validate.frontend', 'validate.server'),
      frontend: 'npm run validate --prefix frontend',
      server: 'npm run validate --prefix server'
    },
    test: {
      description: "Run all tests",
      default: concurrent.nps("test.frontend", "test.server"),
      frontend: "npm run test --prefix frontend",
      server: "npm run test --prefix server"
    },
    build: {
      description: "Validate setup for frontend and server",
      default: 'npm run build --prefix frontend'
    },
    start: {
      description: "Run production server",
      default: 'node server/index.js'
    }
  }
};
