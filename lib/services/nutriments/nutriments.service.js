"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nutriments_class_1 = require("./nutriments.class");
const nutriments_hooks_1 = __importDefault(require("./nutriments.hooks"));
function default_1(app) {
    const options = {
    //paginate: app.get('paginate')
    };
    // Initialize our service with any options it requires
    app.use('nutriments', new nutriments_class_1.Nutriments(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('nutriments');
    service.hooks(nutriments_hooks_1.default);
}
exports.default = default_1;
