const appRoot = require('app-root-path');

module.exports = {
  config: `${appRoot}/config`,
  errorHandlers: `${appRoot}/env/functions/errorHandlers`,
  middleware: `${appRoot}/env/functions/middleware`,
  models: `${appRoot}/DB/mongo/models`,
  mongo: `${appRoot}/DB/mongo`,
  morgan: `${appRoot}/loggers/morgan`,
  passport: `${appRoot}/auth`,
  sessions: `${appRoot}/sessions`,
  winston: `${appRoot}/loggers/winston`,

  // pages
  auth: `${appRoot}/auth/routes`,
  home: `${appRoot}/home/routes`,
  skills: `${appRoot}/skills/routes`,
  blog: `${appRoot}/blog/routes`,

  //models
  blogPost: `${appRoot}/DB/mongo/models/blogPostModel`,
  content: `${appRoot}/DB/mongo/models/contentModel`,
  skillsList: `${appRoot}/DB/mongo/models/skillsListModel`,
  user: `${appRoot}/DB/mongo/models/userModel`,
  workingOn: `${appRoot}/DB/mongo/models/workingOnModel`,
};
