const pg = require('pg');
const pgCamelCase = require('pg-camelcase');
const keys = require('../config/keys');
const queries = require('./queries');
const seeds = require('./seeds');

pgCamelCase.inject(pg);
const { Pool } = pg;
const pool = new Pool({ connectionString: keys.postgresUri });

pool.on('error', (err) => {
  console.error('Unexpected error', err);
  process.exit(-1);
});


exports.query = async (sql, inputs = null) => {
  let res = null;
  const client = await pool.connect();
  try {
    res = await client.query(sql, inputs);
  }
  finally {
    client.release();
  }

  return res;
};

exports.build = async () => {
  const client = await pool.connect();
  try {
    await client.query(queries.createUuid);
    await client.query(queries.createUserTable);
    await client.query(queries.createQuizTable);
    await client.query(queries.createQuestionTable);

    if (['development', 'docker'].includes(process.env.NODE_ENV)) {
      seeds.init();
    }
  }
  finally {
    await client.release();
  }
};
