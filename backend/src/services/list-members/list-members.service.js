// Initializes the `list-members` service on path `/api/v1/list-members`
const { ListMembers } = require('./list-members.class');
const hooks = require('./list-members.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/list-members', new ListMembers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/list-members');

  service.hooks(hooks);
};
