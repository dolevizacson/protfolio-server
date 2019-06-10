// initialization
const { modules, files, functions, routes } = require('../utils/access');

// modules
const sessions = modules.SESSIONS;
const mongoStore = modules.MONGO_STORE(sessions);
const mongoose = modules.MONGOOSE;

const optios = {
  name: process.env.SESSIONS_COOKIE_NAME,
  secret: process.env.SESSIONS_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    httpOnly: true,
    //secure: process.env.NODE_ENV === 'production', // use when tls in enabled
    maxAge: parseInt(process.env.SESSIONS_COOKIE_LIFE_TIME) * 1000, // 3 days
  },
  store: new mongoStore({
    mongooseConnection: mongoose.connection,
    touchAfter: parseInt(process.env.SESSIONS_COOKIE_TOUCH), // 1 day
    ttl: parseInt(process.env.SESSIONS_COOKIE_LIFE_TIME), // 3 days
  }),
};

module.exports = sessions(optios);
