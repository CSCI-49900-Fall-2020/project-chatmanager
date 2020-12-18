const { GeneralError } = require('@feathersjs/errors');
/* eslint-disable no-unused-vars */
/**
 * Direct Message Service
 * @param {Object} option - default constructor 
 * @param {Object} app - default constructor
 */
exports.DirectMessage = class DirectMessage {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  /**
   * Send a direct Message to a user
   * @param {Object} data - contains requisite information to send the private message
   * @param {string} data.platform - platform information to send message
   * @param {Number} data.userId - id of user to send message
   * @param {string} data.message - message to be sent
   * @param {Object} data.source - platform source of message
   * @param {Object} params - additional parameters for the service method call
   * @returns {Promise} A promise object to send direct message
   */
  async create (data, params) {
    const {
      platform,
      userId,
      message,
      source,
    } = data;

    const app = this.app;
    const allmembers = await app.service('api/v1/list-members').find({
      query: {
        platform
      }
    });
    const member = allmembers.find(mem => mem.id === userId);

    if (member) {
      return app.get('chatBotManager').sendDirectMessage({
        platform,
        userId: member.id,
        message,
      });
    }
    return new GeneralError(`member: ${userId} not found on ${platform} !`);
  }
};
