// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const mongoose = mods.mongoose;
const passportLocalMongoose = mods.passportLocalMongoose;

const { Schema } = mongoose;

const modelName = 'user';

mongoose.model(
  modelName,
  new Schema({}, { collection: modelName }).plugin(passportLocalMongoose)
);

module.exports = modelName;
