const express = require('express');
const path = require('path');

const morgan = require('./loggers/morgan');

const mongo = require('./DB/mongo');

const home = require('./home/routes');
const skills = require('./skills/routes');

const middleware = require('./middleware');

const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(mongo);
app.use(morgan);
app.use(middleware.checkCors());

app.use('/home', home);
app.use('/skills', skills);

// error handlers
app.use(middleware.errorHandler);

module.exports = app;
