const assert = require('assert');
const app = require('../../src/app');

describe('\'list-channels\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/list-channels');

    assert.ok(service, 'Registered the service');
  });
});
