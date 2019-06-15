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
    paragraph: Joi.array()
      .items(
        Joi.object().keys({
          header: Joi.string(),
          content: Joi.string().required(),
        })
      )
      .min(1),
    footer: Joi.string(),
  }),
  updateValidationSchema: Joi.object().keys({
    active: Joi.boolean().required(),
    _id: Joi.string().required(),
    header: Joi.string().required(),
    date: Joi.date().required(),
    paragraph: Joi.array()
      .items(
        Joi.object().keys({
          _id: Joi.string().required(),
          header: Joi.string(),
          content: Joi.string().required(),
        })
      )
      .min(1),
    footer: Joi.string(),
  }),
};
