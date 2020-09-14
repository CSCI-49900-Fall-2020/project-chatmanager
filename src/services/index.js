const users = require('./users/users.service.js');
const apiV1Boardcast = require('./api/v1/boardcast/boardcast.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(apiV1Boardcast);
};
