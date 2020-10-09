/* eslint-disable no-unused-vars */
exports.GroupMessage = class GroupMessage {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async create (data, params) {
    const platform = data.platform;
    const message = data.message;
    const app = this.app;

    app.get('chatBotManager').sendMessageToAllChannels({
      platform,
      message,
    });

    return data;
  }
};
