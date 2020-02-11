// initialization
const { modules, files, functions, routes } = require('../utils/access');

// modules
const httpStatus = modules.HTTP_STATUS;
const mongoose = modules.MONGOOSE;

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);
const BadEndpointError = require(files.BAD_ENDPOINT_ERROR);
const UserAuthenticationError = require(files.USER_AUTHENTICATION_ERROR);
const MissingValidationInformationSchemaError = require(files.MISSING_VALIDATION_INFORMATION_SCHEMA_ERROR);
const RouteValidationError = require(files.ROUTE_VALIDATION_ERROR);
const MailNotSentError = require(files.MAIL_NOT_SENT_ERROR);

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

const userAuthenticationErrorHandler = (err, req, res, next) => {
  if (err instanceof UserAuthenticationError) {
    let errorMessage = 'Authentication error ';

    if (err.message) {
      errorMessage += `: ${err.message}`;
    }
    return res.status(httpStatus.UNAUTHORIZED).send(errorMessage);
  }
  next(err);
};

const routesValidationErrorHandler = (err, req, res, next) => {
  if (
    err instanceof MissingValidationInformationSchemaError ||
    err instanceof RouteValidationError
  ) {
    let errorMessage = 'Validation error ';

    if (err.message) {
      errorMessage += `: ${err.message}`;
    }
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessage);
  }
  next(err);
};

const databaseValidationErrorHandler = (err, req, res, next) => {
  if (
    err instanceof mongoose.Error.ValidationError ||
    err instanceof mongoose.Error.CastError ||
    err instanceof mongoose.Error.ValidatorError
  ) {
    let errorMessage = 'Database validation error ';

    if (err.message) {
      errorMessage += `: ${err.message}`;
    }
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessage);
  }
  next(err);
};

const badEndpointErrorHandler = (err, req, res, next) => {
  if (err instanceof BadEndpointError) {
    let errorMessage = 'Bad endpoint error ';

    if (err.message && err.url) {
      errorMessage += `: ${err.url} ${err.message}`;
    }
    return res.status(httpStatus.NOT_FOUND).send(errorMessage);
  }
  next(err);
};

const MailNotSentErrorHandler = (err, req, res, next) => {
  if (err instanceof MailNotSentError) {
    let errorMessage = 'Mail not sent error ';

    if (err.message && err.url) {
      errorMessage += `: ${err.url} ${err.message}`;
    }
    return res.status(httpStatus.NOT_FOUND).send(errorMessage);
  }
  next(err);
};

const DefaultErrorHandler = (err, req, res, next) => {
  console.log(mongoose);
  let errorMessage = 'Internal Server Error';
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessage);
  next(err);
};

module.exports = function specificErrorHandlers(app) {
  app.use(notFoundInDatabaseErrorHandler);
  app.use(userAuthenticationErrorHandler);
  app.use(routesValidationErrorHandler);
  app.use(databaseValidationErrorHandler);
  app.use(badEndpointErrorHandler);
  app.use(MailNotSentErrorHandler);
  app.use(DefaultErrorHandler);
};
