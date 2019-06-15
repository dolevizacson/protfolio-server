// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
} = require('../../env/utils/access');

// modules
const mongoose = modules.MONGOOSE;
const Joi = modules.JOI;

// files
const blogPostModelValidation = require(files.BLOG_POST_MODEL_VALIDATION);

// constants
const { scopes, joiModelValidation } = constants.validation;

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

// validation
blogPostSchema.static(joiModelValidation, function() {
  return {
    scopes: {
      [scopes.blogPost.DEFAULT]:
        blogPostModelValidation.defaultValidationSchema,
      [scopes.blogPost.UPDATE]: blogPostModelValidation.updateValidationSchema,
    },
  };
});

mongoose.model(modelName, blogPostSchema);

module.exports = modelName;
