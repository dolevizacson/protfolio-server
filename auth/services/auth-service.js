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

  async logIn(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        throw err;
      }
      if (!user) {
        throw new LogInError('failed to login');
      }

      req.logIn(user, function(err) {
        if (err) {
          throw err;
        }
        return user;
      });
    })(req, res, next);
  }

  async logOut(req) {
    req.logout();
    req.session.destroy();
  }
};
