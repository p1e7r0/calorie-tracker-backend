// Initializes the `meals` service on path `/meals`
const { Meals } = require('./meals.class');
const createModel = require('../../models/meals.model');
const hooks = require('./meals.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: [ 'remove' ]
  };

  // Initialize our service with any options it requires
  app.use('/meals', new Meals(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('meals');

  service.hooks(hooks);
};
