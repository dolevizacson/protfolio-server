// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
} = require('../utils/access');

// modules
const Joi = modules.JOI;

// constants
const { scopes } = constants.validation;

// errors
const MissingValidationInformationSchemaError = require(files.MISSING_VALIDATION_INFORMATION_SCHEMA_ERROR);
const RouteValidationError = require(files.ROUTE_VALIDATION_ERROR);

const getValidationSchema = (model, scope) => {
  const { [constants.validation.joiModelValidation]: joiValidator } = model;
  if (!joiValidator) {
    throw new MissingValidationInformationSchemaError(
      `No validation schemas for ${model.modelName} model`
    );
  }
  const { scopes } = joiValidator();
  if (!scopes) {
    return joiValidator();
  }

  const validationSchema = scopes[scope];
  if (!validationSchema) {
    throw new MissingValidationInformationSchemaError(
      `No scope ${scope} on ${model.modelName} model`
    );
  }
  return validationSchema;
};

module.exports = {
  validateWithModel(model, scope = scopes.DEFAULT, options = {}) {
    return (req, res, next) => {
      const { body } = req;
      let validationSchema;
      try {
        validationSchema = getValidationSchema(model, scope);
      } catch (err) {
        next(err);
      }
      Joi.validate(
        body,
        validationSchema,
        { ...options, allowUnknown: true },
        (err, value) => {
          return err === null
            ? next()
            : next(
                new RouteValidationError(
                  err.message || `Route validation error on `
                )
              );
        }
      );
    };
  },
  validateWithSchema(validationSchema, scope = scopes.DEFAULT, options = {}) {
    return (req, res, next) => {
      const { body } = req;
      Joi.validate(
        body,
        validationSchema,
        { ...options, allowUnknown: true },
        (err, value) => {
          return err === null
            ? next()
            : next(
                new RouteValidationError(
                  err.message || `Route validation error on `
                )
              );
        }
      );
    };
  },
};
