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

module.exports = {
  defaultValidationSchema: Joi.object().keys({
    header: Joi.string().required(),
    description: Joi.string().required(),
  }),

  updateValidationSchema: Joi.object().keys({
    _id: Joi.string().required(),
    header: Joi.string().required(),
    description: Joi.string().required(),
    isDone: Joi.number(),
  }),
};
