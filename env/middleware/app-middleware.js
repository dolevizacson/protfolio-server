// initialization
const { modules, files, functions, routes } = require('../utils/access');

// modules
const express = modules.EXPRESS;
const cors = modules.CORS;
const passport = modules.PASSPORT;

//files
const sessions = require(files.SESSIONS);
const morgan = require(files.MORGAN);

module.exports = function appMiddleware(app) {
  // express middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // middleware
  app.use(morgan);
  app.use(sessions);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cors());
};
