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
    summery: Joi.string().required(),
    description: Joi.string(),
    technologies: Joi.array()
      .items(Joi.string())
      .min(1),
    links: Joi.array().items(Joi.string()),
  }),

  updateValidationSchema: Joi.object().keys({
    _id: Joi.string().required(),
    header: Joi.string().required(),
    summery: Joi.string().required(),
    description: Joi.string(),
    technologies: Joi.array()
      .items(Joi.string())
      .min(1),
    links: Joi.array().items(Joi.string()),
    date: Joi.date(),
    update: Joi.date(),
  }),
};
