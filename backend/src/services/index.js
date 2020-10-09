const users = require('./users/users.service.js');
const groupMessage = require('./group-message/group-message.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(groupMessage);
};
