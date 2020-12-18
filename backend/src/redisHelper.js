const redis = require('redis');

module.exports = function (app) {
  const redisConfig = app.get('redis');
  const client = redis.createClient(redisConfig);
  app.set('redis', client);
};
