// initialization
const {
  modules,
  files,
  functions,
  routes,
  classes,
} = require('../../env/utils/access');

// files
const ProjectModel = require(files.PROJECT_MODEL);

// classes
const DBcrud = classes.DBcrud;

// models
const projectModel = functions.helpers.getMongooseModel(ProjectModel);

module.exports = class ProjectsService extends DBcrud {
  constructor() {
    super(projectModel);
  }
};
