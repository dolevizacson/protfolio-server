const appRoot = require('app-root-path');

module.exports = {
  config: `${appRoot}/config`,
  errorHandlers: `${appRoot}/env/functions/errorHandlers`,
  home: `${appRoot}/home/routes`,
  middleware: `${appRoot}/env/functions/middleware`,
  models: `${appRoot}/DB/mongo/models`,
  mongo: `${appRoot}/DB/mongo`,
  morgan: `${appRoot}/loggers/morgan`,
  sessions: `${appRoot}/sessions`,
  skills: `${appRoot}/skills/routes`,
  winston: `${appRoot}/loggers/winston`,
};
