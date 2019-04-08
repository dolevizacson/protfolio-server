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
  routes.posts,
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await BlogPost.find({ active: true });
    if (data) {
      res.json(data);
    } else {
      res.status(status.NOT_FOUND).end();
    }
  })
);

blog.get(
  routes.readBlogPost,
  helpers.asyncWrapper(async (req, res, next) => {
    if (!req.body.id) {
      res.status(status.BAD_REQUEST).end();
    } else {
      const data = await BlogPost.findOne({ active: true });
      if (data) {
        res.json(data);
      } else {
        res.status(status.NOT_FOUND).end();
      }
    }
  })
);

module.exports = blog;
