// initialization
const { modules, files, functions, routes } = require('../utils/access');

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
  const errorsFilesOptions = {
    dirname: `${appRoot}/logs`,
    maxSize: '1m',
    maxFiles: '1',
  };

  const file = new winston.transports.DailyRotateFile({
    ...errorsFilesOptions,
    filename: 'errors.log',
  });

  const exceptionFile = new winston.transports.DailyRotateFile({
    ...errorsFilesOptions,
    filename: 'exception.log',
  });

  options = {
    ...options,
    level: 'info',
    transports: [file],
    exceptionHandlers: [exceptionFile],
    format: combine(...formatArgs),
  };
} else {
  const console = new winston.transports.Console({ handleExceptions: true });

  options = {
    ...options,
    level: 'debug',
    transports: [console],
    format: combine(...formatArgs, colorize({ all: true })),
  };
}

module.exports = winston.createLogger(options);
