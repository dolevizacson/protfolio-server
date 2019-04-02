// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);
const routes = require(`${appRoot}/env/routesConstants`);

// modules
const express = mods.express;
const status = mods.httpStatus;
const mongoose = mods.mongoose;

// files
const models = require(files.models);

// models
const User = mongoose.model(models.user);

const auth = express.Router();

module.exports = auth;
