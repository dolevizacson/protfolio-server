// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

// files
const blogPostModel = require(files.BLOG_POST_MODEL);

// errors
const NotFoundInDatabaseError = require(files.NOT_FOUND_IN_DATABASE_ERROR);

// models
const BlogPostModel = functions.helpers.getMongooseModel(blogPostModel);

module.exports = class BlogPostService {
  async readAllActive() {
    const blogPosts = await BlogPostModel.find({ active: true });
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
    const blogPosts = await BlogPostModel.find();
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
    if (blogPost.update) {
      delete blogPost.update;
    }
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

  async toggle(id) {
    const toggledBlogPost = await BlogPostModel.findOneAndUpdate(
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
    const deletedBlogPost = await BlogPostModel.findOneAndDelete({ _id: id });
    if (!deletedBlogPost) {
      throw new NotFoundInDatabaseError('Post not found in database');
    } else {
      return deletedBlogPost;
    }
  }
};
