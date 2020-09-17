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
const taskListTaskModelValidation = require(files.TASK_LIST_TASK_VALIDATION);
const baseSchema = require(files.BASE_SCHEMA);

// constants
const { scopes, joiModelValidation } = constants.validation;

const { Schema } = mongoose;

const modelName = 'taskList';

const baseTaskListTaskSchema = new Schema({
  header: { type: String, required: true },
  description: { type: String, required: true },
  isDone: { type: Number, default: false },
});

const taskListTaskSchema = functions.helpers.addBaseSchemaFields(
  baseSchema,
  baseTaskListTaskSchema
);

// validation
taskListTaskSchema.static(joiModelValidation, function () {
  return {
    scopes: {
      [scopes.taskListTask.DEFAULT]:
        taskListTaskModelValidation.defaultValidationSchema,
      [scopes.taskListTask.UPDATE]:
        taskListTaskModelValidation.updateValidationSchema,
    },
  };
});

mongoose.model(modelName, taskListTaskSchema, modelName);

module.exports = modelName;
