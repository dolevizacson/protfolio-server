// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
} = require('../../env/utils/access');

// modules
const express = modules.EXPRESS;
const httpStatus = modules.HTTP_STATUS;

// files
const middleware = require(files.MIDDLEWARE);
const blogPostModel = require(files.BLOG_POST_MODEL);
const BlogPostService = require(files.BLOG_POST_SERVICE);

// constants
const { scopes } = constants.validation;

// services
const blogPostService = new BlogPostService();

// models
const BlogPostModel = functions.helpers.getMongooseModel(blogPostModel);

const blogController = express.Router();

// get active posts list
blogController.get(
  routes.READ_BLOG_POSTS,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const blogPosts = await blogPostService.readAllActive();
    res.send(blogPosts);
  })
);

// get all posts list
blogController.get(
  routes.READ_BLOG_POSTS_ALL,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const blogPosts = await blogPostService.readAll();
    res.send(blogPosts);
  })
);

// get post
blogController.get(
  routes.READ_BLOG_POST,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const blogPost = await blogPostService.readOne(id);
    res.send(blogPost);
  })
);

// post post
blogController.post(
  routes.CREATE_BLOG_POST,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(BlogPostModel, scopes.blogPost.DEFAULT),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const blogPost = await blogPostService.create(req.body);
    res.status(httpStatus.CREATED).send(blogPost);
  })
);

// update post
blogController.put(
  routes.UPDATE_BLOG_POST,
  middleware.auth.isLoggedIn,
  middleware.validation.validate(BlogPostModel, scopes.blogPost.UPDATE),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const blogPost = await blogPostService.update(id, req.body);
    res.send(blogPost);
  })
);

// toggle post
blogController.patch(
  routes.MODIFY_BLOG_POST,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const blogPost = await blogPostService.toggle(id);
    res.send(blogPost);
  })
);

// delete post
blogController.delete(
  routes.DELETE_BLOG_POST,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const blogPost = await blogPostService.deleteOne(id);
    res.send(blogPost);
  })
);

module.exports = blogController;
