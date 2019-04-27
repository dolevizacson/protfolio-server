const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const mongoose = mods.mongoose;

// files
require(files.models);
//files.initializeDB();

module.exports = helpers.asyncWrapper(async (req, res, next) => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  next();
});
