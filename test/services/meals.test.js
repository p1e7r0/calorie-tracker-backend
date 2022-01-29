const assert = require('assert');
const app = require('../../src/app');

describe('\'meals\' service', () => {
  it('registered the service', () => {
    const service = app.service('meals');

    assert.ok(service, 'Registered the service');
  });
});
