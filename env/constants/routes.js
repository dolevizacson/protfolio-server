module.exports = {
  // auth
  AUTH: '/auth',
  AUTH_LOGOUT: '/logout', // GET
  AUTH_LOGIN: '/login', // POST
  AUTH_IS_LOGGED_IN: '/isloggedin', //GET
  AUTH_REGISTER: '/register', // POST

  // skills
  SKILLS: '/skills',
  READ_SKILLS_LIST: '/skillslist', // GET
  READ_SKILL: '/skillslist/:id', // GET
  CREATE_SKILL: '/skillslist', // POST
  UPDATE_SKILL: '/skillslist/:id', // PUT
  DELETE_SKILL: '/skillslist/:id', // DELETE

  // blog
  BLOG: '/blog',
  READ_BLOG_POSTS: '/posts', // GET
  READ_BLOG_POSTS_ALL: '/posts/all', // GET
  READ_BLOG_POST: '/posts/:id', // GET
  CREATE_BLOG_POST: '/posts', // POST
  UPDATE_BLOG_POST: '/posts/:id', // PUT
  MODIFY_BLOG_POST: '/posts/:id', // PATCH
  DELETE_BLOG_POST: '/posts/:id', // DELETE

  // task list
  TASK_LIST: '/tasklist',
  READ_TASKS: '/task', // GET
  READ_TASK: '/task/:id', // GET
  CREATE_TASK: '/task', // POST
  UPDATE_TASK: '/task/:id', // PUT
  MODIFY_TASK: '/task/:id', // PATCH
  DELETE_TASK: '/task/:id', // DELETE

  // projects
  PROJECTS: '/projects',
  READ_PROJECTS: '/project', // GET
  READ_ALL_PROJECTS: '/project/all', //GET
  READ_PROJECT: '/project/:id', // GET
  CREATE_PROJECT: '/project', // POST
  UPDATE_PROJECT: '/project/:id', // PUT
  MODIFY_PROJECT: '/project/:id', // PATCH
  DELETE_PROJECT: '/project/:id', // DELETE
};
