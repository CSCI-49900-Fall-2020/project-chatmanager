/* eslint-disable no-unused-vars */

/**
 * List Members Service
 * @param {Object} options - default constructor value
 * @param {Object} app - defualt constructor value
 */
exports.ListMembers = class ListMembers {
  constructor(options, app) {
    this.options = options || {};
    this.app = app;
  }

  /**
   * Find relevent members
   * @param {Object} params - additional methods for service call
   * @returns {Promise[]} A Promise object array containing members
   */
  async find(params) {
    const platform = params.query.platform;
    const allMembers = await this.app.get('chatBotManager').getMembers();
    if (platform)
      return allMembers.filter(m => m.platform === platform);
    return allMembers;
  }

  async get (id, params) {
    return {};
  }
};
