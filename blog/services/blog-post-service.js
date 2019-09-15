// initialization
const {
  modules,
  files,
  functions,
  routes,
  classes,
} = require('../../env/utils/access');

// files
const BlogPostModel = require(files.BLOG_POST_MODEL);

// classes
const DBcrud = classes.DBcrud;

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

// models
const blogPostModel = functions.helpers.getMongooseModel(BlogPostModel);

module.exports = class BlogPostService extends DBcrud {
  constructor() {
    super(blogPostModel);
  }
};
