// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

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
