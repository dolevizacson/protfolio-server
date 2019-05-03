// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const httpStatus = modules.HTTP_STATUS;

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);
const BadEndpointError = require(files.BAD_ENDPOINT_ERROR);

// error handlers
const notFoundInDatabaseErrorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundInDatabaseError) {
    let errorMessage = 'Not found in database error ';

    if (err.message) {
      errorMessage += `: ${err.message}`;
    }
    return res.status(httpStatus.NOT_FOUND).send(errorMessage);
  }
  next(err);
};

const badEndpointErrorHandler = (err, req, res, next) => {
  if (err instanceof BadEndpointError) {
    let errorMessage = 'Bad endpoint error ';

    if (err.message && err.url) {
      errorMessage += `: ${err.url} ${err.message}`;
    }
    return res.status(httpStatus.BAD_REQUEST).send(errorMessage);
  }
  next(err);
};

const DefaultErrorHandler = (err, req, res, next) => {
  let errorMessage = 'Internal Server Error';
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessage);
  next(err);
};

module.exports = function specificErrorHandlers(app) {
  app.use(notFoundInDatabaseErrorHandler);
  app.use(badEndpointErrorHandler);
  app.use(DefaultErrorHandler);
};
