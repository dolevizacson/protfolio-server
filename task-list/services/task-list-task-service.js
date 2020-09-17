// initialization
const {
  modules,
  files,
  functions,
  routes,
  classes,
} = require('../../env/utils/access');

// files
const TaskListTaskModel = require(files.TASK_LIST_TASK_MODEL);

// classes
const DBcrud = classes.DBcrud;

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

const taskListTaskModel = functions.helpers.getMongooseModel(TaskListTaskModel);

module.exports = class WorkingOnTaskService extends DBcrud {
  constructor() {
    super(taskListTaskModel);
  }
};
