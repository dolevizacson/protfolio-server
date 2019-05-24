module.exports = {
  // skills
  SKILLS: '/skills',
  READ_SKILLS_LIST: '/skillslist', // GET

  // auth
  AUTH: '/auth',
  AUTH_LOGOUT: '/logout',
  AUTH_LOGIN: '/login',
  AUTH_IS_LOGGED_IN: '/isloggedin',
  AUTH_REGISTER: '/register',

  // blog
  BLOG: '/blog',
  READ_BLOG_POSTS: '/posts', // GET
  READ_BLOG_POST: '/posts/:id', // GET
  CREATE_BLOG_POST: '/posts', // POST
  UPDATE_BLOG_POST: '/posts/:id', // PUT
  DELETE_BLOG_POST: '/posts/:id', // DELETE
};
