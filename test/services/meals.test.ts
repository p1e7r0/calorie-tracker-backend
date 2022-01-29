import app from '../../src/app';

describe('\'meals\' service', () => {
  it('registered the service', () => {
    const service = app.service('meals');
    expect(service).toBeTruthy();
  });
});
