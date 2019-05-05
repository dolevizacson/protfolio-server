// initialization
const { modules, files, functions, routes } = require('../utils/access');

// files
const appMiddleware = require(files.APP_MIDDLEWARE);
const authMiddleware = require(files.AUTH_MIDDLEWARE);

module.exports.auth = authMiddleware;

module.exports.addMiddleware = function(app) {
  appMiddleware(app);
};
