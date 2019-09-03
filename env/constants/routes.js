module.exports = {
  // skills
  SKILLS: '/skills',
  READ_SKILLS_LIST: '/skillslist', // GET
  READ_SKILL: '/skillslist/:id', // GET
  CREATE_SKILL: '/skillslist', // POST
  UPDATE_SKILL: '/skillslist/:id', // PUT
  DELETE_SKILL: '/skillslist/:id', // DELETE

  // auth
  AUTH: '/auth',
  AUTH_LOGOUT: '/logout', // GET
  AUTH_LOGIN: '/login', // POST
  AUTH_IS_LOGGED_IN: '/isloggedin', //GET
  AUTH_REGISTER: '/register', // POST

  // blog
  BLOG: '/blog',
  READ_BLOG_POSTS: '/posts', // GET
  READ_BLOG_POSTS_ALL: '/posts/all', // GET
  READ_BLOG_POST: '/posts/:id', // GET
  CREATE_BLOG_POST: '/posts', // POST
  UPDATE_BLOG_POST: '/posts/:id', // PUT
  MODIFY_BLOG_POST: '/posts/:id', // PATCH
  DELETE_BLOG_POST: '/posts/:id', // DELETE

  // working on
  TASK_LIST: '/tasklist',
  READ_TASKS: '/tasks', // GET
  READ_TASK: '/tasks/:id', // GET
  CREATE_TASK: '/tasks', // POST
  UPDATE_TASK: '/tasks/:id', // PUT
  MODIFY_TASK: '/tasks/:id', // PATCH
  DELETE_TASK: '/tasks/:id', // DELETE
};
