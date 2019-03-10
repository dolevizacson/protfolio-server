const express = require('express');
const path = require('path');

const morgan = require('./loggers/morgan');

require('./DB/mongo');

const home = require('./home/routes');
const skills = require('./skills/routes');

const middleware = require('./middleware');

const app = express();

app.use(morgan);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(middleware.checkCors());

app.use('/home', home);
app.use('/skills', skills);

module.exports = app;
