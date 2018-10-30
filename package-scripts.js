const npsUtils = require("nps-utils");
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    publish: {
      description: "clean the project before delievery",
      default: concurrent.nps('fresh.frontend', 'fresh.server', 'fresh.parent'),
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
    test: {
      description: "Run all tests",
      default: concurrent.nps("test.frontend", "test.server"),
      frontend: "npm run test --prefix frontend",
      server: "npm run test --prefix server"
    },
    start: {
      description: "Run production server",
      default: series.nps('start.build', 'start.server'),
      build: 'npm run build --prefix frontend',
      server: 'node index.js'
    }
  }
};
