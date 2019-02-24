const express = require('express');
const path = require('path');

const home = require('./home/routes');
const skills = require('./skills/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', home);
app.use('/skills', skills);

module.exports = app;
