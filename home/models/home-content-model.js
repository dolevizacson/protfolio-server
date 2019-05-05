// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

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
