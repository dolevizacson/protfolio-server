// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// modules
const mongoose = modules.mongoose;

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
