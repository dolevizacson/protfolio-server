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
    topic: Joi.string().required(),
    stack: Joi.array()
      .items(
        Joi.object().keys({
          language: Joi.string().required(),
          longData: Joi.array().items(Joi.string()).min(1),
        })
      )
      .min(1),
  }),

  updateValidationSchema: Joi.object().keys({
    _id: Joi.string().required(),
    active: Joi.number(),
    date: Joi.date(),
    update: Joi.date(),
    topic: Joi.string().required(),
    stack: Joi.array()
      .items(
        Joi.object().keys({
          _id: Joi.string().required(),
          language: Joi.string().required(),
          longData: Joi.array().items(Joi.string()).min(1),
        })
      )
      .min(1),
  }),
};
