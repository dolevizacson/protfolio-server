// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const mongoose = mods.mongoose;

const { Schema } = mongoose;

const modelName = 'workingOn';

mongoose.model(
  modelName,
  new Schema(
    {
      header: String,
      description: String,
      isDone: Boolean,
    },
    { collection: modelName }
  )
);

module.exports = modelName;
