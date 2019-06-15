module.exports = {
  validation: {
    joiModelValidation: 'joiValidator',
    scopes: {
      DEFAULT: 'default',
      blogPost: {
        DEFAULT: 'default',
        UPDATE: 'update',
      },
    },
  },
};
