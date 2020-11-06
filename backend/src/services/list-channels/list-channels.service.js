// Initializes the `list-channels` service on path `/api/v1/list-channels`
const { ListChannels } = require('./list-channels.class');
const hooks = require('./list-channels.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/list-channels', new ListChannels(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/list-channels');

  service.hooks(hooks);
};
