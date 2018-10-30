const npsUtils = require("nps-utils");
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    fresh: {
      description: "clean the project before delievery",
      default: concurrent.nps('fresh.code', 'fresh.dependencies'),
      code: rimraf('public'),
      dependencies: rimraf('node_modules')
    },
    check: {
      description: 'Checks project for errors and warnings',
      default: concurrent.nps('check.lint', 'check.test'),
      lint: 'eslint .',
      test: 'jest'
    },
    prepublish: {
      description: 'Executes checks before publishing',
      default: series.nps('check', 'fresh')
    },
    build: {
      description: 'Build project',
      default: series.nps('fresh.code', 'build.code'),
      code: 'NODE_ENV=production webpack --progress --config webpack/webpack.prod.config.js'
    },
    test: {
      description: 'Run tests',
      default: 'jest -- --coverage',
      watch: {
        description: 'Run tests in watch mode',
        default: 'jest -- --watch'
      }
    },
    dev: {
      description: 'Run dev server',
      default: 'webpack-dev-server --progress --config webpack/webpack.dev.config.js',
      watch: {
        description: 'Run dev server in watch mode with tests',
        default: concurrent.nps('dev', 'dev.test.watch')
      }
    }
  }
};
