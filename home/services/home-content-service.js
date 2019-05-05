// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const mongoose = modules.MONGOOSE;

// files
const homeContentModel = require(files.HOME_CONTENT_MODEL);
const homeWorkingOnModel = require(files.HOME_WORKING_ON_MODEL);

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

const HomeContentModel = mongoose.model(homeContentModel);
const HomeWorkingOnModel = mongoose.model(homeWorkingOnModel);

module.exports = class HomeContentService {
  async readOne(name) {
    const contentObject = await HomeContentModel.findOne({ name });
    if (!contentObject) {
      throw new NotFoundInDatabaseError(
        `${name} content not found in database`
      );
    } else {
      return contentObject.content;
    }
  }

  async readAll() {
    const workingOn = await HomeWorkingOnModel.find();
    if (!workingOn) {
      throw new NotFoundInDatabaseError(
        'Working on content not found in database'
      );
    } else {
      return workingOn;
    }
  }
};
