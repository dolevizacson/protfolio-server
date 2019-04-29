// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// modules
const mongoose = modules.mongoose;

const { Schema } = mongoose;

const modelName = 'skillsList';

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

stackSchema = new Schema({
  language: String,
  icon: String,
  longData: [
    {
      type: longDataSchema,
    },
  ],
});

longDataSchema = new Schema({
  type: String,
});

mongoose.model(modelName, skillsListSchema);

module.exports = modelName;
