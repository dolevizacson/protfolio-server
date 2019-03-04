const mongoose = require('mongoose');
const confing = require(__basedir + '/config');

mongoose.connect(confing.mongoURI, { useNewUrlParser: true });
