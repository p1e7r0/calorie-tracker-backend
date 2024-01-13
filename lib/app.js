"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const configuration_1 = __importDefault(require("@feathersjs/configuration"));
const feathers_1 = require("@feathersjs/feathers");
const express_1 = __importStar(require("@feathersjs/express"));
const app_hooks_1 = __importDefault(require("./app.hooks"));
const channels_1 = __importDefault(require("./channels"));
const logger_1 = __importDefault(require("./logger"));
const middleware_1 = __importDefault(require("./middleware"));
const mongodb_1 = __importDefault(require("./mongodb"));
const services_1 = __importDefault(require("./services"));
// Don't remove this comment. It's needed to format import lines nicely.
const app = (0, express_1.default)((0, feathers_1.feathers)());
// Load app configuration
app.configure((0, configuration_1.default)());
console.log('public', app.get('public'));
// Enable security, CORS, compression, favicon and body parsing
app.use((0, helmet_1.default)({
    contentSecurityPolicy: false,
}));
app.use((0, cors_1.default)());
app.use((0, compression_1.default)());
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, serve_favicon_1.default)(path_1.default.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', (0, express_1.static)(app.get('public')));
// Set up Plugins and providers
app.configure((0, express_1.rest)());
app.configure(mongodb_1.default);
// Configure other middleware (see `middleware/index.ts`)
app.configure(middleware_1.default);
// Set up our services (see `services/index.ts`)
app.configure(services_1.default);
// Set up event channels (see channels.ts)
app.configure(channels_1.default);
// Configure a middleware for 404s and the error handler
app.use((0, express_1.notFound)());
app.use((0, express_1.errorHandler)({ logger: logger_1.default }));
app.hooks(app_hooks_1.default);
feathers_1.feathers.setDebug((name) => {
    return (...args) => {
        console.log(name, ...args);
    };
});
exports.default = app;
