const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);

// modules
const express = mods.express;
const path = mods.path;
const status = mods.httpStatus;

// files
const morgan = require(files.morgan);
const mongo = require(files.mongo);
const winston = require(files.winston);

const home = require(files.home);
const skills = require(files.skills);

const middleware = require(files.middleware);
const errorHandlers = require(files.errorHandlers);

const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(mongo);
app.use(morgan);
app.use(middleware.checkCors());

// routes
app.use('/home', home);
app.use('/skills', skills);

// error handlers
app.use(errorHandlers.finalErrorHandler);

app.get('*', (req, res, next) => {
  res
    .status(status.NOT_FOUND)
    .json({ error: 'Bad Endpoint' })
    .end();
});

module.exports = app;
