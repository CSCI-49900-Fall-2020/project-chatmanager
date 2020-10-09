const assert = require('assert');
const app = require('../../src/app');

describe('\'group-message\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/group-message');

    assert.ok(service, 'Registered the service');
  });
});
