// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
  classes,
} = require('../../env/utils/access');

// files
const ProjectModel = require(files.PROJECT_MODEL);
const ProjectService = require(files.PROJECT_SERVICE);

// constants
const { project: projectValidation } = constants.validation.scopes;

// classes
const Controller = classes.Controller;

// services
const projectService = new ProjectService();

// models
const projectModel = functions.helpers.getMongooseModel(ProjectModel);

const projectsController = new Controller(
  projectService,
  projectModel,
  projectValidation
);

projectsController.getAllActive();
projectsController.getAll();
projectsController.getOneActive();
projectsController.getOne();
projectsController.post();
projectsController.update();
projectsController.toggle();
projectsController.delete();

module.exports = projectsController.getRouter();
