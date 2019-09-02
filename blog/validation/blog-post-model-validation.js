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
    paragraph: Joi.array()
      .items(
        Joi.object().keys({
          header: Joi.string(),
          content: Joi.string().required(),
        })
      )
      .min(1),
    conclusion: Joi.object().keys({
      header: Joi.string(),
      content: Joi.string().required(),
    }),
    conclusionSentence: Joi.string(),
  }),

  updateValidationSchema: Joi.object().keys({
    _id: Joi.string().required(),
    header: Joi.string().required(),
    summery: Joi.string().required(),
    date: Joi.date(),
    update: Joi.date(),
    paragraph: Joi.array()
      .items(
        Joi.object().keys({
          _id: Joi.string().required(),
          header: Joi.string(),
          content: Joi.string().required(),
        })
      )
      .min(1),
    conclusion: Joi.object().keys({
      header: Joi.string(),
      content: Joi.string().required(),
    }),
    conclusionSentence: Joi.string(),
  }),
};
