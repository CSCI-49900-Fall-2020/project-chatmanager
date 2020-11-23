const assert = require('assert');
const app = require('../../src/app');

describe('\'direct-message\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/direct-message');

    assert.ok(service, 'Registered the service');
  });
});
