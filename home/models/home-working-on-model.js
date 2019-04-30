// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const mongoose = modules.MONGOOSE;

const { Schema } = mongoose;

const modelName = 'workingOn';

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
