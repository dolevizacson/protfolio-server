const appRoot = require('app-root-path');

module.exports = {
  APP_MIDDLEWARE: `${appRoot}/env/middleware/app-middleware`,
  AUTH_MIDDLEWARE: `${appRoot}/env/middleware/auth-middleware`,
  ERRORS: `${appRoot}/env/errors/errors`,
  ERROR_HANDLERS: `${appRoot}/env/error-handlers/error-handlers`,
  GENERAL_ERROR_HANDLERS: `${appRoot}/env/error-handlers/general-error-handlers`,
  HELPERS_FUNCTIONS: `${appRoot}/env/functions/helpers-functions`,
  SPECIFIC_ERROR_HANDLERS: `${appRoot}/env/error-handlers/specific-error-handlers`,
  MIDDLEWARE: `${appRoot}/env/middleware/middleware`,
  MONGO: `${appRoot}/env/DB/mongo/connection-settings`,
  MORGAN: `${appRoot}/env/loggers/morgan`,
  SESSIONS: `${appRoot}/env/sessions/sessions-settings`,
  WINSTON: `${appRoot}/env/loggers/winston`,

  // errors
  NOT_FOUND_IN_DATABASE_ERROR: `${appRoot}/env/errors/not-found-in-database-error`,
  BAD_ENDPOINT_ERROR: `${appRoot}/env/errors/bad-endpoint-error`,
  USER_AUTHENTICATION_ERROR: `${appRoot}/env/errors/user-authentication-error`,

  // auth
  AUTH: `${appRoot}/auth/controllers/auth-controller`,
  AUTH_SERVICE: `${appRoot}/auth/services/auth-service`,
  USER_MODEL: `${appRoot}/auth/models/user-model`,

  //skills
  SKILLS: `${appRoot}/skills/controllers/skills-controller`,
  SKILLS_CONTENT_SERVICE: `${appRoot}/skills/services/skills-content-service`,
  SKILLS_LIST_MODEL: `${appRoot}/skills/models/skills-list-model`,

  //blog
  BLOG: `${appRoot}/blog/controllers/blog-controller`,
  BLOG_POST_SERVICE: `${appRoot}/blog/services/blog-post-service`,
  BLOG_POST_MODEL: `${appRoot}/blog/models/blog-post-model`,
};
