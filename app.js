// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/routesConstants`);

// modules
const express = modules.express;
modules.dotenv.config();

// controllers
const home = require(files.home);
const skills = require(files.skills);
const auth = require(files.auth);
const blog = require(files.blog);

const errorHandlers = require(files.errorHandlers);
const addMiddleware = require(files.middleware);

const app = express();

addMiddleware(app);

// routes
app.use(routes.auth, auth);
app.use(routes.home, home);
app.use(routes.skills, skills);
app.use(routes.blog, blog);

// error handlers
app.use(errorHandlers.finalErrorHandler);
app.get('*', errorHandlers.badRouteHandler);

module.exports = app;
