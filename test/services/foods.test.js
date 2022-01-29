const assert = require('assert');
const app = require('../../src/app');

describe('\'foods\' service', () => {
  it('registered the service', () => {
    const service = app.service('foods');

    assert.ok(service, 'Registered the service');
  });
});
