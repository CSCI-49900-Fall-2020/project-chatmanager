/* eslint-disable no-unused-vars */
exports.Boardcast = class Boardcast {
  constructor (options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async create (data, params) {
    this.app.get('discordBot').sendMessageToAllChannels(data.text);

    return data;
  }
};
