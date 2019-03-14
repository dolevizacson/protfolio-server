const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);

// modules
const mongoose = mods.mongoose;

const { Schema } = mongoose;

const modelName = 'skillsList';

mongoose.model(
  modelName,
  new Schema(
    {
      topic: String,
      image: String,
      stack: [
        {
          language: String,
          icon: String,
          longData: [
            {
              type: String,
            },
          ],
        },
      ],
    },
    { collection: modelName }
  )
);

module.exports = modelName;
