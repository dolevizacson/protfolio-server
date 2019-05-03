// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// files
const winston = require(files.WINSTON);

// error handlers
const loggerErrorHandler = (err, req, res, next) => {
  winston.error(err);
  next(err);
};

module.exports = function generalErrorHandlers(app) {
  app.use(loggerErrorHandler);
};
