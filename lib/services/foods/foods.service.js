"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const foods_class_1 = require("./foods.class");
const foods_hooks_1 = __importDefault(require("./foods.hooks"));
function default_1(app) {
    const options = {
        //paginate: app.get('paginate'),
        whitelist: ['$text', '$regex', '$caseSensitive', '$options', '$all'],
        multi: ['remove'],
    };
    // Initialize our service with any options it requires
    app.use('foods', new foods_class_1.Foods(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('foods');
    service.hooks(foods_hooks_1.default);
}
exports.default = default_1;
