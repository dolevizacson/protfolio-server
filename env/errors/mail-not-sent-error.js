module.exports = class MailNotSentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MailNotSentError';
  }
};
