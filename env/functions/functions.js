// initialization
const { modules, files, routes } = require('../utils/access');

// files
const helpersFunctions = require(files.HELPERS_FUNCTIONS);

module.exports.helpers = helpersFunctions;
