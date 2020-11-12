const { GeneralError } = require('@feathersjs/errors');
/* eslint-disable no-unused-vars */
exports.GroupMessage = class GroupMessage {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async create (data, params) {
    const {
      platform,
      channelId,
      message,
      source,
    } = data;

    const app = this.app;
    const allChannels = await app.service('api/v1/list-channels').find({
      query: {
        platform
      }
    });
    const channel = allChannels.find(ch => ch.id === channelId);

    if (channel) {
      return app.get('chatBotManager').sendMessageChannel({
        platform,
        channelId: channel.id,
        message,
      });
    }

    return new GeneralError(`Channel: ${channelId} not found on ${platform} !`);
  }
};
