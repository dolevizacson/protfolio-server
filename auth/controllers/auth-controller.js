// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/constants/routes`);

// modules
const express = modules.EXPRESS;

// files
const middleware = require(files.MIDDLEWARE);

// services
const AuthService = require(files.AUTH_SERVICE);
const authService = new AuthService();

const authController = express.Router();

authController.get(
  routes.AUTH_REGISTER,
  helpers.asyncWrapper(async (req, res, next) => {
    const username = process.env.AUTH_USERNAME;
    const password = process.env.AUTH_PASSWORD;
    const user = await authService.register(username, password);
    res.send(user);
  })
);

authController.post(
  routes.AUTH_LOGIN,
  middleware.auth.authenticate,
  helpers.asyncWrapper(async (req, res, next) => {
    res.send(`Logged In successful`);
  })
);

authController.get(
  routes.AUTH_LOGOUT,
  helpers.asyncWrapper(async (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('Logged Out successful');
  })
);

// remove later
authController.get(
  '/test',
  middleware.auth.isLoggedIn,
  helpers.asyncWrapper(async (req, res, next) => {
    res.send('test logged in');
  })
);

module.exports = authController;
