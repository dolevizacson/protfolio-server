// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const mongoose = modules.MONGOOSE;
const passport = modules.PASSPORT;

// files
const userModel = require(files.USER_MODEL);

const UserModel = mongoose.model(userModel);

module.exports = class AuthService {
  async register(username, password) {
    const user = await UserModel.register({ username }, password);
    return user;
  }
};
