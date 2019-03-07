const mongoose = require('mongoose');
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
