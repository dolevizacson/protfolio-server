// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const mongoose = modules.MONGOOSE;

const { Schema } = mongoose;

const modelName = 'blogPost';

const paragraphSchema = new Schema({
  header: String,
  content: { type: String, required: true },
  //image
});

const blogPostSchema = new Schema(
  {
    active: { type: Boolean, default: true },
    header: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    paragraph: {
      type: [paragraphSchema],
      validate: paragraphArray =>
        paragraphArray == null || paragraphArray.length > 0,
    },

    footer: String,
  },
  { collection: modelName }
);

mongoose.model(modelName, blogPostSchema);

module.exports = modelName;
