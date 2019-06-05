// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const express = modules.EXPRESS;
const httpStatus = modules.HTTP_STATUS;

// files
const middleware = require(files.MIDDLEWARE);

// services
const BlogPostService = require(files.BLOG_POST_SERVICE);
const blogPostService = new BlogPostService();

const blogController = express.Router();

// GET
blogController.get(
  routes.READ_BLOG_POSTS,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const blogPosts = await blogPostService.readAll();
    res.send(blogPosts);
  })
);

// Get
blogController.get(
  routes.READ_BLOG_POST,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogPostService.readOne(id);
    res.send(blogPost);
  })
);

// POST
blogController.post(
  routes.CREATE_BLOG_POST,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const blogPost = await blogPostService.create(req.body);
    res.status(httpStatus.CREATED).send(blogPost);
  })
);

// PUT
blogController.put(
  routes.UPDATE_BLOG_POST,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogPostService.update(id, req.body);
    res.send(blogPost);
  })
);

// DELETE
blogController.delete(
  routes.DELETE_BLOG_POST,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogPostService.deleteOne(id);
    res.send(blogPost);
  })
);

module.exports = blogController;
