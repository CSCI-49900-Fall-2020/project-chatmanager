// Initializes the `group-message` service on path `/api/v1/group-message`
const { GroupMessage } = require('./group-message.class');
const hooks = require('./group-message.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/group-message', new GroupMessage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/group-message');

  service.hooks(hooks);
};
