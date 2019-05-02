// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// functions  TODO add functions constants
const generalErrorHandlers = require(files.GENERAL_ERROR_HANDLERS);
const specificErrorHandlers = require(files.SPECIFIC_ERROR_HANDLERS);

module.exports = function addErrorHandlers(app) {
  generalErrorHandlers(app);
  specificErrorHandlers(app);
};
