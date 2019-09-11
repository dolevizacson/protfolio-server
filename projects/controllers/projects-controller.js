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

// files
const middleware = require(files.MIDDLEWARE);
const ProjectModel = require(files.PROJECT_MODEL);
const ProjectService = require(files.PROJECT_SERVICE);

// constants
const { scopes } = constants.validation;

// services
const projectService = new ProjectService();

// models
const projectModel = functions.helpers.getMongooseModel(ProjectModel);

const projectsController = express.Router();

// get active projects list
projectsController.get(
  routes.READ_PROJECTS,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const projects = await projectService.readAllActive();
    res.send(projects);
  })
);

// get all projects list
projectsController.get(
  routes.READ_ALL_PROJECTS,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const projects = await projectService.readAll();
    res.send(projects);
  })
);

// get project
projectsController.get(
  routes.READ_PROJECT,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const project = await projectService.readOne(id);
    res.send(project);
  })
);

// post project
projectsController.post(
  routes.CREATE_PROJECT,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(projectModel, scopes.project.DEFAULT),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const project = await projectService.create(req.body);
    res.status(httpStatus.CREATED).send(project);
  })
);

// update project
projectsController.put(
  routes.UPDATE_PROJECT,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(projectModel, scopes.project.UPDATE),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const project = await projectService.update(id, req.body);
    res.send(project);
  })
);

// toggle project
projectsController.patch(
  routes.MODIFY_PROJECT,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const project = await projectService.toggle(id);
    res.send(project);
  })
);

// delete project
projectsController.delete(
  routes.DELETE_PROJECT,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const project = await projectService.deleteOne(id);
    res.send(project);
  })
);

module.exports = projectsController;
