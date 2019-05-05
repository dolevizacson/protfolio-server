// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const mongoose = modules.MONGOOSE;

const { Schema } = mongoose;

const modelName = 'blogPost';

const paragraphSchema = new Schema({
  header: String,
  content: String,
  //image
});

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

mongoose.model(modelName, blogPostSchema);

module.exports = modelName;
