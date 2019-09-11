// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const passport = modules.PASSPORT;

// files
const UserModel = require(files.USER_MODEL);

// model
const userModel = functions.helpers.getMongooseModel(UserModel);

module.exports = class AuthService {
  async register(username, password) {
    const user = await userModel.register({ username }, password);
    return user;
  }
};
