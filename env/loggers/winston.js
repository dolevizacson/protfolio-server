// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const winston = modules.WINSTON;
modules.WRFS;
const { combine, timestamp, splat, errors, colorize, printf } = winston.format;

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
  const file = new winston.transports.DailyRotateFile({
    filename: 'errors-%DATE%.log',
    dirname: `${appRoot}/logs`,
    maxSize: '1m',
  });

  options = {
    ...options,
    level: 'info',
    transports: [file],
    format: combine(...formatArgs),
  };
} else {
  const console = new winston.transports.Console({});

  options = {
    ...options,
    level: 'debug',
    transports: [console],
    colorize: true,
    format: combine(...formatArgs, colorize({ all: true })),
  };
}

module.exports = winston.createLogger(options);
