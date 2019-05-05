// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const express = modules.EXPRESS;

// services
const SkillsContentService = require(files.SKILLS_CONTENT_SERVICE);
const skillsContentService = new SkillsContentService();

const skillsController = express.Router();

skillsController.get(
  routes.READ_SKILLS_LIST,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const skillsList = await skillsContentService.readSkillsList();
    res.send(skillsList);
  })
);

module.exports = skillsController;
