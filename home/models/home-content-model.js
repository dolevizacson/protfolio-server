// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const mongoose = modules.MONGOOSE;

const { Schema } = mongoose;

const modelName = 'content';

const contentSchema = new Schema(
  {
    name: String,
    content: String,
  },
  { collection: modelName }
);

mongoose.model(modelName, contentSchema);

module.exports = modelName;
