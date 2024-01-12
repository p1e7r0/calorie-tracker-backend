import compress from 'compression';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import helmet from 'helmet';
import path from 'path';
import favicon from 'serve-favicon';

import configuration from '@feathersjs/configuration';
import { feathers } from '@feathersjs/feathers';

import express, {
  errorHandler,
  json,
  notFound,
  rest,
  static as staticFiles,
  urlencoded,
} from '@feathersjs/express';

import appHooks from './app.hooks';
import channels from './channels';
import { Application } from './declarations';
import logger from './logger';
import middleware from './middleware';
import mongodb from './mongodb';
import services from './services';
// Don't remove this comment. It's needed to format import lines nicely.

const app: Application = express(feathers());

// Load app configuration
app.configure(configuration());

console.log('public', app.get('public'));

// Enable security, CORS, compression, favicon and body parsing
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(cors());
app.use(compress());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', staticFiles(app.get('public')));

// Set up Plugins and providers
app.configure(rest());
app.configure(mongodb);

// Configure other middleware (see `middleware/index.ts`)
app.configure(middleware);
// Set up our services (see `services/index.ts`)
app.configure(services);
// Set up event channels (see channels.ts)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(errorHandler({ logger }));

app.hooks(appHooks);

feathers.setDebug((name) => {
  return (...args) => {
    console.log(name, ...args);
  };
});

export default app;
