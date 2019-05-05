// initialization
const { modules, files, functions, routes } = require('../utils/access');

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
