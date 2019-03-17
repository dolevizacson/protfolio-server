const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);

//modules
const morgan = mods.morgan;
const path = mods.path;
const rfs = mods.rfs;

if (process.env.NODE_ENV === 'production') {
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
