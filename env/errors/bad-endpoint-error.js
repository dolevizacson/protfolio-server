module.exports = class BadEndpointError extends Error {
  constructor(message, url) {
    super(message);
    this.name = 'BadEndpointError';
    this.url = url;
  }
};
