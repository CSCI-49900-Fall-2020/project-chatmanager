const assert = require('assert');
const app = require('../../../../src/app');

describe('\'api/v1/members\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/members');

    assert.ok(service, 'Registered the service');
  });
});
