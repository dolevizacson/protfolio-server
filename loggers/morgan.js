const morgan = require('morgan');
const path = require('path');
const appRoot = require('app-root-path');
const rfs = require('rotating-file-stream');

if (process.env.NODE_ENV === 'production') {
  try {
    const logStream = rfs('http.log', {
      size: '1M',
      path: path.join(appRoot.toString(), 'logs'),
    });
    module.exports = morgan('common', { stream: logStream });
  } catch (err) {
    console.log('No HTTP logs: ' + err);
    module.exports = morgan('dev', {
      skip: function(req, res) {
        return res.statusCode < 400;
      },
      stream: process.stderr,
    });
  }
} else {
  module.exports = morgan('dev');
}
