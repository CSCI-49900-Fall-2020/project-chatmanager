const ChatBotManager = require('Project-chatmanagerlibrary/chatBotManager');
module.exports = function(app) {
  const {
    oauthToken,
    signingSecret,
    eventPort,
    interactiveMessagePort,
  } = app.get('slackBotConfig');

  const {
    token,
  } = app.get('discordBotConfig');

  const botOptions = {
    slackBotConfig: {
      oauthToken,
      signingSecret,
      eventPort,
      interactiveMessagePort,
    },
    discordBotConfig: {
      token,
    },
  };
  const bot = new ChatBotManager(botOptions);

  app.set('chatBotManager', bot);
  bot.start();
  return bot;
};
