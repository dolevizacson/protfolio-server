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
const workingOnTaskModelValidation = require(files.WORKING_ON_TASK_VALIDATION);

// constants
const { scopes, joiModelValidation } = constants.validation;

const { Schema } = mongoose;

const modelName = 'workingOn';

const workingOnTaskSchema = new Schema(
  {
    header: { type: String, required: true },
    description: { type: String, required: true },
    isDone: { type: Number, default: false },
  },
  { collection: modelName }
);

// validation
workingOnTaskSchema.static(joiModelValidation, function() {
  return {
    scopes: {
      [scopes.workingOnTask.DEFAULT]:
        workingOnTaskModelValidation.defaultValidationSchema,
      [scopes.workingOnTask.UPDATE]:
        workingOnTaskModelValidation.updateValidationSchema,
    },
  };
});

mongoose.model(modelName, workingOnTaskSchema);

module.exports = modelName;
