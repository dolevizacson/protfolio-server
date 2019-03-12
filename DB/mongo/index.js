const mongoose = require('mongoose');
const appRoot = require('app-root-path');

const { asyncWrapper } = require(appRoot + '/helpers');
const confing = require('../../config');
require('./models');
//require('./initializeDB')();

module.exports = async (req, res, next) => {
  asyncWrapper(async () => {
    await mongoose.connect(confing.mongoURI, { useNewUrlParser: true });
  })();
  next();
};
