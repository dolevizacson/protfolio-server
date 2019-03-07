const mongoose = require('mongoose');
const confing = require(__basedir + '/config');
require('./models');
require('./initializeDB')();

mongoose.connect(confing.mongoURI, { useNewUrlParser: true });

// how to add collections
/* const Content = mongoose.model('data');

new Content({
  name: 'about',
  content:
    'Full Stack developer, biotechnology engineer, love to learn and understand how things work. Love to create and design my own projects',
}).save();
 */
