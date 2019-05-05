// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// modules
const express = modules.EXPRESS;

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
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const blogPost = await blogPostService.create(req.body);
    res.send(blogPost);
  })
);

// PUT
blogController.post(
  routes.UPDATE_BLOG_POST,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogPostService.update(id, req.body);
    res.send(blogPost);
  })
);

// DELETE
blogController.post(
  routes.DELETE_BLOG_POST,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogPostService.deleteOne(id, req.body);
    res.send(blogPost);
  })
);

module.exports = blogController;
