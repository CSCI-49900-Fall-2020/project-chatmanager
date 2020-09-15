const assert = require('assert');
const app = require('../../../../src/app');

describe('\'api/v1/boardcast\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/boardcast');

    assert.ok(service, 'Registered the service');
  });
});
