module.exports = class BlogService {
  async readAll() {
    const data = await BlogPost.find({ active: true });
    return data;
  }

  async readOne(id) {}

  async create(blogPost) {}

  async update(id, blogPost) {}

  async deleteOne(id) {}
};
