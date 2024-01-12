// Initializes the `measurements` service on path `/measurements`
import { Application } from '../../declarations';
import { Measurements } from './measurements.class';
import hooks from './measurements.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    measurements: Measurements;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('measurements', new Measurements(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('measurements');

  service.hooks(hooks);
}
