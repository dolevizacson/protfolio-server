// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
  classes,
} = require('../../env/utils/access');

//files
const SkillsContentService = require(files.SKILLS_CONTENT_SERVICE);
const SkillsListModel = require(files.SKILLS_LIST_MODEL);

// constants
const { skillsList: skillsListValidation } = constants.validation.scopes;

// classes
const Controller = classes.Controller;

// services
const skillsContentService = new SkillsContentService();

//models
const skillsListModel = functions.helpers.getMongooseModel(SkillsListModel);

const skillsController = new Controller(
  skillsContentService,
  skillsListModel,
  skillsListValidation
);

skillsController.getAll();
skillsController.getOne();
skillsController.post();
skillsController.update();
skillsController.delete();

module.exports = skillsController.getRouter();
