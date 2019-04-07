// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const mongoose = mods.mongoose;

const { Schema } = mongoose;

const modelName = 'blogPosts';

mongoose.model(
  modelName,
  new Schema(
    {
      active: { type: Boolean, default: true },
      header: String,
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
