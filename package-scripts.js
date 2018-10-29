const npsUtils = require("nps-utils");
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    fresh: {
      description: "clean the project before delievery",
      default: series(
        rimraf("node_modules"),
        rimraf("server/node_modules"),
        rimraf("frontend/node_modules")
      )
    },
    install: {
      description: "Install all dependencies",
      default: concurrent(
        "npm install --prefix client",
        "npm install --prefix server"
      )
    },
    start: {
      description: "Run production server",
      defult: "node index.js"
    }
  }
};
