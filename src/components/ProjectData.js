const ProjectData = [
  { 
    projectId: 'personal-website-card',
    url: 'personal-website',
    video: require('../videos/jumbotron-videos/personal-website.mp4'),
    title: 'Personal Website',
    desc: 'What you\'re looking at now. Built in a week, consistently maintained. This is my personal website which I created, for fun and to learn, using React, EmailJS and multiple UI libraries.',
    icons: ['react', 'html5', 'sass', 'bootstrap', 'adobe', 'git-alt', 'github'],
    slides: null,
    lessons: ['React, Sass, Bootstrap/Reactstrap, Andt, EmailJs', 'Hand Drawn Effect in Illustrator', 'How to deploy a React project to github pages without losing all my work (Note to self: Don\'t git pull when you don\'t know what you\'re pulling)'],
    contributions: null,
    github: 'https://github.com/sunnyfeng17/sunnyfeng17.github.io', // Make public before deploying
    website: 'https://www.sunnyfeng.co.nz',
    mockup: require('../images/mockups/personal-website.jpg')
  },
  { 
    projectId: 'tetris-card', 
    url: 'tetris',
    video: require('../videos/jumbotron-videos/tetris.mp4'), 
    title: 'Tetris', 
    desc: 'A simple vanilla JavaScript, HTML and CSS Tetris game which I created following a tutorial, whilst adding my own features and design.',
    icons: ['js-square', 'html5', 'css3-alt'],
    slides: null,
    lessons: ['How to create a game using just JS, HTML and CSS'],
    contributions: null,
    github: 'https://github.com/sunnyfeng17/tetris',
    website: 'https://sunnyfeng.co.nz/tetris',
    mockup: null
  },
  { 
    projectId: 'learnfromakiwi-card', 
    url: 'learnfromakiwi', 
    video: require('../videos/jumbotron-videos/learnfromakiwi.mp4'),    
    title: 'LearnFromA.Kiwi', 
    desc: 'A platform that allows kiwis to host and attend live, interactive video classes recreating the in-person lessons experience by allowing real time feedback from instructions and social interactions between participants. This was created over 2 days during the Aotearoa Online Startup Weekend, following the theme \'Developing solutions that directly tackle COVID-19-related challenges\'. I worked alongside 6 other individuals from different disciplines to develop potential solutions to build learning communities and create meaningful online connections during COVID-19. Together we discussed the idea and then I worked with a designer and another developer, to build a simple prototype, while the rest of the group validated the idea and did market research.',
    icons: ['react', 'html5', 'css3-alt', 'trello', 'git-alt', 'github'],
    slides: require('../videos/project-slides/learnfromakiwi.mp4'),
    lessons: ['How to use git collaboratively', 'Market validation', 'Trello, Miro'],
    contributions: ['I mainly worked on the MVP, I created the Landing, Explore Timetables and the Instructor Page'],
    github: 'https://github.com/rtan265/learnFromAKiwi',
    website: 'https://learnfromakiwi.github.io',
    mockup: require('../images/mockups/learnfromakiwi.jpg')
  },
  { 
    projectId: 'money-busters-card', 
    url: 'money-busters',
    video: '', //temp
    title: 'Money Busters', 
    desc: 'A webapp to manage student finances. This was created over 2 days during Summer of Tech\'s Camp 2019. I worked with 3 developers, a designer and a mentor to develop a webapp to manage student finances. Users are prompted to enter their expenses and income, then they are able to view their spending allowance. The webapp integrated the Pocket Smith API and was deployed on Heroku.',
    icons: ['node-js', 'html5', 'css3-alt'],
    slides: require('../videos/project-slides/money-busters.mp4'),
    lessons: ['Node.js', 'Client side validation', 'How to use git collaboratively'],
    contributions: ['I mainly worked on the front-end of the webapp'],
    github: 'https://github.com/sunnyfeng17/MoneyBusters',
    website: null,
    mockup: require('../images/mockups/money-busters.jpg')
  },
  { 
    projectId: 'scammr-card', 
    url: 'scammr',
    video: '', //temp   
    title: 'Scammr',
    desc: 'An android app that detects scam calls. This was created over 2 days during the Dev\'s 2019 48 Hour Hackathon, with the theme \'Build your own startup\'. I worked with 3 students to develop an android app to detect whether an incoming call is a scam or not, by using keyword detection to generate a risk score and alerting the user through phone vibrations.',
    icons: ['android', 'java'],
    slides: require('../videos/project-slides/scammr.mp4'),
    lessons: ['How to create an android app using Android Studio'],
    contributions: ['I mainly worked on the front-end of the app', 'Presenting the idea and MVP in front of the judges'],
    github: null,
    website: null,
    mockup: null
  },
  { 
    projectId: 'task-manager-card', 
    url: 'task-manager', 
    video: '', //temp  
    title: 'Task Manager',  
    desc: 'Lo-fi and hi-fi prototype of a task management system to help groups work efficiently. This was created for a group assignment for COMPSCI 345 (Human Computer Interactions). I worked with 3 students to create a lo-fi and hi-fi prototypes, before creating a vanilla HTML/CSS and JS website.',
    icons: ['js-square', 'html5', 'css3-alt'],
    slides: null,
    lessons: ['Lo-fi and Hi-fi prototyping', 'UI/UX principles', 'How to do a heuristic evaluation', 'Usability Testing', 'Stakeholder maps', 'User stories', 'Personas', 'Affinity mapping', 'Balsamiq'],
    contributions: null,
    github: null,
    website: null,
    mockup: require('../images/mockups/task-manager.jpg')
  },
  { 
    projectId: 'eventigate-card', 
    url: 'eventigate', 
    video: '', //temp    
    title: 'Eventigate', 
    desc: 'A platform to help connect locations, individuals and volunteering groups. This was created over 2 days during the AUCS x KPMG 2019 Hackathon, with the theme \'Improving interactions within local communities through tech\'. I worked with 3 students to develop a website to allow locations to easily host events, volunteering groups to easily find locations and individuals to easily find groups. This also won the \'Best Presentation\' award at the Hackathon.',
    icons: ['html5', 'css3-alt'],
    slides: require('../videos/project-slides/eventigate.mp4'),
    lessons: null,
    contributions: ['I mainly worked on the frontend / design of the website', 'Presenting the idea and MVP in front of the judges'],
    github: 'https://github.com/KimberleyEvans-Parker/Eventigate',
    website: null,
    mockup: require('../images/mockups/eventigate.jpg'),
  }/*,
  { 
    projectId: 'moving-shapes-card', 
    url: 'moving-shapes',
    video: '', //temp    
    title: 'Moving Shapes', 
    desc: 'A java program which generated shapes of different colours and sizes upon mouse click.',
    icons: ['java'],
    slides: null,
    lessons: null,
    contributions: null,
    github: null,
    website: null,
    mockup: null
  }
  */
]

export default ProjectData;