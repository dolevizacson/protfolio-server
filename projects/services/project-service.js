// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// files
const projectModel = require(files.PROJECT_MODEL);

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

// models
const ProjectModel = functions.helpers.getMongooseModel(projectModel);

module.exports = class ProjectsService {
  async readAllActive() {
    const projects = await ProjectModel.find({ active: true });
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
    const projects = await ProjectModel.find();
    if (!projects) {
      throw new NotFoundInDatabaseError('No projects in database');
    } else {
      return projects;
    }
  }

  async readOne(id) {
    const project = await ProjectModel.findOne({ _id: id, active: true });
    if (!project) {
      throw new NotFoundInDatabaseError('Project not found in database');
    } else {
      return project;
    }
  }

  async create(project) {
    return await ProjectModel.create(project);
  }

  async update(id, blogPost) {
    const updatedProject = await ProjectModel.findOneAndUpdate(
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
    const toggledProject = await ProjectModel.findOneAndUpdate(
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
    const deletedProject = await ProjectModel.findOneAndDelete({ _id: id });
    if (!deletedProject) {
      throw new NotFoundInDatabaseError('Project not found in database');
    } else {
      return deletedProject;
    }
  }
};
