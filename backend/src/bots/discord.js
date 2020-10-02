const DiscordBot = require('../../../Project-chatmanagerlibrary/discordBot');

module.exports = function(app) {
  const discordBot = new DiscordBot();
  app.set('discordBot', discordBot);
  discordBot.start();
  return discordBot;
};
