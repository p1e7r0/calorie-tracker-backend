// Initializes the `nutriments` service on path `/nutriments`
import { Application } from '../../declarations';
import { Nutriments } from './nutriments.class';
import hooks from './nutriments.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    nutriments: Nutriments;
  }
}

export default function (app: Application): void {
  const options = {
    //paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('nutriments', new Nutriments(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('nutriments');

  service.hooks(hooks);
}
