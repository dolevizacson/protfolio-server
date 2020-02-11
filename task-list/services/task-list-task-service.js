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
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

const taskListTaslModel = functions.helpers.getMongooseModel(TaskListTaslModel);

module.exports = class WorkingOnTaskService extends DBcrud {
  constructor() {
    super(taskListTaslModel);
  }

  async readOne(id) {
    const data = await this.model.findOne({ _id: id });
    if (!data) {
      throw new NotFoundInDatabaseError('Object not found in database');
    } else {
      return data;
    }
  }

  async update(id, object) {
    const updatedObject = await this.model.findOneAndUpdate(
      { _id: id },
      object,
      { new: true }
    );
    if (!updatedObject) {
      throw new NotFoundInDatabaseError('Object not found in database');
    } else {
      return updatedObject;
    }
  }

  async toggle(id) {
    const toggledObject = await this.model.findOneAndUpdate(
      { _id: id },
      {
        $bit: {
          isDone: { xor: 1 },
        },
      },
      { new: true }
    );
    if (!toggledObject) {
      throw new NotFoundInDatabaseError('Object not found in database');
    } else {
      return toggledObject;
    }
  }
};
