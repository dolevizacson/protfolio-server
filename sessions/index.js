// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const sessions = mods.sessions;
const mongoStore = mods.mongoStore(sessions);
const mongoose = mods.mongoose;

const optios = {
  saveUninitialized: true,
  resave: false,
  secret: process.env.SESSIONS_SECRET,
  cookie: {
    httpOnly: true,
    maxAge: 604800000, // 7 days
  },
  store: new mongoStore({
    mongooseConnection: mongoose.connection,
    touchAfter: 24 * 3600, // 1 day
  }),
};

module.exports = sessions(optios);
