// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// modules
const mongoose = modules.mongoose;

const { Schema } = mongoose;

const modelName = 'blogPost';

const blogPostSchema = new Schema(
  {
    active: { type: Boolean, default: true },
    header: String,
    date: { type: Date, default: Date.now() },
    paragraph: [{ type: paragraphSchema }],
    footer: String,
  },
  { collection: modelName }
);

const paragraphSchema = new Schema({
  header: String,
  content: String,
  //image
});

mongoose.model(modelName, blogPostSchema);

module.exports = modelName;
