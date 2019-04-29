// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/constants/routes`);

// modules
const express = modules.EXPRESS;

// services
const HomeContentService = files.HOME_CONTENT_SERVICE;
const homeContentService = new HomeContentService();

const homeController = express.Router();

// GET
homeController.get(
  routes.READ_HOME_ABOUT,
  helpers.asyncWrapper(async (req, res, next) => {
    const about = await homeContentService.readOne('about');
    res.send(about);
  })
);

homeController.get(
  routes.READ_HOME_MOTO,
  helpers.asyncWrapper(async (req, res, next) => {
    const moto = await homeContentService.readOne('moto');
    res.send(moto);
  })
);

homeController.get(
  routes.READ_HOME_WORKING_ON,
  helpers.asyncWrapper(async (req, res, next) => {
    const workingOn = await homeContentService.readall();
    res.send(workingOn);
  })
);

module.exports = homeContentService;
