// initialization
const { modules, files, routes, constants } = require('../utils/access');

// modules
const mongoose = modules.MONGOOSE;

const helpers = {
  asyncWrapper(fn) {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  },
  getMongooseModel(modelName) {
    return mongoose.model(modelName);
  },
};

module.exports = helpers;
