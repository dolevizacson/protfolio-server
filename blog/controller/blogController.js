// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/routesConstants`);

// modules
const express = mods.express;

// services
const BlogService = files.BlogService;

const blogController = express.Router();
const blogService = new BlogService();

// GET
blogController.get(
  routes.readBlogPosts,
  helpers.asyncWrapper(async (req, res, next) => {
    const blogPosts = await blogService.reaAll();
    res.send(blogPosts);
  })
);

// Get
blogController.get(
  routes.readBlogPost,
  helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogService.readOne(id);
    res.send(blogPost);
  })
);

// POST
blogController.post(
  routes.createBlogPost,
  helpers.asyncWrapper(async (req, res, next) => {
    const blogPost = await blogService.create(req.body);
    res.send(blogPost);
  })
);

// PUT
blogController.post(
  routes.updateBlogPost,
  helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogService.update(id, req.body);
    res.send(blogPost);
  })
);

// DELETE
blogController.post(
  routes.deleteBlogPost,
  helpers.asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const blogPost = await blogService.deleteOne(id, req.body);
    res.send(blogPost);
  })
);

module.exports = blogController;
