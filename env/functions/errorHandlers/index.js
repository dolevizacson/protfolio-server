const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// modules
const status = mods.httpStatus;

// files
const winston = require(files.winston);

const errorHandlers = {
  finalErrorHandler(err, req, res, next) {
    winston.error(err);
    res.status(status.NOT_FOUND).end();
  },
  badRouteHandler(req, res, next) {
    winston.error('Bad Endpoint', new Error());
    res
      .status(status.NOT_FOUND)
      .json({ error: 'Bad Endpoint' })
      .end();
  },
};

module.exports = errorHandlers;
