// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// files
const appMiddleware = require(files.APP_MIDDLEWARE);
const authMiddleware = require(files.AUTH_MIDDLEWARE);

module.exports.auth = authMiddleware;

module.exports.addMiddleware = function(app) {
  appMiddleware(app);
};
