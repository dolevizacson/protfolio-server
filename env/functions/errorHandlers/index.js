const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);

const errorHandlers = {
  errorHandler(err, req, res, next) {
    console.log('in handler');
    console.log(err.stack);
    res.status('400').end();
    //next(err);
  },
};

module.exports = errorHandlers;
