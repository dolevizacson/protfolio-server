const mongoose = require('mongoose');
const { Schema } = mongoose;

const modelName = 'content';

mongoose.model(
  modelName,
  new Schema(
    {
      name: String,
      content: String,
    },
    { collection: modelName }
  )
);

module.exports = modelName;
