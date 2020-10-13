const ChatBotManager = require('Project-chatmanagerlibrary/chatBotManager');
module.exports = function(app) {
  const {
    oauthToken,
    signingSecret,
    eventPort,
    interactiveMessagePort,
    slackEventAPIPath,
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
      slackEventAPIPath,
    },
    discordBotConfig: {
      token,
    },
  };

  const bot = new ChatBotManager(botOptions);
  bot.setupCommandListener((command, commandArgs, source) => {
    if (command === 'gm') {
      const tmp = commandArgs.split(' ');
      const platform = tmp.shift();
      const message = tmp.join(' ');
      const data = {
        platform,
        message,
        source,
      };

      return app.service('api/v1/group-message').create(data);
    }
  });

  app.set('chatBotManager', bot);
  bot.start(app);
  return bot;
};
