// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
} = require('../../env/utils/access');

// modules
const express = modules.EXPRESS;
const httpStatus = modules.HTTP_STATUS;

//files
const middleware = require(files.MIDDLEWARE);
const SkillsContentService = require(files.SKILLS_CONTENT_SERVICE);
const SkillsListModel = require(files.SKILLS_LIST_MODEL);

// constants
const { scopes } = constants.validation;

// services
const skillsContentService = new SkillsContentService();

//models
const skillsListModel = functions.helpers.getMongooseModel(SkillsListModel);

const skillsController = express.Router();

// get skills list
skillsController.get(
  routes.READ_SKILLS_LIST,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const skillsList = await skillsContentService.readAll();
    res.send(skillsList);
  })
);

// get skill
skillsController.get(
  routes.READ_SKILL,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const skill = await skillsContentService.readOne(id);
    res.send(skill);
  })
);

// post skill
skillsController.post(
  routes.CREATE_SKILL,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(skillsListModel, scopes.skillsList.DEFAULT),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const skill = await skillsContentService.create(req.body);
    res.status(httpStatus.CREATED).send(skill);
  })
);

// update skill
skillsController.put(
  routes.UPDATE_SKILL,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(skillsListModel, scopes.skillsList.UPDATE),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const skill = await skillsContentService.update(id, req.body);
    res.send(skill);
  })
);

// delete skill
skillsController.delete(
  routes.DELETE_SKILL,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const skill = await skillsContentService.deleteOne(id);
    res.send(skill);
  })
);

module.exports = skillsController;
