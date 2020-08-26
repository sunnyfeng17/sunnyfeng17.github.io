const ProjectData = [
  { 
    projectId: 'personal-website-card',
    url: 'personal-website',
    title: 'Personal Website',
    desc: 'What you\'re looking at now. Built-in a week, consistently maintained. This is my personal website which I desiged and developed, for fun and to learn, using React, EmailJS and multiple UI libraries.',
    icons: ['react', 'html5', 'sass', 'bootstrap', 'adobe', 'git-alt', 'github'],
    video: require('../videos/demo-videos/personal-website.mp4'),
    lessons: ['How to use React, Sass, Bootstrap/Reactstrap, Andt, and EmailJs!', 'How to do a Hand Drawn Effect in Illustrator (As seen on my landing page)', 'How to deploy to github pages - including how to deploy a React project to github pages without losing all my work (Note to self: Don\'t git pull when you don\'t know what you\'re pulling)'],
    contributions: null,
    github: 'https://github.com/sunnyfeng17/sunnyfeng17.github.io',
    website: 'https://www.sunnyfeng.co.nz',
    mockup: require('../images/mockups/personal-website.jpg')
  },
  { 
    projectId: 'timeline-card',
    url: 'timeline',
    title: 'Timeline',
    desc: 'Timeline was created over 2 days for the WDCC x AUCS 2020 Hackathon, following the theme \'Improving university experience and student wellbeing\'. I worked with 4 individuals to ideate and create Timeline. Timeline is a website which provides students with a pathway to success by guiding and helping them reach their goals throughout university! By setting goals, Timeline provides a customised and tailored event list, as well as suggestions to make use sure students reach their goals and get their dream jobs!',
    icons: ['react', 'html5', 'css3-alt', 'git-alt', 'github'],
    video: require('../videos/project-slides/timeline.mp4'),
    lessons: ['How to use Next.js, Tailwind CSS!'],
    contributions: ['Front-end development', 'Presentation slides', 'Presenting the idea and MVP in front of the judges'],
    github: 'https://github.com/Pyxxil/WDCC-Hackathon',
    website: 'https://wdcc-hackathon.pyxxil.vercel.app/',
    mockup: null
  },
  { 
    projectId: 'kafe-krayon-card',
    url: 'kafe-krayon',
    title: 'Kafe Krayon',
    desc: 'Kafe Krayon was created over 2 days during Summer of Tech\'s Create Camp 2020, following the theme \'Customer, Cloud and Community\' and the requirement of using one New Zealand API. I worked with 4 developers, a designer and a mentor to develop a website using the Zenbu API and GoogleMaps JavaScript API. Our aim was to help those who have recently returned to New Zealand or are planning on returning due to COVID-19, after living overseas for a prolonged time to find the best cafes and get refamiliarised with local currency. Krayon Kafe is a website that allows users to search for cafes within a location (e.g. Panmure, Ponsonby) and then returns Google Map Markers of the cafes. ',
    icons: ['react', 'html5', 'css3-alt', 'bootstrap', 'node-js', 'git-alt', 'github'],
    video: require('../videos/project-slides/kafe-krayon.mp4'),
    lessons: ['How to deploy using heroku', 'How to use Express and EJS templates'],
    contributions: ['Front-end development', 'User testing', 'Presentation slides'],
    github: 'https://github.com/rtan265/Krayon-Kafe',
    website: 'https://krayon-kafe.herokuapp.com/',
    mockup: null
  },
  { 
    projectId: 'upskill-card',
    url: 'upskill',
    title: 'Upskill',
    desc: 'Upskill was created over 2 days for the Dev\'s 2020 Hackathon, following the theme of \'Isolation and Quarantine\' and was awarded 1st Place! I worked with 5 individuals to ideate and create Upskill! UpSkill is a platform that offers live online lessons that are local with the added opportunity to network, aimed at those who have been made redundant as a result of quarantine and isolation. Our aim is to upskill, reskill and retool learners to help them re-enter the job market!',
    icons: ['react', 'node-js'],
    video: require('../videos/project-slides/upskill.mp4'),
    lessons: ['How to use Figma', 'How to perform a competitor analysis and a business cost analysis'],
    contributions: ['Front-end development and design (wireframes using figma)', 'Presentation slides', 'Market research', 'Competitor analysis', 'Business cost analysis'],
    github: 'https://github.com/rtan265/upskill',
    website: null,
    mockup: null
  },
  { 
    projectId: 'tetris-card', 
    url: 'tetris',
    title: 'Tetris', 
    desc: 'A simple vanilla JavaScript, HTML and CSS Tetris game which I created following a tutorial, whilst adding my own features and design.',
    icons: ['html5', 'css3-alt', 'js-square'],
    video: require('../videos/demo-videos/tetris.mp4'),
    lessons: ['How to create a game using just JS, HTML and CSS'],
    contributions: null,
    github: 'https://github.com/sunnyfeng17/tetris',
    website: 'https://sunnyfeng.co.nz/tetris',
    mockup: null
  },
  { 
    projectId: 'learnfromakiwi-card', 
    url: 'learnfromakiwi', 
    title: 'LearnFromA.Kiwi', 
    desc: 'Learn From A Kiwi was created over 2 days during the Aotearoa Online Startup Weekend, following the theme \'Developing solutions that directly tackle COVID-19-related challenges\'. I worked alongside 6 other individuals from different disciplines to develop potential solutions to build learning communities and create meaningful online connections during COVID-19. Together we discussed the idea and then I worked with a designer and developer, to build a simple prototype, while the rest of the group validated the idea and did market research. Learn From A Kiwi is a platform that allows kiwis to host and attend live, interactive video classes recreating the in-person lessons experience by allowing real-time feedback from instructions and social interactions between participants.',
    icons: ['react', 'html5', 'css3-alt', 'js-square', 'trello', 'git-alt', 'github'],
    video: require('../videos/project-slides/learnfromakiwi.mp4'),
    lessons: ['How to use git collaboratively', 'How to do market validation'],
    contributions: ['Front-end development - I created the Landing, Explore Timetables and the Instructor Page'],
    github: 'https://github.com/rtan265/learnFromAKiwi',
    website: 'https://learnfromakiwi.github.io',
    mockup: require('../images/mockups/learnfromakiwi.jpg')
  },
  { 
    projectId: 'money-busters-card', 
    url: 'money-busters',
    title: 'Money Busters', 
    desc: 'Money Busters was created over 2 days during Summer of Tech\'s Create Camp 2019, with the requirements to use one New Zealand API. I worked with 3 developers, a designer and a mentor to develop a web app to manage student finances which used the Pocket Smith API. Money Busters prompts the users to enter their expenses and income, then allows them to view their spending allowance.',
    icons: ['html5', 'css3-alt', 'node-js'],
    video: require('../videos/project-slides/money-busters.mp4'),
    lessons: ['How to use Node.js, EJS templates, and Express', 'How to perform client side validation', 'How to use git collaboratively'],
    contributions: ['Front-end development'],
    github: 'https://github.com/sunnyfeng17/MoneyBusters',
    website: null,
    mockup: require('../images/mockups/money-busters.jpg')
  },
  { 
    projectId: 'scammr-card', 
    url: 'scammr',
    title: 'Scammr',
    desc: 'Scammr was created over 2 days during the Dev\'s 2019 48 Hour Hackathon, with the theme \'Build your own startup\'. I worked with 3 students to develop an android app to help those susceptible to phone scams. Scammr helps detect whether an incoming call is a scam or not, by using keyword detection to generate a risk score and alerting the user through phone vibrations.',
    icons: ['android', 'java'],
    video: require('../videos/project-slides/scammr.mp4'),
    lessons: ['How to create an android app using Android Studio'],
    contributions: ['Front-end development', 'Presenting the idea and MVP in front of the judges'],
    github: null,
    website: null,
    mockup: null
  },
  { 
    projectId: 'task-manager-card', 
    url: 'task-manager', 
    title: 'Task Manager',  
    desc: 'Lo-fi and hi-fi prototype of a task management system to help groups work efficiently. This was created for a group assignment for COMPSCI 345 (Human-Computer Interactions). I worked with 3 students to create a lo-fi and hi-fi prototypes, including a vanilla HTML/CSS and JS website.',
    icons: ['html5', 'css3-alt', 'js-square'],
    video: null,
    lessons: ['Lo-fi and Hi-fi prototyping', 'UI/UX principles', 'How to do a heuristic evaluation', 'Usability Testing', 'Stakeholder maps', 'User stories', 'Personas', 'Affinity mapping', 'Balsamiq'],
    contributions: null,
    github: null,
    website: null,
    mockup: require('../images/mockups/task-manager.jpg')
  },
  { 
    projectId: 'eventigate-card', 
    url: 'eventigate', 
    title: 'Eventigate', 
    desc: 'Eventigate was created over 2 days during the AUCS x KPMG 2019 Hackathon, with the theme \'Improving interactions within local communities through tech\' and was awarded Best Presentation! I worked with 4 students to ideate and create a platform to help connect locations, individuals and volunteer groups. Eventigate is a website which allows locations to easily host events, volunteering groups to easily find locations and individuals to easily find groups.',
    icons: ['html5', 'css3-alt'],
    video: require('../videos/project-slides/eventigate.mp4'),
    lessons: null,
    contributions: ['Front-end development and design', 'Presenting the idea and MVP in front of the judges'],
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