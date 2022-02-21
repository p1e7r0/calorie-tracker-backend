import app from '../../src/app';

describe('\'measurements\' service', () => {
  it('registered the service', () => {
    const service = app.service('measurements');
    expect(service).toBeTruthy();
  });
});
