const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);

// modules
const winston = mods.winston;
const wrfs = winston.wrfs;
const { combine, timestamp, prettyPrint, errors, simple } = winston.format;

let options = {
  exitOnError: false,
};

const file = new winston.transports.DailyRotateFile({
  filename: 'errors-%DATE%.log',
  dirname: `${appRoot}/logs`,
  maxSize: '1m',
});

const console = new winston.transports.Console({});

if (process.env.NODE_ENV === 'production') {
  options = { ...options, level: 'info', transports: [file] };
} else {
  options = {
    ...options,
    level: 'debug',
    colorize: true,
    transports: [console],
    format: prettyPrint(),
  };
}

module.exports = winston.createLogger(options);
