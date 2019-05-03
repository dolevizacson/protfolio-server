// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

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
