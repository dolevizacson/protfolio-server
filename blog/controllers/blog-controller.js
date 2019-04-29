// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/constants/routes`);

// modules
const express = modules.EXPRESS;

// services
const BlogPostService = files.BLOG_POST_SERVICE;
const blogPostService = new BlogPostService();

const blogController = express.Router();

// GET
blogController.get(
  routes.READ_BLOG_POSTS,
  helpers.asyncWrapper(async (req, res, next) => {
    const blogPosts = await blogPostService.readAll();
    res.send(blogPosts);
  })
);

// Get
blogController.get(
  routes.READ_BLOG_POST,
  helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogPostService.readOne(id);
    res.send(blogPost);
  })
);

// POST
blogController.post(
  routes.CREATE_BLOG_POST,
  helpers.asyncWrapper(async (req, res, next) => {
    const blogPost = await blogPostService.create(req.body);
    res.send(blogPost);
  })
);

// PUT
blogController.post(
  routes.UPDATE_BLOG_POST,
  helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogPostService.update(id, req.body);
    res.send(blogPost);
  })
);

// DELETE
blogController.post(
  routes.DELETE_BLOG_POST,
  helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogPostService.deleteOne(id, req.body);
    res.send(blogPost);
  })
);

module.exports = blogController;
