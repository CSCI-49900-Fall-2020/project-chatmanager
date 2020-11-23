const ChatBotManager = require('Project-chatmanagerlibrary/chatBotManager');
module.exports = function(app) {
  const {
    oauthToken,
    signingSecret,
    eventPort,
    interactiveMessagePort,
    slackEventAPIPath,
    slackSlashCommandPath,
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
      slackSlashCommandPath,
    },
    discordBotConfig: {
      token,
    },
  };

  const bot = new ChatBotManager(botOptions);
  bot.setupCommandListener(async (command, commandArgs, source) => {
    if (command === 'gm') {
      const tmp = commandArgs.split(' ');
      const platform = tmp.shift();
      const channelId = tmp.shift();
      const message = tmp.join(' ');
      const data = {
        platform,
        channelId,
        message,
        source,
      };
      await app.service('api/v1/group-message').create(data);
      return {
        result: 'message sent',
      };
    } else if (command === 'ls') {
      const tmp = commandArgs.split(' ');
      const lsType = tmp.shift();
      if (lsType === 'channel') {
        const platform = tmp.shift();
        const channels = await app.service('api/v1/list-channels').find({
          query: {
            platform,
          }});
        return channels;
      } if (lsType === 'member') {
        const platform = tmp.shift();
        const members = await app.service('api/v1/list-members').find({
          query: {
            platform,
          }
        });
        return members;
      }
    } else if (command === 'dm') {
      const tmp = commandArgs.split(' ');
      const platform = tmp.shift();
      const userId = tmp.shift();
      const message = tmp.join(' ');
      const data = {
        platform,
        userId,
        message,
        source,
      };
      await app.service('api/v1/direct-message').create(data);
      return {
        result: 'message sent',
      };
    }
  });

  app.set('chatBotManager', bot);
  bot.start(app);
  return bot;
};
