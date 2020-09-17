// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const express = modules.EXPRESS;

// files
const middleware = require(files.MIDDLEWARE);
const UserModel = require(files.USER_MODEL);
const AuthService = require(files.AUTH_SERVICE);

// services
const authService = new AuthService();

const userModel = functions.helpers.getMongooseModel(UserModel);

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
  middleware.validation.validateWithModel(userModel),
  middleware.auth.authenticate,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    res.send(`Log In successful`);
  })
);

authController.get(
  routes.AUTH_LOGOUT,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('Logout successful');
  })
);

authController.get(
  routes.AUTH_IS_LOGGED_IN,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    res.send('logged in');
  })
);

module.exports = authController;
