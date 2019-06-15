// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// files
const blogPostModel = require(files.BLOG_POST_MODEL);

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

// models
const BlogPostModel = functions.helpers.getMongooseModel(blogPostModel);

module.exports = class BlogPostService {
  async readAll() {
    const blogPosts = await BlogPostModel.find({ active: true });
    if (!blogPosts) {
      throw new NotFoundInDatabaseError('No posts in database');
    } else {
      return blogPosts;
    }
  }

  async readOne(id) {
    const blogPost = await BlogPostModel.findOne({ _id: id, active: true });
    if (!blogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return blogPost;
    }
  }

  async create(blogPost) {
    return await BlogPostModel.create(blogPost);
  }

  async update(id, blogPost) {
    const updatedBlogPost = await BlogPostModel.findOneAndUpdate(
      { _id: id, active: true },
      blogPost,
      { new: true }
    );
    if (!updatedBlogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return updatedBlogPost;
    }
  }

  async deleteOne(id) {
    const deletedBlogPost = await BlogPostModel.findOneAndUpdate(
      { _id: id },
      { active: false }
    );
    if (!deletedBlogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return deletedBlogPost;
    }
  }
};
