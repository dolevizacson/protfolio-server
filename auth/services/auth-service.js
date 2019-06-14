// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const passport = modules.PASSPORT;

// files
const userModel = require(files.USER_MODEL);

// model
const UserModel = functions.helpers.getMongooseModel(userModel);

module.exports = class AuthService {
  async register(username, password) {
    const user = await UserModel.register({ username }, password);
    return user;
  }
};
