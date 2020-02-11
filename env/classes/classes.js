// initialization
const { modules, files, functions, routes } = require('../utils/access');

module.exports.Controller = require(files.CONTROLLER);
module.exports.DBcrud = require(files.BD_CRUD);
