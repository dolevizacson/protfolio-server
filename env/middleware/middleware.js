// initialization
const { modules, files, functions, routes } = require('../utils/access');

// files
const appMiddleware = require(files.APP_MIDDLEWARE);
const authMiddleware = require(files.AUTH_MIDDLEWARE);
const validationMiddleware = require(files.VALIDATION_MIDDLEWARE);

module.exports.auth = authMiddleware;
module.exports.validation = validationMiddleware;

module.exports.addMiddleware = function(app) {
  appMiddleware(app);
};
