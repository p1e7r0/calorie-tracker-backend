"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meals_class_1 = require("./meals.class");
const meals_hooks_1 = __importDefault(require("./meals.hooks"));
function default_1(app) {
    const options = {
        //paginate: app.get('paginate'),
        whitelist: ['$text', '$regex', '$caseSensitive', '$options', '$all'],
        multi: ['remove'],
    };
    // Initialize our service with any options it requires
    app.use('meals', new meals_class_1.Meals(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('meals');
    service.hooks(meals_hooks_1.default);
}
exports.default = default_1;
