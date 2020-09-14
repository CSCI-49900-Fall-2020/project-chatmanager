/* eslint-disable no-unused-vars */
exports.Members = class Members {
  constructor (options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find (params) {
    const members = this.app.get('discordBot').getMembers();
    return members.map(m => m.username);
  }
};
