const content = {
  home: {
    about:
      'Full Stack developer, biotechnology engineer, love to learn and understand how things work. Love to create and design my own projects',
    moto: 'Try to find moments to laugh, even in bad times',
    workingOn: [
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
    ],
  },
  skills: {
    skillsList: [
      {
        key: 1,
        topic: 'Front-End',
        image: '/frontendImage.png',
        stack: [
          {
            key: 11,
            language: 'JavaScript',
            icon: 'js-square',
            longData: [
              'stuff about java script',
              'more stuff about java script',
              'more stuff about java script',
            ],
          },
          {
            key: 12,
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
        key: 2,
        topic: 'Back-End',
        image: '/backendImage.png',
        stack: [
          {
            key: 21,
            language: 'Java',
            icon: 'java',
            longData: [
              'stuff about java',
              'more stuff about java',
              'more stuff about java',
            ],
          },
          {
            key: 22,
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
    ],
    isHidden: true,
  },
};

export default content;
