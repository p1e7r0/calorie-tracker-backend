"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const measurements_class_1 = require("./measurements.class");
const measurements_hooks_1 = __importDefault(require("./measurements.hooks"));
function default_1(app) {
    const options = {
        paginate: app.get('paginate'),
    };
    // Initialize our service with any options it requires
    app.use('measurements', new measurements_class_1.Measurements(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('measurements');
    service.hooks(measurements_hooks_1.default);
}
exports.default = default_1;
