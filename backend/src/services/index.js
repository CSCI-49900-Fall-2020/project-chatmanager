const users = require('./users/users.service.js');
const apiV1Boardcast = require('./api/v1/boardcast/boardcast.service.js');
const apiV1Members = require('./api/v1/members/members.service.js');
const groupMessage = require('./group-message/group-message.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(apiV1Boardcast);
  app.configure(apiV1Members);
  app.configure(groupMessage);
  app.configure(groupMessage);
};
