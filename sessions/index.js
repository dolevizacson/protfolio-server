// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// mods
const sessions = mods.sessions;
const mongoStore = mods.mongoStore(sessions);
const mongoose = mods.mongoose;

// files
const config = require(files.config);

const optios = {
  saveUninitialized: true,
  resave: false,
  secret: config.sessionsSecret,
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
