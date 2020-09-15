// Initializes the `api/v1/members` service on path `/api/v1/members`
const { Members } = require('./members.class');
const hooks = require('./members.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/members', new Members(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/members');

  service.hooks(hooks);
};
