// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const mongoose = modules.MONGOOSE;

// files
const blogPostModel = require(files.BLOG_POST_MODEL);

const BlogPostModel = mongoose.model(blogPostModel);

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
    const blogPost = await BlogPostModel.findOne({ id: id, active: true });
    if (!blogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return blogPost;
    }
  }

  async create(blogPost) {
    return await BlogPost.create(blogPost);
  }

  async update(id, blogPost) {
    const updatedBlogPost = await BlogPostModel.findOneAndUpdate(
      { id: id, active: true },
      blogPost
    );
    if (!updatedBlogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return updatedBlogPost;
    }
  }

  async deleteOne(id) {
    const deletedBlogPost = await BlogPostModel.findOneAndUpdate(
      { id: id },
      { active: false }
    );
    if (!deletedBlogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return deletedBlogPost;
    }
  }
};
