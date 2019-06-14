module.exports = class MissingValidationInformationSchemaError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MissingValidationInformationSchemaError';
  }
};
