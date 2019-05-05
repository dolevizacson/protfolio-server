// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const express = modules.EXPRESS;

// services
const HomeContentService = require(files.HOME_CONTENT_SERVICE);
const homeContentService = new HomeContentService();

const homeController = express.Router();

// GET
homeController.get(
  routes.READ_HOME_ABOUT,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const about = await homeContentService.readOne('about');
    res.send(about);
  })
);

homeController.get(
  routes.READ_HOME_MOTO,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const moto = await homeContentService.readOne('moto');
    res.send(moto);
  })
);

homeController.get(
  routes.READ_HOME_WORKING_ON,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const workingOn = await homeContentService.readAll();
    res.send(workingOn);
  })
);

module.exports = homeController;
