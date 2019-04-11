// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const mongoose = mods.mongoose;

const { Schema } = mongoose;

const modelName = 'blogPost';

mongoose.model(
  modelName,
  new Schema(
    {
      active: { type: Boolean, default: true },
      header: String,
      date: { type: Date, default: Date.now() },
      paragraph: [
        {
          header: String,
          content: String,
          //image
        },
      ],
      footer: String,
    },
    { collection: modelName }
  )
);

module.exports = modelName;
