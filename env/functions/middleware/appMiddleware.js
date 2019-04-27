// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// modules
const express = modules.express;
const cors = modules.cors;

//files
const mongo = require(files.mongo);
const sessions = require(files.sessions);
const morgan = require(files.morgan);
const passport = require(files.passport);

module.exports = function appMiddleware(app) {
  // express middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // middleware
  app.use(mongo);
  app.use(sessions);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(morgan);
  app.use(cors());
};
