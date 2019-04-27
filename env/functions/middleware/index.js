const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// functions  TODO add functions constants
const appMiddleware = require('./appMiddleware');

module.exports = function addMiddleware(app) {
  appMiddleware(app);
};
