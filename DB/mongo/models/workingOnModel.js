const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);

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
