// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// files
const ProjectModel = require(files.PROJECT_MODEL);

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

// models
const projectModel = functions.helpers.getMongooseModel(ProjectModel);

module.exports = class ProjectsService {
  async readAllActive() {
    const projects = await projectModel.find({ active: true });
    if (!projects) {
      throw new NotFoundInDatabaseError('No projects in database');
    } else {
      projects.map(project => {
        delete project.active;
        return project;
      });
      return projects;
    }
  }

  async readAll() {
    const projects = await projectModel.find();
    if (!projects) {
      throw new NotFoundInDatabaseError('No projects in database');
    } else {
      return projects;
    }
  }

  async readOne(id) {
    const project = await projectModel.findOne({ _id: id, active: true });
    if (!project) {
      throw new NotFoundInDatabaseError('Project not found in database');
    } else {
      return project;
    }
  }

  async create(project) {
    return await projectModel.create(project);
  }

  async update(id, blogPost) {
    const updatedProject = await projectModel.findOneAndUpdate(
      { _id: id, active: true },
      { ...blogPost, update: Date.now() },
      { new: true }
    );
    if (!updatedProject) {
      throw new NotFoundInDatabaseError('Project not found in database');
    } else {
      return updatedProject;
    }
  }

  async toggle(id) {
    const toggledProject = await projectModel.findOneAndUpdate(
      { _id: id },
      {
        $bit: {
          active: { xor: 1 },
        },
      },
      { new: true }
    );
    if (!toggledProject) {
      throw new NotFoundInDatabaseError('Project not found in database');
    } else {
      return toggledProject;
    }
  }

  async deleteOne(id) {
    const deletedProject = await projectModel.findOneAndDelete({ _id: id });
    if (!deletedProject) {
      throw new NotFoundInDatabaseError('Project not found in database');
    } else {
      return deletedProject;
    }
  }
};
