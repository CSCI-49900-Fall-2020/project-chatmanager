const assert = require('assert');
const app = require('../../src/app');

describe('\'list-members\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/list-members');

    assert.ok(service, 'Registered the service');
  });
});
