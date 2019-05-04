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

// errors
const BadEndpointError = require(files.BAD_ENDPOINT_ERROR);

// db connections
mongoInit();

// controllers
const home = require(files.HOME);
const skills = require(files.SKILLS);
const auth = require(files.AUTH);
const blog = require(files.BLOG);

const errorHandlers = require(files.ERROR_HANDLERS);
const middleware = require(files.MIDDLEWARE);

process.on('uncaughtException', function(err) {
  //mailer logic to report on problems with the app
});

const app = express();
middleware.addMiddleware(app);

// routes
app.use(routes.AUTH, auth);
app.use(routes.HOME, home);
app.use(routes.SKILLS, skills);
app.use(routes.BLOG, blog);

// default route handler
app.get('*', (req, res, next) => {
  next(
    new BadEndpointError(
      'No such route available',
      req.hostname + req.originalUrl
    )
  );
});

errorHandlers.addErrorHandlers(app);

module.exports = app;
