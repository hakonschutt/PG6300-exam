module.exports = {
  mongoURI: process.env.MONGO_URI,
  globalApiKey: process.env.GLOBAL_API_KEY,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  postgresUser: process.env.PGUSER,
  postgresHost: process.env.PGHOST,
  postgresDatabase: process.env.PGDATABASE,
  postgresPassword: process.env.PGPASSWORD,
  postgresPort: process.env.PGPORT
};
