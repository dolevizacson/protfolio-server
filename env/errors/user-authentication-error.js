module.exports = class UserAuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserAuthenticationError';
  }
};
