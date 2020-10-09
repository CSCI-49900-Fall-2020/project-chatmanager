/* eslint-disable no-unused-vars */
exports.GroupMessage = class GroupMessage {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async create (data, params) {
    const {
      platform,
      message,
      source,
    } = data;

    const app = this.app;

    app.get('chatBotManager').sendMessageToAllChannels({
      platform,
      message: `${message} (message sent from ${source})`,
    });

    return data;
  }
};
