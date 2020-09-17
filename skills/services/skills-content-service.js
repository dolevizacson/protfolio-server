// initialization
const {
  modules,
  files,
  functions,
  routes,
  classes,
} = require('../../env/utils/access');

// files
const SkillsListModel = require(files.SKILLS_LIST_MODEL);

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

// classes
const DBcrud = classes.DBcrud;

const skillsListModel = functions.helpers.getMongooseModel(SkillsListModel);

module.exports = class SkillsContentService extends DBcrud {
  constructor() {
    super(skillsListModel);
  }
};
