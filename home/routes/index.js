const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/routesConstants`);

// modules
const express = mods.express;
const status = mods.httpStatus;
const mongoose = mods.mongoose;

//files
const models = require(files.models);

// models
const Content = mongoose.model(models.content);
const WorkingOn = mongoose.model(models.workingOn);

const home = express.Router();

home.get(
  routes.about,
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await Content.findOne({ name: 'about' });
    if (data) {
      res.json(data.content);
    } else {
      res.status(status.NOT_FOUND).end();
    }
  })
);

home.get(
  routes.moto,
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await Content.findOne({ name: 'moto' });
    if (data) {
      res.json(data.content);
    } else {
      res.status(status.NOT_FOUND).end();
    }
  })
);

home.get(
  routes.workingOn,
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await WorkingOn.find();
    if (data) {
      res.json(data);
    } else {
      res.status(status.NOT_FOUND).end();
    }
  })
);
module.exports = home;
