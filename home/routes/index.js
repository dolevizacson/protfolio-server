const express = require('express');
const status = require('http-status-codes');
const mongoose = require('mongoose');
const appRoot = require('app-root-path');

const { asyncWrapper } = require(appRoot + '/helpers');
const models = require('../../DB/mongo/models');
const Content = mongoose.model(models.content);
const WorkingOn = mongoose.model(models.workingOn);

const home = express.Router();

home.get(
  '/about',
  asyncWrapper(async (req, res, next) => {
    const data = await Content.findOne({ name: 'about' });
    throw new Error();
    if (data) {
      res.json(data.content);
    }
    res.status(status.BAD_REQUEST).end();
  })
);

home.get(
  '/moto',
  asyncWrapper(async (req, res, next) => {
    const data = await Content.findOne({ name: 'moto' });
    if (data) {
      res.json(data.content);
    }
    res.status(status.BAD_REQUEST).end();
  })
);

home.get(
  '/workingon',
  asyncWrapper(async (req, res, next) => {
    const data = await WorkingOn.find();
    if (data) {
      res.json(data);
    }
    res.status(status.BAD_REQUEST).end();
  })
);
module.exports = home;
