// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// files
const SkillsListModel = require(files.SKILLS_LIST_MODEL);

// errors
const NotFoundInDatabase = require(files.NOT_FOUND_IN_DATABASE_ERROR);

const skillsListModel = functions.helpers.getMongooseModel(SkillsListModel);

module.exports = class SkillsContentService {
  async readAll() {
    const skillsList = await skillsListModel.find();
    if (!skillsList) {
      throw new NotFoundInDatabase('Skills list not found in database');
    } else {
      return skillsList;
    }
  }

  async readOne(id) {
    const skill = await skillsListModel.findOne({ _id: id });
    if (!skill) {
      throw new NotFoundInDatabase('Skill not found in database');
    } else {
      return skill;
    }
  }

  async create(skill) {
    return await skillsListModel.create(skill);
  }

  async update(id, skill) {
    const updatedSkill = await skillsListModel.findOneAndUpdate(
      { _id: id },
      skill,
      { new: true }
    );
    if (!updatedSkill) {
      throw new NotFoundInDatabase('Skill not found in database');
    } else {
      return updatedSkill;
    }
  }

  async deleteOne(id) {
    const deletedSkill = await skillsListModel.findOneAndDelete({
      _id: id,
    });
    if (!deletedSkill) {
      throw new NotFoundInDatabase('Skill not found in database');
    } else {
      return deletedSkill;
    }
  }
};
