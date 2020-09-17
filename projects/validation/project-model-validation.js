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
    description: Joi.string().allow(''),
    technologies: Joi.array().items(Joi.string()).min(1),
    links: Joi.array().items(
      Joi.object().keys({
        name: Joi.string().required(),
        url: Joi.string().required(),
      })
    ),
  }),

  updateValidationSchema: Joi.object().keys({
    _id: Joi.string().required(),
    active: Joi.number(),
    date: Joi.date(),
    update: Joi.date(),
    header: Joi.string().required(),
    summery: Joi.string().required(),
    description: Joi.string().allow(''),
    technologies: Joi.array().items(Joi.string()).min(1),
    links: Joi.array().items(
      Joi.object().keys({
        name: Joi.string().required(),
        url: Joi.string().required(),
      })
    ),
  }),
};
