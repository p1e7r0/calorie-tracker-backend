import app from '../../src/app';

describe('\'foods\' service', () => {
  it('registered the service', () => {
    const service = app.service('foods');
    expect(service).toBeTruthy();
  });
});
