// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);
const helpers = require(`${appRoot}/env/functions/helpers`);

// modules
const mongoose = modules.MONGOOSE;

//files
const homeContentModel = require(files.HOME_CONTENT_MODEL);
const homeWorkingOnModel = require(files.HOME_WORKING_ON_MODEL);
const skillsListModel = require(files.SKILLS_LIST_MODEL);

const HomeContentModel = mongoose.model(models.homeContentModel);
const HomeWorkingOnModel = mongoose.model(models.homeWorkingOnModel);
const SkillsListModel = mongoose.model(models.skillsListModel);

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

const skillsList = [
  {
    topic: 'Front-End',
    image: '/frontendImage.png',
    stack: [
      {
        language: 'JavaScript',
        icon: 'js-square',
        longData: [
          'stuff about java script',
          'more stuff about java script',
          'more stuff about java script',
        ],
      },
      {
        language: 'React',
        icon: 'react',
        longData: [
          'stuff about react',
          'more stuff about react',
          'more stuff about react',
        ],
      },
    ],
  },
  {
    topic: 'Back-End',
    image: '/backendImage.png',
    stack: [
      {
        language: 'Java',
        icon: 'java',
        longData: [
          'stuff about java',
          'more stuff about java',
          'more stuff about java',
        ],
      },
      {
        language: 'node js',
        icon: 'node',
        longData: [
          'stuff about node js',
          'more stuff about node js',
          'more stuff about node js',
        ],
      },
    ],
  },
];

module.exports = async () => {
  try {
    let data = await HomeContentModel.findOne(about);
    if (!data) {
      new Content(about).save();
    }

    data = await HomeContentModel.findOne(moto);
    if (!data) {
      new Content(moto).save();
    }

    workingOn.map(async task => {
      data = await HomeWorkingOnModel.findOne(task);
      if (!data) {
        new WorkingOn(task).save();
      }
    });

    skillsList.map(async skill => {
      data = await SkillsListModel.findOne(skill);
      console.log(data);
      if (!data) {
        new SkillsList(skill).save();
      }
    });
  } catch (err) {
    console.log(err);
  }
};
