// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/constants/routes`);

// modules
const express = modules.EXPRESS;

// services
const AuthService = require(files.AUTH_SERVICE);
const authService = new AuthService();

const authController = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(status.UNAUTHORIZED).end();
  }
}

authController.get(
  routes.AUTH_REGISTER,
  helpers.asyncWrapper(async (req, res, next) => {
    const userName = process.env.AUTH_USERNAME;
    const password = process.env.AUTH_PASSWORD;
    const user = await authService.register(username, password);
    res.send(user);
  })
);

authController.post(
  routes.AUTH_LOGIN,
  helpers.asyncWrapper(async (req, res, next) => {
    const { username, password } = req.body;
    await authService.logIn(username, password);
    res.send('Logged In');
  })
);

authController.get(
  routes.AUTH_LOGOUT,
  helpers.asyncWrapper(async (req, res, next) => {
    await authService.logOut(req);
    res.send('Logged Out');
  })
);

// remove later
/* authController.get(
  '/test',
  isLoggedIn,
  helpers.asyncWrapper(async (req, res, next) => {
    res.send('test logged in');
  })
); */

module.exports = authController;
