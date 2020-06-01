const ProjectData = [
  { 
    projectId: 'personal-website-card',
    url: 'personal-website',
    video: require('../videos/jumbotron-videos/personal-website.mp4'),
    title: 'Personal Website',
    desc: 'My personal website which I created, for fun and to learn, using React, EmailJS and multiple UI libraries.',
    icons: ['react', 'html5', 'sass', 'bootstrap', 'adobe', 'git-alt', 'github'],
    displaySlides: false,
    slides: '',
    displayLessons: true,
    lessons: ['React, Sass, Bootstrap/Reactstrap, Andt, EmailJs', 'Hand Drawn Effect in Illustrator', 'How to deploy a React project to github pages without losing all my work (Note to self: Don\'t git pull when you don\'t know what you\'re pulling)', 'Custom Domain'],
    displayContributions: false,
    contributions: [],
    github: true,
    githubLink: 'https://github.com/sunnyfeng17/sunnyfeng17.github.io', // Make public before deploying
    website: true,
    websiteLink: 'https://www.sunnyfeng.co.nz'
  },
  { 
    projectId: 'tetris-card', 
    url: 'tetris',
    video: '', //temp
    title: 'Tetris', 
    desc: 'A vanilla JavaScript, HTML and CSS Tetris game.',
    icons: ['js-square', 'html5', 'css3-alt'],
    displaySlides: false,
    slides: '',
    displayLessons: true,
    lessons: ['How to create a game using just JS, HTML and CSS'],
    displayContributions: false,
    contributions: [],
    github: true,
    githubLink: 'https://github.com/sunnyfeng17/Tetris',
    website: false,
    websiteLink: ''
  },
  { 
    projectId: 'learnfromakiwi-card', 
    url: 'learnfromakiwi', 
    video: require('../videos/jumbotron-videos/learnfromakiwi.mp4'),    
    title: 'LearnFromA.Kiwi', 
    desc: 'A platform that allows kiwis to host and attend live, interactive video classes recreating the in-person lessons experience by allowing real time feedback from instructions and social interactions between participants.',
    icons: ['react', 'html5', 'css3-alt', 'trello', 'git-alt', 'github'],
    theme: 'Developing solutions that directly tackle COVID-19-related challenges',
    displaySlides: true,
    slides: require('../videos/project-slides/learnfromakiwi.mp4'),
    displayLessons: true,
    lessons: ['How to use git collaboratively', 'Market validation', 'Trello, Miro'],
    displayContributions: true,
    contributions: ['I mainly worked on the MVP, I created the Landing, Explore Timetables and the Instructor Page'],
    github: true,
    githubLink: 'https://github.com/rtan265/learnFromAKiwi',
    website: true,
    websiteLink: 'https://www.learnfroma.kiwi'
  },
  { 
    projectId: 'money-busters-card', 
    url: 'money-busters',
    video: '', //temp
    title: 'Money Busters', 
    desc: 'A webapp to manage student finances. Users are prompted to enter their expenses and income, then they are able to view their spending allowance and more.',
    icons: ['node-js', 'html5', 'css3-alt'],
    displaySlides: true,
    slides: require('../videos/project-slides/money-busters.mp4'),
    displayLessons: true,
    lessons: ['Node.js', 'Client side validation', 'How to use git collaboratively'],
    displayContributions: true,
    contributions: ['I mainly worked on the front-end of the webapp'],
    github: true,
    githubLink: 'https://github.com/sunnyfeng17/MoneyBusters',
    website: false,
    websiteLink: ''
  },
  { 
    projectId: 'scammr-card', 
    url: 'scammr',
    video: '', //temp   
    title: 'Scammr',
    desc: 'An android app using keyword detection to generate a risk score, to alert the user through phone vibrations.',
    icons: ['android', 'java'],
    displaySlides: true,
    slides: require('../videos/project-slides/scammr.mp4'),
    displayLessons: true,
    lessons: [''],
    displayContributions: true,
    contributions: ['I mainly worked on the front-end of the app', 'Presenting'],
    github: false,
    githubLink: '',
    website: false,
    websiteLink: ''
  },
  { 
    projectId: 'task-manager-card', 
    url: 'task-manager', 
    video: '', //temp  
    title: 'Task Manager',  
    desc: 'Lo-fi and hi-fi prototype of a task management system to help groups work efficiently.',
    icons: ['js-square', 'html5', 'css3-alt'],
    displaySlides: false,
    slides: '',
    displayLessons: true,
    lessons: ['Lo-fi and Hi-fi prototyping', 'UI/UX principles', 'How to do a heuristic evaluation', 'Usability Testing', 'Stakeholder maps', 'User stories', 'Personas', 'Affinity mapping', 'Balsamiq'],
    displayContributions: false,
    contributions: [],
    github: false,
    githubLink: '',
    website: false,
    websiteLink: ''
  },
  { 
    projectId: 'eventigate-card', 
    url: 'eventigate', 
    video: '', //temp    
    title: 'Eventigate', 
    desc: 'A platform to help connect locations, individuals and volunteering groups.',
    icons: ['html5', 'css3-alt'],
    theme: 'Improving interactions within local communities through tech.',
    displaySlides: true,
    slides: require('../videos/project-slides/eventigate.mp4'),
    displayLessons: false,
    lessons: [],
    displayContributions: true,
    contributions: ['I mainly worked on the frontend / design of the website', 'Presenting'],
    github: true,
    githubLink: 'https://github.com/KimberleyEvans-Parker/Eventigate',
    website: false,
    websiteLink: ''
  },
  { 
    projectId: 'moving-shapes-card', 
    url: 'moving-shapes',
    video: '', //temp    
    title: 'Moving Shapes', 
    desc: 'A java program which generated shapes of different colours and sizes upon mouse click.',
    icons: ['java'],
    displaySlides: false,
    slides: '',
    displayLessons: false,
    lessons: [],
    displayContributions: false,
    contributions: [],
    github: false,
    githubLink: '',
    website: false,
    websiteLink: ''
  }
]

export default ProjectData;