// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// files
const workingOnTaslModel = require(files.WORKING_ON_TASK_MODEL);

// errors
const NotFoundInDatabase = require(files.NOT_FOUND_IN_DATABASE_ERROR);

const WorkingOnTaslModel = functions.helpers.getMongooseModel(
  workingOnTaslModel
);

module.exports = class WorkingOnTaskService {
  async readAll() {
    const tasksList = await WorkingOnTaslModel.find();
    if (!tasksList) {
      throw new NotFoundInDatabase(
        'Working on tasks list not found in database'
      );
    } else {
      return tasksList;
    }
  }

  async readOne(id) {
    const task = await WorkingOnTaslModel.findOne({ _id: id });
    if (!task) {
      throw new NotFoundInDatabase('Working on task not found in database');
    } else {
      return task;
    }
  }

  async create(task) {
    return await WorkingOnTaslModel.create(task);
  }

  async update(id, task) {
    const updatedTask = await WorkingOnTaslModel.findOneAndUpdate(
      { _id: id },
      task,
      { new: true }
    );
    if (!updatedTask) {
      throw new NotFoundInDatabase('Working on task not found in database');
    } else {
      return updatedTask;
    }
  }

  async toggle(id) {
    const toggledTask = await WorkingOnTaslModel.findOneAndUpdate(
      { _id: id },
      {
        $bit: {
          isDone: { xor: 1 },
        },
      },
      { new: true }
    );
    if (!toggledTask) {
      throw new NotFoundInDatabase('Working on task not found in database');
    } else {
      return toggledTask;
    }
  }

  async deleteOne(id) {
    const deletedTask = await WorkingOnTaslModel.findOneAndDelete({
      _id: id,
    });
    if (!deletedTask) {
      throw new NotFoundInDatabase('Working on task not found in database');
    } else {
      return deletedTask;
    }
  }
};
