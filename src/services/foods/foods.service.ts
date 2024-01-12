// Initializes the `foods` service on path `/foods`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Foods } from './foods.class';
import hooks from './foods.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    foods: Foods;
  }
}

export default function (app: Application): void {
  const options = {
    //paginate: app.get('paginate'),
    whitelist: ['$text', '$regex', '$caseSensitive', '$options', '$all'],
    multi: ['remove'],
  };

  // Initialize our service with any options it requires
  app.use('foods', new Foods(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('foods');

  service.hooks(hooks);
}
