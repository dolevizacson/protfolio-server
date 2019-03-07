const mongoose = require('mongoose');
const models = require('./models');

const Content = mongoose.model(models.content);
const WorkingOn = mongoose.model(models.workingOn);

const about = {
  name: 'about',
  content:
    'Full Stack developer, biotechnology engineer, love to learn and understand how things work. Love to create and design my own projects',
};

const moto = {
  name: 'moto',
  content: 'Try to find moments to laugh, even in bad times',
};

const workingOn = [
  {
    header: "What i'am working on1",
    description:
      'Explantion about the project and what needs to be accomplished',
    isDone: true,
  },
  {
    header: "What i'am working on2",
    description:
      'Explantion about the project and what needs to be accomplished',
    isDone: false,
  },
];

module.exports = async () => {
  try {
    let data = await Content.findOne(about);
    if (!data) {
      new Content(about).save();
    }

    data = await Content.findOne(moto);
    if (!data) {
      new Content(moto).save();
    }

    workingOn.map(async task => {
      data = await WorkingOn.find(task);
      if (data.length === 0) {
        new WorkingOn(task).save();
      }
    });
  } catch (err) {
    console.log(err);
  }
};
