// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/constants/routes`);

// modules
const express = modules.EXPRESS;

// services
const SkillsContentService = require(files.SKILLS_CONTENT_SERVICE);
const skillsContentService = new SkillsContentService();

const skillsController = express.Router();

skillsController.get(
  routes.READ_SKILLS_LIST,
  helpers.asyncWrapper(async (req, res, next) => {
    const skillsList = await skillsContentService.readSkillsList();
    res.send(skillsList);
  })
);

module.exports = skillsController;
