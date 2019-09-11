// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// files
const BlogPostModel = require(files.BLOG_POST_MODEL);

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

// models
const blogPostModel = functions.helpers.getMongooseModel(BlogPostModel);

module.exports = class BlogPostService {
  async readAllActive() {
    const blogPosts = await blogPostModel.find({ active: true });
    if (!blogPosts) {
      throw new NotFoundInDatabaseError('No posts in database');
    } else {
      blogPosts.map(blogPost => {
        delete blogPost.active;
        return blogPost;
      });
      return blogPosts;
    }
  }

  async readAll() {
    const blogPosts = await blogPostModel.find();
    if (!blogPosts) {
      throw new NotFoundInDatabaseError('No posts in database');
    } else {
      return blogPosts;
    }
  }

  async readOne(id) {
    const blogPost = await blogPostModel.findOne({ _id: id, active: true });
    if (!blogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return blogPost;
    }
  }

  async create(blogPost) {
    return await blogPostModel.create(blogPost);
  }

  async update(id, blogPost) {
    const updatedBlogPost = await blogPostModel.findOneAndUpdate(
      { _id: id, active: true },
      { ...blogPost, update: Date.now() },
      { new: true }
    );
    if (!updatedBlogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return updatedBlogPost;
    }
  }

  async toggle(id) {
    const toggledBlogPost = await blogPostModel.findOneAndUpdate(
      { _id: id },
      {
        $bit: {
          active: { xor: 1 },
        },
      },
      { new: true }
    );
    if (!toggledBlogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return toggledBlogPost;
    }
  }

  async deleteOne(id) {
    const deletedBlogPost = await blogPostModel.findOneAndDelete({ _id: id });
    if (!deletedBlogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return deletedBlogPost;
    }
  }
};
