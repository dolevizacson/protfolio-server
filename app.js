// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/constants/routes`);

// modules
const express = modules.EXPRESS;
modules.DOTENV.config();

// files
const mongoInit = require(files.MONGO);

// db connections
mongoInit();

// controllers
const home = require(files.HOME);
const skills = require(files.SKILLS);
const auth = require(files.AUTH);
const blog = require(files.BLOG);

//const addErrorHandlers = require(files.ERROR_HANDLERS);
const addMiddleware = require(files.MIDDLEWARE);

const app = express();

addMiddleware(app);

// routes
app.use(routes.AUTH, auth);
app.use(routes.HOME, home);
app.use(routes.SKILLS, skills);
app.use(routes.BLOG, blog);

// default route handler
app.get('*', (req, res, next) => {
  next(new BadEndpointError('No such route available'));
});

module.exports = app;
