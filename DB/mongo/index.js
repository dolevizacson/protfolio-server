const mongoose = require('mongoose');
const confing = require(__basedir + '/config');
const { Schema } = mongoose;

mongoose.connect(confing.mongoURI, { useNewUrlParser: true });

const contentSchema = new Schema(
  {
    name: String,
    content: String,
  },
  { collection: 'content' }
);

mongoose.model('data', contentSchema);

// how to add collections
/* const Content = mongoose.model('data');

new Content({
  name: 'about',
  content:
    'Full Stack developer, biotechnology engineer, love to learn and understand how things work. Love to create and design my own projects',
}).save();
 */
