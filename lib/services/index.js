"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const foods_service_1 = __importDefault(require("./foods/foods.service"));
const meals_service_1 = __importDefault(require("./meals/meals.service"));
const nutriments_service_1 = __importDefault(require("./nutriments/nutriments.service"));
const users_service_1 = __importDefault(require("./users/users.service"));
const measurements_service_1 = __importDefault(require("./measurements/measurements.service"));
// Don't remove this comment. It's needed to format import lines nicely.
function default_1(app) {
    app.configure(foods_service_1.default);
    app.configure(meals_service_1.default);
    app.configure(nutriments_service_1.default);
    app.configure(users_service_1.default);
    app.configure(measurements_service_1.default);
}
exports.default = default_1;
