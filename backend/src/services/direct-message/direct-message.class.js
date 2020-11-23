const { GeneralError } = require('@feathersjs/errors');
/* eslint-disable no-unused-vars */
exports.DirectMessage = class DirectMessage {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

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
