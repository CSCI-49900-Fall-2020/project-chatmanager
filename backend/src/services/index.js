const users = require('./users/users.service.js');
const groupMessage = require('./group-message/group-message.service.js');
const listChannels = require('./list-channels/list-channels.service.js');
const listMembers = require('./list-members/list-members.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(groupMessage);
  app.configure(listChannels);
  app.configure(listMembers);
};
