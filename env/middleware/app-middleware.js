// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const express = modules.EXPRESS;
const cors = modules.CORS;

//files
const sessions = require(files.SESSIONS);
const morgan = require(files.MORGAN);
const passport = require(files.PASSPORT);

module.exports = function appMiddleware(app) {
  // express middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // middleware
  app.use(sessions);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(morgan);
  app.use(cors());
};
