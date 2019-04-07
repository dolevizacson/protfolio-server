// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/routesConstants`);

// modules
const express = mods.express;
const status = mods.httpStatus;
const mongoose = mods.mongoose;
const passport = mods.passport;

// files
const models = require(files.models);
const config = require(files.config);
const middleware = require(files.middleware);

// models
const User = mongoose.model(models.user);

const auth = express.Router();

auth.get(
  routes.register,
  helpers.asyncWrapper(async (req, res, next) => {
    user = await User.register(
      { username: config.auth.username },
      config.auth.password
    );
    res.json(user);
  })
);

auth.post(
  routes.login,
  passport.authenticate('local'),
  helpers.asyncWrapper(async (req, res, next) => {
    res.status(status.OK).end();
  })
);

auth.get(
  routes.logout,
  helpers.asyncWrapper(async (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.status(status.OK).end();
  })
);

// remove later
/* auth.get(
  '/test',
  middleware.isLoggedIn,
  helpers.asyncWrapper(async (req, res, next) => {
    res.send('looged in');
  })
); */

module.exports = auth;
