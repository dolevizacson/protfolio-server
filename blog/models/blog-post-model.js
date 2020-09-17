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
const baseSchema = require(files.BASE_SCHEMA);

// constants
const { scopes, joiModelValidation } = constants.validation;

const { Schema } = mongoose;

const modelName = 'blogPost';

const paragraphSchema = new Schema({
  header: String,
  content: { type: String, required: true },
  //image
});

const baseBlogPostSchema = new Schema({
  header: { type: String, required: true },
  summery: { type: String, required: true },
  conclusion: {
    header: String,
    content: String,
  },
  conclusionSentence: String,
  paragraph: {
    type: [paragraphSchema],
    validate: (paragraphArray) =>
      paragraphArray == null || paragraphArray.length > 0,
  },
});

const blogPostSchema = functions.helpers.addBaseSchemaFields(
  baseSchema,
  baseBlogPostSchema
);

// validation
blogPostSchema.static(joiModelValidation, function () {
  return {
    scopes: {
      [scopes.blogPost.DEFAULT]:
        blogPostModelValidation.defaultValidationSchema,
      [scopes.blogPost.UPDATE]: blogPostModelValidation.updateValidationSchema,
    },
  };
});

mongoose.model(modelName, blogPostSchema, modelName);

module.exports = modelName;
