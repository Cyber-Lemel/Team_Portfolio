import member1 from '../assets/Jomer.png'
import member2 from '../assets/Mel.png'
import member3 from '../assets/Janus.png'
import dinoImage from '../assets/Dino.png'
import memoryImage from '../assets/OnePiece.png'
import EcommerceImage from '../assets/Ani2u.png'
import { reactIcon, jsIcon, cssIcon, htmlIcon, tailwindIcon, wordpressIcon, laravelIcon, phpIcon, javaIcon, mysqlIcon, packetTracerIcon, gitIcon, dsIcon, alIcon, oopIcon, pythonIcon, figmaIcon, cIcon} from '../assets/logo'

export const teamInfo = {
  name: 'JakcoolTo-gether',
  tagline: 'A three-person build crew from the BSCS program',
  bio: "We're three Information Technology students who partner on coursework, and side builds. This site is our shared roster: what each of us knows, what we've shipped together, and how to reach us.",
  status: 'Open to internships & junior dev roles',
  location: 'Munoz, Nueva Ecija, Philippines',
  email: 'hello.jakcooltogether@gmail.com',
  github: 'https://github.com/',
  resume: '#',
}

export const stats = [
  { id: 1, label: 'Completed Projects', value: 6 },
  { id: 2, label: 'Technologies Learned', value: 18 },
  { id: 3, label: 'Courses Passed', value: 24 },
  { id: 4, label: 'Commits This Term', value: 340 },
]

export const team = [
  {
    id: 'dellosa',
    codename: 'Meng',
    name: 'Jomer Dellosa',
    role: 'Frontend & UI',
    focus: 'React interfaces, layout systems, and design tokens.',
    photo: member1,
  },
  {
    id: 'velasco',
    codename: 'Doffy',
    name: 'Mel Joseph Velasco',
    role: 'Backend & Data',
    focus: 'APIs, databases, and the plumbing that keeps the frontend fed.',
    photo: member2,
  },
  {
    id: 'franada',
    codename: 'Aidamn',
    name: 'Janus Franada',
    role: 'Tools & QA',
    focus: 'Build tooling, testing, and deployment for every group project.',
    photo: member3,
  },
]

export const education = {
  degree: 'BS Information Technology',
  institution: 'Central Luzon State University',
  graduation: '2028 (expected)',
  gpa: '1.55 avg. (team)',
  concentrations: ['Software Engineering', 'Web Systems', 'Databases'],
  milestones: [
    { id: 1, year: '2024', text: 'Formed the group during a first-year data structures project.' },
    { id: 2, year: '2025', text: 'Shipped our first full-stack app for a campus organization.' },
    { id: 3, year: '2026', text: 'Placed in a regional inter-collegiate hackathon.' },
    { id: 4, year: '2027', text: 'Started specializing — frontend, backend, and tooling.' },
  ],
}

export const skills = [
  { id: 1, name: 'React', category: 'Frontend', level: 'Proficient', iconKey: 'react', icon: reactIcon },
  { id: 2, name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Proficient', iconKey: 'js', icon: jsIcon },
  { id: 3, name: 'CSS / Responsive Design', category: 'Frontend', level: 'Proficient', iconKey: 'css', icon: cssIcon },
  { id: 4, name: 'HTML', category: 'Frontend', level: 'Comfortable', iconKey: 'html', icon: htmlIcon },
  { id: 5, name: 'PHP', category: 'Backend', level: 'Comfortable', iconKey: 'php', icon: phpIcon },
  { id: 6, name: 'Laravel', category: 'Backend', level: 'Comfortable', iconKey: 'laravel', icon: laravelIcon },
  { id: 7, name: 'Java', category: 'Backend', level: 'Proficient', iconKey: 'java', icon: javaIcon },
  { id: 8, name: 'MySQL', category: 'Database & Tools', level: 'Proficient', iconKey: 'mysql', icon: mysqlIcon },
  { id: 9, name: 'Packet Tracer', category: 'Database & Tools', level: 'Comfortable', iconKey: 'packet-tracer', icon: packetTracerIcon },
  { id: 10, name: 'Git & GitHub', category: 'Backend', level: 'Proficient', iconKey: 'git', icon: gitIcon },
  { id: 11, name: 'Data Structures', category: 'Core CS', level: 'Proficient', iconKey: 'ds', icon: dsIcon },
  { id: 12, name: 'Algorithms', category: 'Core CS', level: 'Comfortable', iconKey: 'algo', icon: alIcon },
  { id: 13, name: 'OOP Design', category: 'Core CS', level: 'Proficient', iconKey: 'oop', icon: oopIcon },
  {id: 14, name: 'Tailwind CSS', category: 'Frontend', level: 'Comfortable', iconKey: 'tailwind', icon: tailwindIcon},
  {id: 15, name: 'WordPress', category: 'Frontend', level: 'Comfortable', iconKey: 'wordpress', icon: wordpressIcon},
  {id: 16, name: 'Python', category: 'Backend', level: 'Comfortable', iconKey: 'python', icon: pythonIcon},
  {id: 17, name: 'Figma', category: 'Backend', level: 'Comfortable', iconKey: 'figma', icon: figmaIcon},
  {id: 18, name: 'C Programming', category: 'Database & Tools', level: 'Comfortable', iconKey: 'c', icon: cIcon},
]

export const projects = [
  {
    id: 1,
    title: 'Dino Block',
    description:
      'A 2d fast paced Dinosaur retro game built using OOP principles in Java, inspired by the game Varmitz',
    category: 'Games',
    photo: dinoImage,
    technologies: ['Java'],
    githubUrl: 'https://github.com/Cyber-Lemel/Dino_Block_Game',
    liveUrl: '#',
    initialLikes: 12,
    featured: true,
    highlights: [
      'Deployed the project in my own local computer as an apps',
      'Designed the whole maps of the games using command line, pixel as a number',
      'Implement character animations in Java using image frames and object-oriented programming (OOP) principles.',
    ],
  },
  {
    id: 2,
    title: 'Memory Allocation System',
    description: 'An interactive Anime (One-Piece) system for memory allocation strategies to help calculate allocating memory without or a lessen fragmentation.',
    category: 'Systems',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    photo: memoryImage,
    githubUrl: 'https://github.com/Cyber-Lemel/OnePiece_AllocationSystem',
    liveUrl: '#',
    initialLikes: 9,
    featured: true,
    highlights: [
      'Modeled queue math and rendered it as a live chart',
      'Let classmates tweak arrival/service rates in real time',
      'Used as a study aid by two other sections',
    ],
  },
  {
    id: 3,
    title: 'Ani2u E-Commerce Prototype',
    description: 'A Filipino farm-to-table marketplace app built for rural reach, featuring group-buy "Lobby" batch ordering that lowers delivery costs as more neighbors join, order tracking with smart route recommendations for faster delivery, and an AI recipe recommendation assistant., prototyped in React and tuned for one-handed use.',
    category: 'Web App',
    technologies: ['Lovable'],
    photo: EcommerceImage,
    githubUrl: 'https://lovable.dev/projects/e7b77a7a-50b4-4e00-a48d-b571f7904bb4',
    liveUrl: '#',
    initialLikes: 7,
    featured: false,
    highlights: [
      '1st place in a Local Hackathon/Startup in Taguig City, Philippines',
      'Get the best route for delivery using Google Maps API',
      'Solve a real problem in the Philippines, which is the high cost of delivery for rural areas',
    ],
  },
  {
    id: 4,
    title: 'Library Inventory API',
    description: 'A REST API for tracking book inventory and loans for a mock campus library system.',
    category: 'Full Stack',
    technologies: ['Express', 'MongoDB'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    initialLikes: 6,
    featured: false,
    highlights: [
      'Designed endpoints for loans, holds, and returns',
      'Added JWT auth for staff-only routes',
      'Wrote integration tests for every route',
    ],
  },
  {
    id: 5,
    title: 'Grade Weighting Calculator',
    description: 'A small utility app that computes final grades from custom weighted categories.',
    category: 'Web App',
    technologies: ['JavaScript', 'CSS'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    initialLikes: 15,
    featured: true,
    highlights: [
      'Handles arbitrary category weights that must sum to 100%',
      'Saves setups so classmates can reuse them each term',
      'Passed around the whole block group chat',
    ],
  },
  {
    id: 6,
    title: 'Hackathon: Barangay Alert',
    description: 'A 24-hour hackathon build for local disaster alerts, built with a shared codebase across the three of us.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    initialLikes: 21,
    featured: true,
    highlights: [
      'Split frontend, backend, and infra three ways under time pressure',
      'Placed as a finalist in a regional inter-collegiate hackathon',
      'Reused the auth layer in two later projects',
    ],
  },
]

export const courses = [
  { id: 1, code: 'CS 201', title: 'Data Structures & Algorithms', institution: 'Central Luzon State University', term: '2nd Yr, Sem 1', grade: '1.25', topics: ['Trees', 'Graphs', 'Sorting'] },
  { id: 2, code: 'CS 214', title: 'Object-Oriented Programming', institution: 'Central Luzon State University', term: '2nd Yr, Sem 1', grade: '1.50', topics: ['Design Patterns', 'UML', 'Java'] },
  { id: 3, code: 'CS 230', title: 'Database Management Systems', institution: 'State University', term: '2nd Yr, Sem 2', grade: '1.25', topics: ['SQL', 'Normalization', 'Transactions'] },
  { id: 4, code: 'CS 250', title: 'Web Systems & Technologies', institution: 'State University', term: '3rd Yr, Sem 1', grade: '1.00', topics: ['React', 'REST', 'HTTP'] },
  { id: 5, code: 'CS 262', title: 'Operating Systems', institution: 'State University', term: '3rd Yr, Sem 1', grade: '1.75', topics: ['Processes', 'Memory', 'Scheduling'] },
  { id: 6, code: 'CS 270', title: 'Software Engineering', institution: 'State University', term: '3rd Yr, Sem 2', grade: '1.25', topics: ['Agile', 'Testing', 'Requirements'] },
]

export const socialLinks = [
  { id: 1, label: 'GitHub', url: 'https://github.com/' },
  { id: 2, label: 'Email', url: 'mailto:hello.jakcooltogether.crew@gmail.com' },
  { id: 3, label: 'LinkedIn', url: 'https://linkedin.com/' },
]
