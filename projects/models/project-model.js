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

// constants
const { scopes, joiModelValidation } = constants.validation;

const { Schema } = mongoose;

const modelName = 'project';

const projectSchema = new Schema(
  {
    active: { type: Number, default: 1 },
    header: { type: String, required: true },
    summery: { type: String, required: true },
    description: String,
    technologies: {
      type: [String],
      validate: technologiesArray =>
        technologiesArray == null || technologiesArray.length > 0,
    },
    links: [String],
    date: { type: Date, default: Date.now() },
    update: { type: Date, default: Date.now() },
    // image array
  },
  {
    collection: modelName,
  }
);

// validation
projectSchema.static(joiModelValidation, function() {
  return {
    scopes: {
      [scopes.project.DEFAULT]: projectModelValidation.defaultValidationSchema,
      [scopes.project.UPDATE]: projectModelValidation.updateValidationSchema,
    },
  };
});

mongoose.model(modelName, projectSchema);

module.exports = modelName;
