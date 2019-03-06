const express = require('express');
const content = require('../content/homePageContent');
const status = require('http-status-codes');
const mongoose = require('mongoose');
require('../models/contentModel');
const Content = mongoose.model('content');

const home = express.Router();

home.get('/about', async (req, res, next) => {
  try {
    const data = await Content.findOne({ name: 'about' });
    if (data) {
      res.json(data.content);
    }
  } catch (err) {
    console.log(err);
    res.status(status.BAD_REQUEST).end();
  }
});

home.get('/moto', async (req, res, next) => {
  try {
    const data = await Content.findOne({ name: 'moto' });
    if (data) {
      res.json(data.content);
    }
  } catch (err) {
    console.log(err);
    res.status(status.BAD_REQUEST).end();
  }
});

home.get('/workingon', (req, res, next) => {
  res.json(content.home.workingOn);
});
module.exports = home;
