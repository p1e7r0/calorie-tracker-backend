// Initializes the `foods` service on path `/foods`
const { Foods } = require('./foods.class');
const hooks = require('./foods.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate'),
    whitelist: ['$text', '$regex', '$caseSensitive', '$options', '$all'],
  };

  // Initialize our service with any options it requires
  app.use('/foods', new Foods(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('foods');

  service.hooks(hooks);
};
