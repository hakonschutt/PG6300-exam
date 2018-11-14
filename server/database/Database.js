const pg = require('pg');
const pgCamelCase = require('pg-camelcase');
const keys = require('../config/keys');

pgCamelCase.inject(pg);
const { Pool } = pg;
const pool = new Pool({ connectionString: keys.postgresUri });

pool.on('error', (err) => {
  /* eslint-disable */
  console.error('Unexpected error', err);
  /* eslint-enable */
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
