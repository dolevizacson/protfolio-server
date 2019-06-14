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

const defaultValidationSchema = Joi.object().keys({
  header: Joi.string().required(),
  paragraph: Joi.array()
    .items(
      Joi.object().keys({
        header: Joi.string(),
        content: Joi.string().required(),
      })
    )
    .min(1),
  footer: Joi.string(),
});

blogPostSchema.static(constants.validation.joiModelValidation, function() {
  return {
    scopes: {
      [constants.validation.scopes.DEFAULT]: defaultValidationSchema,
    },
  };
});

mongoose.model(modelName, blogPostSchema);

module.exports = modelName;
