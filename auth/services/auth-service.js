// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

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
