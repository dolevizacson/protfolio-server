module.exports = class NotFoundInDatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundInDatabaseError';
  }
};
