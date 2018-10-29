const npsUtils = require("nps-utils");
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    fresh: {
      description: "clean the project before delievery",
      default: series(
        rimraf("server/node_modules"),
        rimraf("frontend/node_modules"),
        rimraf("node_modules")
      )
    },
    start: {
      description: "Run production server",
      default: "node index.js"
    }
  }
};
