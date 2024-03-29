module.exports = {
  mongoURI: process.env.MONGO_URI,
  apiKey: process.env.API_KEY,
  redisUri: process.env.REDIS_URL,
  postgresUri: process.env.DATABASE_URL,
  globalApiKey: process.env.API_KEY,
  sessionKey: process.env.SESSION_KEY
};
