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
const projectModelValidation = require(files.PROJECT_MODEL_VALIDATION);
const baseSchema = require(files.BASE_SCHEMA);

// constants
const { scopes, joiModelValidation } = constants.validation;

const { Schema } = mongoose;

const modelName = 'project';

const baseProjectSchema = new Schema(
  {
    header: { type: String, required: true },
    summery: { type: String, required: true },
    description: String,
    technologies: {
      type: [String],
      validate: (technologiesArray) =>
        technologiesArray == null || technologiesArray.length > 0,
    },
    links: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    // image array
  },
  {
    collection: modelName,
  }
);

const projectSchema = functions.helpers.addBaseSchemaFields(
  baseSchema,
  baseProjectSchema
);

// validation
projectSchema.static(joiModelValidation, function () {
  return {
    scopes: {
      [scopes.project.DEFAULT]: projectModelValidation.defaultValidationSchema,
      [scopes.project.UPDATE]: projectModelValidation.updateValidationSchema,
    },
  };
});

mongoose.model(modelName, projectSchema, modelName);

module.exports = modelName;
