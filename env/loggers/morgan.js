// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

//modules
const morgan = modules.MORGAN;
const path = modules.PATH;
const rfs = modules.RFS;

if (process.env.NODE_ENV === 'production') {
  const options = {
    skip: function(req, res) {
      return res.statusCode < 400;
    },
  };

  try {
    const logStream = rfs(
      (time, index) => {
        const date = new Date();
        const currentDate = `${date.getFullYear()}-${date.getMonth() +
          1}-${date.getDate()}`;
        return `http-${currentDate}.log`;
      },
      {
        size: '1M',
        path: path.join(appRoot.toString(), 'logs'),
      }
    );
    module.exports = morgan('common', { ...options, stream: logStream });
  } catch (err) {
    console.log('No HTTP logs: ' + err);
    module.exports = morgan('dev', {
      ...options,
      stream: process.stderr,
    });
  }
} else {
  module.exports = morgan('dev');
}
