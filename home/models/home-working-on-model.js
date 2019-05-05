// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

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
