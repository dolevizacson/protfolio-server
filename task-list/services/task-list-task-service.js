// initialization
const {
  modules,
  files,
  functions,
  routes,
  classes,
} = require('../../env/utils/access');

// files
const TaskListTaslModel = require(files.TASK_LIST_TASK_MODEL);

// classes
const DBcrud = classes.DBcrud;

// errors
const NotFoundInDatabase = require(files.NOT_FOUND_IN_DATABASE_ERROR);

const taskListTaslModel = functions.helpers.getMongooseModel(TaskListTaslModel);

module.exports = class WorkingOnTaskService extends DBcrud {
  constructor() {
    super(taskListTaslModel);
  }
};
