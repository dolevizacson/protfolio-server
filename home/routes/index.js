const express = require('express');
const content = require('../content/homePageContent');

const router = express.Router();

router.get('/about', (req, res, next) => {
  res.json(content.home.about);
});

router.get('/moto', (req, res, next) => {
  res.json(content.home.moto);
});

router.get('/workingon', (req, res, next) => {
  res.json(content.home.workingOn);
});
module.exports = router;
