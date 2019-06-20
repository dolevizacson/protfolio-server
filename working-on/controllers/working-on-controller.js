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
const WorkingOnTaskService = require(files.WORKING_ON_TASK_SERVICE);
const workingOnTaskModel = require(files.WORKING_ON_TASK_MODEL);

// constants
const { scopes } = constants.validation;

// services
const workingOnTaskService = new WorkingOnTaskService();

//models
const WorkingOnTaskModel = functions.helpers.getMongooseModel(
  workingOnTaskModel
);

const workingOnController = express.Router();

// get working on task list
workingOnController.get(
  routes.READ_TASKS,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const tasks = await workingOnTaskService.readAll();
    res.send(tasks);
  })
);

// get working on task
workingOnController.get(
  routes.READ_TASK,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await workingOnTaskService.readOne(id);
    res.send(task);
  })
);

// post working on task
workingOnController.post(
  routes.CREATE_TASK,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(
    WorkingOnTaskModel,
    scopes.workingOnTask.DEFAULT
  ),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const task = await workingOnTaskService.create(req.body);
    res.status(httpStatus.CREATED).send(task);
  })
);

// update working on task
workingOnController.put(
  routes.UPDATE_TASK,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(
    WorkingOnTaskModel,
    scopes.workingOnTask.UPDATE
  ),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await workingOnTaskService.update(id, req.body);
    res.send(task);
  })
);

// toggle working on task
workingOnController.patch(
  routes.MODIFY_TASK,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await workingOnTaskService.toggle(id);
    res.send(task);
  })
);

// delete working on task
workingOnController.delete(
  routes.DELETE_TASK,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await workingOnTaskService.deleteOne(id);
    res.send(task);
  })
);

module.exports = workingOnController;
