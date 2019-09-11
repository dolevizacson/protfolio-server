// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
} = require('../../env/utils/access');

// modules
const express = modules.EXPRESS;
const httpStatus = modules.HTTP_STATUS;

//files
const middleware = require(files.MIDDLEWARE);
const TaskListTaskService = require(files.TASK_LIST_TASK_SERVICE);
const TaskListTaskModel = require(files.TASK_LIST_TASK_MODEL);

// constants
const { scopes } = constants.validation;

// services
const taskListTaskService = new TaskListTaskService();

//models
const taskListTaskModel = functions.helpers.getMongooseModel(TaskListTaskModel);

const taskListController = express.Router();

// get task list
taskListController.get(
  routes.READ_TASKS,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const tasks = await taskListTaskService.readAll();
    res.send(tasks);
  })
);

// get task
taskListController.get(
  routes.READ_TASK,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await taskListTaskService.readOne(id);
    res.send(task);
  })
);

// post task
taskListController.post(
  routes.CREATE_TASK,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(
    taskListTaskModel,
    scopes.taskListTask.DEFAULT
  ),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const task = await taskListTaskService.create(req.body);
    res.status(httpStatus.CREATED).send(task);
  })
);

// update task
taskListController.put(
  routes.UPDATE_TASK,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(taskListTaskModel, scopes.taskListTask.UPDATE),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await taskListTaskService.update(id, req.body);
    res.send(task);
  })
);

// toggle task
taskListController.patch(
  routes.MODIFY_TASK,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await taskListTaskService.toggle(id);
    res.send(task);
  })
);

// delete task
taskListController.delete(
  routes.DELETE_TASK,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await taskListTaskService.deleteOne(id);
    res.send(task);
  })
);

module.exports = taskListController;
