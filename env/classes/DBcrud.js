// initialization
const { modules, files, functions, routes } = require('../utils/access');

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

module.exports = class DBcrud {
  constructor(model) {
    this.model = model;
  }

  async readAllActive() {
    const data = await this.model.find({ active: true }, { active: 0 });
    if (!data.length) {
      throw new NotFoundInDatabaseError('No objects in database');
    } else {
      return data;
    }
  }

  async readAll() {
    const data = await this.model.find({});
    if (!data.length) {
      throw new NotFoundInDatabaseError('No objects in database');
    } else {
      return data;
    }
  }

  async readOneActive(id) {
    const data = await this.model.findOne(
      { _id: id, active: true },
      { active: 0 }
    );
    if (!data) {
      throw new NotFoundInDatabaseError('Object not found in database');
    } else {
      return data;
    }
  }

  async readOne(id) {
    const data = await this.model.findOne({ _id: id });
    if (!data) {
      throw new NotFoundInDatabaseError('Object not found in database');
    } else {
      return data;
    }
  }

  async create(object) {
    return await this.model.create(object);
  }

  async update(id, object) {
    const updatedObject = await this.model.findOneAndUpdate(
      { _id: id },
      { ...object, update: Date.now() },
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
          active: { xor: 1 },
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

  async deleteOne(id) {
    const deletedObject = await this.model.findOneAndDelete({ _id: id });
    if (!deletedObject) {
      throw new NotFoundInDatabaseError('Object not found in database');
    } else {
      return deletedObject;
    }
  }
};
