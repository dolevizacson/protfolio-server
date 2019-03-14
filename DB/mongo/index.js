const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const mongoose = mods.mongoose;

// files
const confing = require(files.config);
require(files.models);
//files.initializeDB();

module.exports = async (req, res, next) => {
  helpers.asyncWrapper(async () => {
    await mongoose.connect(confing.mongoURI, { useNewUrlParser: true });
  })();
  next();
};
