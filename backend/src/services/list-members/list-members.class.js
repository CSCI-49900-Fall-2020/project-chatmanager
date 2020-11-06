/* eslint-disable no-unused-vars */
exports.ListMembers = class ListMembers {
  constructor(options, app) {
    this.options = options || {};
    this.app = app;
  }

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
