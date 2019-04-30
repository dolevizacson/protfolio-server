// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const mongoose = modules.MONGOOSE;

// files
const userModel = require(files.USER_MODEL);

const UserModel = mongoose.model(userModel);

module.exports = class AuthService {
  async register(username, password) {
    const user = UserModel.register({ username }, password);
    return user;
  }

  async logIn(username, password) {
    const { user } = UserModel.authenticate()(username, password);
    if (!user) {
      throw new LogInError('failed to login');
    }
  }

  async logOut(req) {
    req.logout();
    req.session.destroy();
  }
};
