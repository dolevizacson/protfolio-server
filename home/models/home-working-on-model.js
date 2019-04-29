// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// modules
const mongoose = modules.mongoose;

const { Schema } = mongoose;

const modelName = 'skillsList';

const workingOnSchema = new Schema(
  {
    header: String,
    description: String,
    isDone: Boolean,
  },
  { collection: modelName }
);

mongoose.model(modelName, workingOnSchema);

module.exports = modelName;
