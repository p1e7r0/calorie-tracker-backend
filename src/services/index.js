const foods = require('./foods/foods.service.js');
const meals = require('./meals/meals.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(foods);
  app.configure(meals);
};
