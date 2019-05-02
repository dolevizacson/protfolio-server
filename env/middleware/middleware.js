// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// functions  TODO add functions constants
const appMiddleware = require(files.APP_MIDDLEWARE);

module.exports = function addMiddleware(app) {
  appMiddleware(app);
};
