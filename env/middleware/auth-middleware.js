// initialization
const { modules, files, functions, routes } = require('../utils/access');

// modules
const passport = modules.PASSPORT;

// errors
const UserAuthenticationError = require(files.USER_AUTHENTICATION_ERROR);

module.exports = {
  authenticate(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(new Error('problem in authentication proccess'));
      }

      if (!user) {
        return next(new UserAuthenticationError('failed to login'));
      }

      req.logIn(user, function(err) {
        if (err) {
          return next(new Error('problem in login proccess'));
        }
        next();
      });
    })(req, res, next);
  },

  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      throw new UserAuthenticationError('not logged in');
    }
  },
};
