// initialization
const { modules, files, functions, routes } = require('../utils/access');

// files
const DBcrud = require(files.BD_CRUD);

module.exports.DBcrud = DBcrud;
