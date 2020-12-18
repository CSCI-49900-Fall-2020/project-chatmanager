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
    commandConfig: {
      directMessage: 'pm',
      groupMessage: 'gm',
      sendFile: 'file',
      help: 'help',
      list: 'ls',
      talkTo: 'talkto',
      stop: 'stop'
    },
  };

  const bot = new ChatBotManager(botOptions);
  const { commandConfig } = botOptions;

  bot.setMessageListener((message, sender) => {
    const redis = app.get('redis');
    const {
      userId: senderId,
      userName: senderName,
      platform: senderPlatform,
    } = sender;
    const hashKey = `${senderPlatform}_${senderName}_${senderId}`;
    // the whole message is a value stored in redis.
    redis.hgetall(hashKey, (err, cacheCommand) => {
      if (err) throw err;

      if (cacheCommand) {
        const data = {
          platform: cacheCommand.platform,
          userId: cacheCommand.userId,
          message: `${senderName}(${senderPlatform}): ${message}`
        };
        console.log(data);
        bot.sendDirectMessage(data);
      }
    });
  });

  bot.setupCommandListener(commandConfig.stop, async (command, commandArgs, sender) => {
    const {
      userId: senderId,
      userName: senderName,
      platform: senderPlatform,
    } = sender;
    const hashKey = `${senderPlatform}_${senderName}_${senderId}`;
    const redis = app.get('redis');
    redis.del(hashKey);
    return 'you stopped the conversation';
  });

  bot.setupCommandListener(commandConfig.talkTo, async (command, commandArgs, sender) => {
    const redis = app.get('redis');
    const tmp = commandArgs.split(' ');
    const platform = tmp.shift();
    const userId = tmp.shift();

    const {
      userId: senderId,
      userName: senderName,
      platform: senderPlatform,
    } = sender;

    try {
      const allMembers = await bot.getMembers();
      const receiver = allMembers.find(m => m.id === userId);
      const cacheCommand = {
        command: 'directMessage',
        platform: platform,
        userId: userId,
        userName: receiver.name,
        senderId: senderId,
        senderName: senderName,
        senderPlatform: senderPlatform,
      };

      const hashKey = `${senderPlatform}_${senderName}_${senderId}`;
      redis.hmset(hashKey, cacheCommand, (err, reply) => {
        if (err) {
          console.log(err);
          throw err;
        }
      });
      return `now you're talking to ${receiver.name} on ${platform}`;
    } catch(ex) {
      return `cannot find the user with userId ${userId}`;
    }
  });
  bot.start(app);
  app.set('chatBotManager', bot);
  return bot;
};
