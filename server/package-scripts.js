const npsUtils = require("nps-utils");
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    fresh: {
      description: "clean the project before delievery",
      default: concurrent.nps('fresh.coverage', 'fresh.dependencies'),
      coverage: rimraf('coverage'),
      dependencies: rimraf('node_modules')
    },
    validate: {
      description: 'Checks project for errors and warnings',
      default: series.nps('validate.lint', 'validate.test'),
      lint: 'eslint . --quiet',
      test: 'jest'
    },
    prepublish: {
      description: 'Executes checks before publishing',
      default: series.nps('validate', 'fresh')
    },
    test: {
      description: 'Run tests',
      default: 'jest --coverage',
      watch: {
        description: 'Run tests in watch mode',
        default: 'jest --watch'
      }
    },
    dev: {
      description: 'Run dev server',
      default: 'nodemon index.js',
      watch: {
        description: 'Run dev server in watch mode with tests',
        default: concurrent.nps('dev', 'test.watch')
      }
    }
  }
};
