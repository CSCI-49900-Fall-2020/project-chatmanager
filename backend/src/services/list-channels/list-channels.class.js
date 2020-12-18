/* eslint-disable no-unused-vars */

/**
 * List Channels Service
 * @param {Object} options- default constructor
 * @param {Object} app - default contructor
 */
exports.ListChannels = class ListChannels {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  /**
   * Find relevant channels
   * @param {Object} params - additional methods for the service call
   * @returns {Promise[]} returns a Promise object array containing channel infos
   */
  async find (params) {
    const platform = params.query.platform;
    const allChannels = await this.app.get('chatBotManager').getChannels();
    if (platform) {
      return allChannels.filter(ch => ch.platform === platform);
    }
    return allChannels;
  }
};
