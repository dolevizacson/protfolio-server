// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
  classes,
} = require('../../env/utils/access');

//files
const TaskListTaskService = require(files.TASK_LIST_TASK_SERVICE);
const TaskListTaskModel = require(files.TASK_LIST_TASK_MODEL);

// constants
const { taskListTask: taskListTaskValidation } = constants.validation.scopes;

// classes
const Controller = classes.Controller;

// services
const taskListTaskService = new TaskListTaskService();

//models
const taskListTaskModel = functions.helpers.getMongooseModel(TaskListTaskModel);

const taskListController = new Controller(
  taskListTaskService,
  taskListTaskModel,
  taskListTaskValidation
);

taskListController.getAll();
taskListController.getOne();
taskListController.post();
taskListController.update();
taskListController.toggle();
taskListController.delete();

module.exports = taskListController.getRouter();
