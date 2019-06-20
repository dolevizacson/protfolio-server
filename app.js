// initialization
const { modules, files, functions, routes } = require('./env/utils/access');

// modules
const express = modules.EXPRESS;
modules.DOTENV.config();

// files
const mongoInit = require(files.MONGO);
const errorHandlers = require(files.ERROR_HANDLERS);
const middleware = require(files.MIDDLEWARE);

// errors
const BadEndpointError = require(files.BAD_ENDPOINT_ERROR);

// db connections
mongoInit();

// controllers
const skills = require(files.SKILLS);
const auth = require(files.AUTH);
const blog = require(files.BLOG);
const workingOn = require(files.WORKING_ON);

process.on('uncaughtException', function(err) {
  //mailer logic to report on problems with the app
});

const app = express();

middleware.addMiddleware(app);

// routes
app.use(routes.AUTH, auth);
app.use(routes.SKILLS, skills);
app.use(routes.BLOG, blog);
app.use(routes.WORKING_ON, workingOn);

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
