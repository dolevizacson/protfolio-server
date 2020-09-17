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
    active: Joi.number(),
    date: Joi.date(),
    update: Joi.date(),
    header: Joi.string().required(),
    description: Joi.string().required(),
    isDone: Joi.number(),
  }),
};
