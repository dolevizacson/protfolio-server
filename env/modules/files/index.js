const appRoot = require('app-root-path');

module.exports = {
  config: `${appRoot}/config`,
  errorHandlers: `${appRoot}/env/functions/errorHandlers`,
  home: `${appRoot}/home/routes`,
  middleware: `${appRoot}/env/functions/middleware`,
  models: `${appRoot}/DB/mongo/models`,
  mongo: `${appRoot}/DB/mongo`,
  morgan: `${appRoot}/loggers/morgan`,
  passport: `${appRoot}/auth`,
  sessions: `${appRoot}/sessions`,
  skills: `${appRoot}/skills/routes`,
  winston: `${appRoot}/loggers/winston`,

  //models
  content: `${appRoot}/DB/mongo/models/contentModel`,
  skillsList: `${appRoot}/DB/mongo/models/skillsListModel`,
  user: `${appRoot}/DB/mongo/models/userModel`,
  workingOn: `${appRoot}/DB/mongo/models/workingOnModel`,
};
