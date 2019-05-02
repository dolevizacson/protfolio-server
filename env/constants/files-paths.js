const appRoot = require('app-root-path');

module.exports = {
  APP_MIDDLEWARE: `${appRoot}/env/middleware/app-middleware`,
  ERRORS: `${appRoot}/env/errors/errors`,
  ERROR_HANDLERS: `${appRoot}/env/error-handlers/error-handlers`,
  GENERAL_ERROR_HANDLERS: `${appRoot}/env/error-handlers/general-error-handlers`,
  SPECIFIC_ERROR_HANDLERS: `${appRoot}/env/error-handlers/specific-error-handlers`,
  MIDDLEWARE: `${appRoot}/env/middleware/middleware`,
  MONGO: `${appRoot}/env/DB/mongo/connection-settings`,
  MORGAN: `${appRoot}/env/loggers/morgan`,
  SESSIONS: `${appRoot}/env/sessions/sessions-settings`,
  WINSTON: `${appRoot}/env/loggers/winston`,

  // errors
  NOT_FOUND_IN_DATABASE_ERROR: `${appRoot}/env/errors/not-found-in-database-error`,

  // auth
  AUTH: `${appRoot}/auth/controllers/auth-controller`,
  AUTH_SERVICE: `${appRoot}/auth/services/auth-service`,
  USER_MODEL: `${appRoot}/auth/models/user-model`,

  // home
  HOME: `${appRoot}/home/controllers/home-controller`,
  HOME_CONTENT_SERVICE: `${appRoot}/home/services/home-content-service`,
  HOME_CONTENT_MODEL: `${appRoot}/home/models/home-content-model`,
  HOME_WORKING_ON_MODEL: `${appRoot}/home/models/home-working-on-model`,

  //skills
  SKILLS: `${appRoot}/skills/controllers/skills-controller`,
  SKILLS_CONTENT_SERVICE: `${appRoot}/skills/services/skills-content-service`,
  SKILLS_LIST_MODEL: `${appRoot}/skills/models/skills-list-model`,

  //blog
  BLOG: `${appRoot}/blog/controllers/blog-controller`,
  BLOG_POST_SERVICE: `${appRoot}/blog/services/blog-post-service`,
  BLOG_POST_MODEL: `${appRoot}/blog/models/blog-post-model`,
};
