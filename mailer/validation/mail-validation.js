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
  from: Joi.string()
    .email()
    .required(),
  subject: Joi.string(),
  text: Joi.string(),
  attachments: Joi.array().max(0),
});
