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

  async readOne(id) {
    const skill = await skillsListModel.findOne({ _id: id });
    if (!skill) {
      throw new NotFoundInDatabaseError('Skill not found in database');
    } else {
      return skill;
    }
  }

  async update(id, skill) {
    const updatedSkill = await skillsListModel.findOneAndUpdate(
      { _id: id },
      skill,
      { new: true }
    );
    if (!updatedSkill) {
      throw new NotFoundInDatabaseError('Skill not found in database');
    } else {
      return updatedSkill;
    }
  }
};
