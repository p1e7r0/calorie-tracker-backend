// Initializes the `users` service on path `/users`
import { Application } from '../../declarations';
import { Users } from './users.class';
import hooks from './users.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    users: Users;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('users', new Users(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users');

  service.hooks(hooks);
}
