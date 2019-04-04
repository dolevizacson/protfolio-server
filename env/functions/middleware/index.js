const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// modules
const cors = mods.cors;
const passport = mods.passport;
const status = mods.httpStatus;

// files
const config = require(files.config);

const middlewares = {
  checkCors(req, res, next) {
    const corsOptions = {
      origin(origin, callback) {
        if (
          process.env.NODE_ENV === 'production' &&
          !config.allowDomains().has(origin)
        ) {
          callback(new Error('Not allowed by CORS'));
        } else {
          callback(null, true);
        }
      },
    };
    return cors(corsOptions);
  },
  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(status.UNAUTHORIZED).end();
    }
  },
};

module.exports = middlewares;
