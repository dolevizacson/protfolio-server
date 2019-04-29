// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// // modules
const mongoose = modules.MONGOOSE;

// files
const skillsListModel = require(files.SKILLS_LIST_MODEL);

const SkillsListModel = mongoose.model(skillsListModel);

module.exports = class SkillsContentService {
  async readSkillsList() {
    const skillsList = await SkillsListModel.find();
    if (!skillsList) {
      throw new NotFoundInDatabaseError('Skills list not found in database');
    } else {
      return skillsList;
    }
  }
};
