module.exports = {
  // auth
  AUTH: '/auth',
  AUTH_LOGOUT: '/logout', // GET
  AUTH_LOGIN: '/login', // POST
  AUTH_IS_LOGGED_IN: '/isloggedin', //GET
  AUTH_REGISTER: '/register', // POST

  // CRUD
  READ_ACTIVE: '/', // GET
  READ_ALL: '/all', // GET
  READ: '/:id', // GET
  CREATE: '/', // POST
  UPDATE: '/:id', // PUT
  MODIFY: '/:id', // PATCH
  DELETE: '/:id', // DELETE

  // skills
  SKILLS: '/skills',

  // blog
  BLOG: '/blog',

  // task list
  TASK_LIST: '/tasklist',

  // projects
  PROJECTS: '/projects',

  // contanct
  CONTACT: '/contact',
};
