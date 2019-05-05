// initialization
const { modules, files, functions, routes } = require('../utils/access');

// functions  TODO add functions constants
const generalErrorHandlers = require(files.GENERAL_ERROR_HANDLERS);
const specificErrorHandlers = require(files.SPECIFIC_ERROR_HANDLERS);

module.exports.addErrorHandlers = function(app) {
  generalErrorHandlers(app);
  specificErrorHandlers(app);
};
