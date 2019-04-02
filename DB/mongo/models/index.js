// initialization
const appRoot = require('app-root-path');
const mods = require(`${appRoot}/env/modules/packages`);
const files = require(`${appRoot}/env/modules/files`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// files
const content = require(files.content);
const skillsList = require(files.skillsList);
const user = require(files.user);
const workingOn = require(files.workingOn);

module.exports = {
  content,
  workingOn,
  skillsList,
  user,
};
