const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);

// modules
const winston = mods.winston;
const wrfs = winston.wrfs;
const { combine, timestamp, splat, errors, colorize, printf } = winston.format;

const file = new winston.transports.DailyRotateFile({
  filename: 'errors-%DATE%.log',
  dirname: `${appRoot}/logs`,
  maxSize: '1m',
});

const console = new winston.transports.Console({});

const printFunction = data => {
  return JSON.stringify(
    data,
    (key, value) => {
      if (key === 'stack') {
        let stackTrace = value.split('\n');
        stackTrace.shift();
        return stackTrace;
      } else {
        return value;
      }
    },
    ' '
  );
};

const formatArgs = [
  timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  errors({ stack: true }),
  splat(),
  printf(printFunction),
];

let options = {
  exitOnError: false,
};

if (process.env.NODE_ENV === 'production') {
  options = {
    ...options,
    level: 'info',
    transports: [file],
    format: combine(...formatArgs),
  };
} else {
  options = {
    ...options,
    level: 'debug',
    transports: [console],
    colorize: true,
    format: combine(...formatArgs, colorize({ all: true })),
  };
}

module.exports = winston.createLogger(options);
