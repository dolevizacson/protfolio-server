const cors = require('cors');
const config = require('../config');

const middleware = {
  checkCors(req, res, next) {
    const corsOptions = {
      origin(origin, callback) {
        if (config.allowDomains().has(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    };

    return cors(corsOptions);
  },
};

module.exports = middleware;
