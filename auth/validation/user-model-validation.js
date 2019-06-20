// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
} = require('../../env/utils/access');

// modules
const Joi = modules.JOI;

module.exports = Joi.object().keys({
  username: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
});
