const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// files
const winston = require(files.winston);

const errorHandlers = {
  finalErrorHandler(err, req, res, next) {
    winston.info(err);
    res.status('400').end();
    //next(err);
  },
};

module.exports = errorHandlers;
