const npsUtils = require("nps-utils");
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    fresh: {
      description: "clean the project before delievery",
      default: rimraf('public'),
    },
    build: {
      description: 'Build project',
      default: series(rimraf('public'), 'NODE_ENV=production webpack --progress --config webpack/webpack.prod.config.js'),
    },
    dev: {
      description: 'Run dev server',
      default: 'webpack-dev-server --progress --config webpack/webpack.dev.config.js'
    }
  }
};
