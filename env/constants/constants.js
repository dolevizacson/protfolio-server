module.exports = {
  validation: {
    joiModelValidation: 'joiValidator',
    scopes: {
      DEFAULT: 'default',
      blogPost: {
        DEFAULT: 'default',
        UPDATE: 'update',
      },
      skillsList: {
        DEFAULT: 'default',
        UPDATE: 'update',
      },
      taskListTask: {
        DEFAULT: 'default',
        UPDATE: 'update',
      },
      project: {
        DEFAULT: 'default',
        UPDATE: 'update',
      },
    },
  },
};
