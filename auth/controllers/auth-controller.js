// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

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
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const username = process.env.AUTH_USERNAME;
    const password = process.env.AUTH_PASSWORD;
    const user = await authService.register(username, password);
    res.send(user);
  })
);

authController.post(
  routes.AUTH_LOGIN,
  middleware.auth.authenticate,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    res.send(`Logged In successful`);
  })
);

authController.get(
  routes.AUTH_LOGOUT,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('Logged Out successful');
  })
);

// remove later
authController.get(
  '/test',
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    res.send('test logged in');
  })
);

module.exports = authController;
