const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const express = mods.express;
const status = mods.httpStatus;
const mongoose = mods.mongoose;

// files
const models = require(files.models);
const SkillsList = mongoose.model(models.skillsList);

const skills = express.Router();

skills.get(
  '/skillslist',
  helpers.asyncWrapper(async (req, res, next) => {
    const data = await SkillsList.find();
    if (data) {
      res.json(data);
    }
    res.status(status.BAD_REQUEST).end();
  })
);

module.exports = skills;
