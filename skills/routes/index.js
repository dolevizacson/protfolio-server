const express = require('express');
const content = require('../content/skillsPageContent');

const router = express.Router();

router.get('/skillsList', (req, res, next) => {
  res.json(content.skills.skillsList);
});

module.exports = router;
