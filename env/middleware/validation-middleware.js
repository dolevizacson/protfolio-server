// initialization
const { modules, files, functions, routes } = require('../utils/access');

// modules
const joi = modules.JOI;

module.exports = {
  validate(validationSchema, options) {
    return (
      this.validate[(validationSchema, options)] ||
      (this.validate[(validationSchema, options)] = function(req, res, next) {
        const { body } = req;
        joi.validate(body, validationSchema, options, (err, value) => {
          return err === null ? next() : next(err);
        });
      })
    );
  },
};
