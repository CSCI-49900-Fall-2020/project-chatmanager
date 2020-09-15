// Initializes the `api/v1/boardcast` service on path `/api/v1/boardcast`
const { Boardcast } = require('./boardcast.class');
const hooks = require('./boardcast.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/boardcast', new Boardcast(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/boardcast');

  service.hooks(hooks);
};
