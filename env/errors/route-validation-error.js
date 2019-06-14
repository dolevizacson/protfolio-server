module.exports = class RouteValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RouteValidationError';
  }
};
