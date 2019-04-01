// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const routes = require(`${appRoot}/env/routesConstants`);

// modules
const express = mods.express;
const path = mods.path;
const status = mods.httpStatus;

// files
const mongo = require(files.mongo);
const sessions = require(files.sessions);
const morgan = require(files.morgan);
const winston = require(files.winston);

const home = require(files.home);
const skills = require(files.skills);

const middleware = require(files.middleware);
const errorHandlers = require(files.errorHandlers);

const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(mongo);
app.use(sessions);
app.use(morgan);
app.use(middleware.checkCors());

// routes
app.use(routes.home, home);
app.use(routes.skills, skills);

// error handlers
app.use(errorHandlers.finalErrorHandler);
app.get('*', errorHandlers.badRouteHandler);

module.exports = app;
