// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const mongoose = modules.MONGOOSE;

const { Schema } = mongoose;

const modelName = 'skillsList';

const stackSchema = new Schema({
  language: String,
  icon: String,
  longData: [
    {
      type: String,
    },
  ],
});

const skillsListSchema = new Schema(
  {
    topic: String,
    image: String,
    stack: [
      {
        type: stackSchema,
      },
    ],
  },
  { collection: modelName }
);

mongoose.model(modelName, skillsListSchema);

module.exports = modelName;
