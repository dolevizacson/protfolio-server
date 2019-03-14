const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const express = mods.express;
const status = mods.httpStatus;
const mongoose = mods.mongoose;

//files
const models = require(files.models);
const Content = mongoose.model(models.content);
const WorkingOn = mongoose.model(models.workingOn);

const home = express.Router();

home.get(
  '/about',
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await Content.findOne({ name: 'about' });
    if (data) {
      res.json(data.content);
    }
    res.status(status.BAD_REQUEST).end();
  })
);

home.get(
  '/moto',
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await Content.findOne({ name: 'moto' });
    if (data) {
      res.json(data.content);
    }
    res.status(status.BAD_REQUEST).end();
  })
);

home.get(
  '/workingon',
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await WorkingOn.find();
    if (data) {
      res.json(data);
    }
    res.status(status.BAD_REQUEST).end();
  })
);
module.exports = home;
