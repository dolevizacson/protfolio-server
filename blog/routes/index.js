// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/routesConstants`);

// modules
const express = mods.express;
const status = mods.httpStatus;
const mongoose = mods.mongoose;

// files
const models = require(files.models);
const middleware = require(files.middleware);

// models
const BlogPost = mongoose.model(models.blogPost);

const blog = express.Router();

blog.get(
  routes.readBlogPosts,
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await BlogPost.find({ active: true });
    if (data) {
      res.json(data);
    } else {
      res.status(status.NOT_FOUND).end();
    }
  })
);

blog.post(
  routes.createBlogPost,
  middleware.isLoggedIn,
  helpers.asyncWrapper(async (req, res, next) => {
    const blogPost = await BlogPost.create(req.body);
    if (blogPost) {
      res.json(blogPost);
    } else {
      res.status(status.UNPROCESSABLE_ENTITY).end();
    }
  })
);

blog.get(
  routes.readBlogPost,
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await BlogPost.findById(req.params.id);
    if (data) {
      res.json(data);
    } else {
      res.status(status.NOT_FOUND).end();
    }
  })
);

blog.put(
  routes.readBlogPost,
  middleware.isLoggedIn,
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await BlogPost.findByIdAndUpdate(req.params.id, req.body);
    if (data) {
      res.json(data);
    } else {
      res.status(status.NOT_FOUND).end();
    }
  })
);

blog.delete(
  routes.readBlogPost,
  middleware.isLoggedIn,
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await BlogPost.findByIdAndUpdate(req.params.id, {
      active: false,
    });
    if (data) {
      res.json(data);
    } else {
      res.status(status.NOT_FOUND).end();
    }
  })
);

module.exports = blog;
