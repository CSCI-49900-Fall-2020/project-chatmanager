const { GeneralError } = require('@feathersjs/errors');
/* eslint-disable no-unused-vars */

/**
 * Group Message Service
 * @param {Object} options - default constructor value
 * @param {Object} app - defualt constructor value
 */
exports.GroupMessage = class GroupMessage {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  /**
   * Send a group message to a channel
   * @param {Object} data - contains requisite data for sending group message
   * @param {string} data.platform - platform information to send message
   * @param {Number} data.channelId - channel id to send message
   * @param {string} data.message - message to be sent
   * @param {Object} data.source - 
   * @param {Object} params - additional parameters to service call method
   * @returns {Promise} promise to send message to channel
   */
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
