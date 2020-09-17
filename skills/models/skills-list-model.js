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
const skillsListModelValidation = require(files.SKILLS_LIST_MODEL_VALIDATION);
const baseSchema = require(files.BASE_SCHEMA);

// constants
const { scopes, joiModelValidation } = constants.validation;

const { Schema } = mongoose;

const modelName = 'skillsList';

const stackSchema = new Schema({
  language: { type: String, required: true },
  longData: [
    {
      type: String,
      validate: (paragraphArray) =>
        paragraphArray == null || paragraphArray.length > 0,
    },
  ],
});

const baseSkillsListSchema = new Schema({
  topic: { type: String, required: true },
  // image
  stack: [
    {
      type: stackSchema,
      validate: (paragraphArray) =>
        paragraphArray == null || paragraphArray.length > 0,
    },
  ],
});

const skillsListSchema = functions.helpers.addBaseSchemaFields(
  baseSchema,
  baseSkillsListSchema
);

// validation
skillsListSchema.static(joiModelValidation, function () {
  return {
    scopes: {
      [scopes.skillsList.DEFAULT]:
        skillsListModelValidation.defaultValidationSchema,
      [scopes.skillsList.UPDATE]:
        skillsListModelValidation.updateValidationSchema,
    },
  };
});

mongoose.model(modelName, skillsListSchema, modelName);

module.exports = modelName;
