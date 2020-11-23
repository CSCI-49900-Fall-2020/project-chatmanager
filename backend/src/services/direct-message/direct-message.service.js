// Initializes the `direct-message` service on path `/api/v1/direct-message`
const { DirectMessage } = require('./direct-message.class');
const hooks = require('./direct-message.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/direct-message', new DirectMessage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/direct-message');

  service.hooks(hooks);
};
