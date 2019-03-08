const express = require('express');
const status = require('http-status-codes');
const mongoose = require('mongoose');

const content = require('../content/skillsPageContent');

const models = require('../../DB/mongo/models');
const SkillsList = mongoose.model(models.skillsList);
//const Content = mongoose.model(models.skillsList);
const skills = express.Router();

skills.get('/skillslist', async (req, res, next) => {
  try {
    const data = await SkillsList.find();
    if (data) {
      res.json(data);
    }
  } catch (err) {
    console.log(err);
    res.status(status.BAD_REQUEST).end();
  }
});

module.exports = skills;
