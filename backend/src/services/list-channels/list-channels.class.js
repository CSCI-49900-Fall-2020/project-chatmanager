/* eslint-disable no-unused-vars */
exports.ListChannels = class ListChannels {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find (params) {
    const platform = params.query.platform;
    const allChannels = await this.app.get('chatBotManager').getChannels();
    if (platform) {
      return allChannels.filter(ch => ch.platform === platform);
    }
    return allChannels;
  }
};
