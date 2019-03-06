const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema(
  {
    name: String,
    content: String,
  },
  { collection: 'content' }
);

mongoose.model('content', contentSchema);
