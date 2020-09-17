// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
} = require('../../env/utils/access');

// modules
const mongoose = modules.MONGOOSE;

const { Schema } = mongoose;

const baseSchema = new Schema({
  active: { type: Number, default: 1 },
  date: { type: Date, default: Date.now() },
  update: { type: Date, default: Date.now() },
});

module.exports = baseSchema;
