// initialization
const { modules, files, functions, routes } = require('../utils/access');

// modules
const sessions = modules.SESSIONS;
const mongoStore = modules.MONGO_STORE(sessions);
const mongoose = modules.MONGOOSE;

const optios = {
  saveUninitialized: true,
  resave: false,
  secret: process.env.SESSIONS_SECRET,
  cookie: {
    httpOnly: true,
    maxAge: 24 * 3600 * 3, // 3 days
  },
  store: new mongoStore({
    mongooseConnection: mongoose.connection,
    touchAfter: 24 * 3600, // 1 day
  }),
};

module.exports = sessions(optios);
