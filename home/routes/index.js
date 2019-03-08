const express = require('express');
const status = require('http-status-codes');
const mongoose = require('mongoose');

const models = require('../../DB/mongo/models');
const Content = mongoose.model(models.content);
const WorkingOn = mongoose.model(models.workingOn);

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

home.get('/workingon', async (req, res, next) => {
  try {
    const data = await WorkingOn.find();
    if (data) {
      res.json(data);
    }
  } catch (err) {
    console.log(err);
    res.status(status.BAD_REQUEST).end();
  }
});
module.exports = home;
