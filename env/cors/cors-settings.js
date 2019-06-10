// initialization
const { modules, files, functions, routes } = require('../utils/access');

// modules
const cors = modules.CORS;

let options = {
  origin: true,
  credentials: true,
};

if (process.env.NODE_ENV === 'production') {
  const whitelist = process.env.CORS_WHITE_LIST.split(' ');
  options = {
    ...options,
    origin: function(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
}

module.exports = cors(options);
