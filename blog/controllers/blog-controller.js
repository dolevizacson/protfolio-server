// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
  classes,
} = require('../../env/utils/access');

// files
const BlogPostModel = require(files.BLOG_POST_MODEL);
const BlogPostService = require(files.BLOG_POST_SERVICE);

// constants
const { blogPost: blogPostValidation } = constants.validation.scopes;

// classes
const Controller = classes.Controller;

// models
const blogPostModel = functions.helpers.getMongooseModel(BlogPostModel);

// services
const blogPostService = new BlogPostService();

const blogController = new Controller(
  blogPostService,
  blogPostModel,
  blogPostValidation
);

blogController.getActive();
blogController.getAll();
blogController.getOne();
blogController.post();
blogController.update();
blogController.toggle();
blogController.delete();

module.exports = blogController.getRouter();
