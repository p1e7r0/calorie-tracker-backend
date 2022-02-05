import app from '../../src/app';

describe('\'nutriments\' service', () => {
  it('registered the service', () => {
    const service = app.service('nutriments');
    expect(service).toBeTruthy();
  });
});
