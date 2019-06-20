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
    active: { type: Number, default: 1 },
    header: { type: String, required: true },
    summery: { type: String, required: true },
    paragraph: {
      type: [paragraphSchema],
      validate: paragraphArray =>
        paragraphArray == null || paragraphArray.length > 0,
    },

    footer: String,
  },
  {
    collection: modelName,
    timestamps: { createdAt: 'date', updatedAt: 'update' },
  }
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
