const Database = require('../database/Database');
const queries = require('../database/queries');
const seeds = require('../database/seeds');

const initDatabase = async () => {
  try {
    await Database.query(queries.createUuid);
    await Database.query(queries.createUserTable);
    await Database.query(queries.createQuizTable);
    await Database.query(queries.createQuestionTable);

    if (['development', 'docker'].includes(process.env.NODE_ENV)) {
      seeds.init();
    }
  }
  catch (err) {
    /* eslint-disable */
		console.error('Unexpected error with the database', err);
		/* eslint-enable */
    process.exit(-1);
  }
};

module.exports = initDatabase;
