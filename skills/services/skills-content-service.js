// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// // modules
const mongoose = modules.MONGOOSE;

// files
const skillsListModel = require(files.SKILLS_LIST_MODEL);

// errors
const NotFoundInDatabase = require(files.NOT_FOUND_IN_DATABASE_ERROR);

const SkillsListModel = mongoose.model(skillsListModel);

module.exports = class SkillsContentService {
  async readSkillsList() {
    const skillsList = await SkillsListModel.find();
    if (!skillsList) {
      throw new NotFoundInDatabase('Skills list not found in database');
    } else {
      return skillsList;
    }
  }
};
