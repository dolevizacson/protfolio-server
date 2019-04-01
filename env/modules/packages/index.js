module.exports = {
  mongoStore: require('connect-mongo'),
  cors: require('cors'),
  express: require('express'),
  sessions: require('express-session'),
  httpStatus: require('http-status-codes'),
  mongoose: require('mongoose'),
  morgan: require('morgan'),
  path: require('path'),
  rfs: require('rotating-file-stream'),
  winston: require('winston'),
  wrfs: require('winston-daily-rotate-file'),
};
