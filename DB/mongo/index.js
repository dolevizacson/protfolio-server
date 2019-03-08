const mongoose = require('mongoose');

const confing = require('../../config');
require('./models');
require('./initializeDB')();

mongoose.connect(confing.mongoURI, { useNewUrlParser: true });
