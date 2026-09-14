import member1 from '../assets/Jomer.png'
import member2 from '../assets/Mel.png'
import member3 from '../assets/Janus.png'

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
  { id: 1, name: 'React', category: 'Frontend', level: 'Proficient', iconKey: 'react' },
  { id: 2, name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Proficient', iconKey: 'js' },
  { id: 3, name: 'CSS / Responsive Design', category: 'Frontend', level: 'Proficient', iconKey: 'css' },
  { id: 4, name: 'Vite', category: 'Frontend', level: 'Comfortable', iconKey: 'vite' },
  { id: 5, name: 'Node.js', category: 'Backend', level: 'Comfortable', iconKey: 'node' },
  { id: 6, name: 'Express', category: 'Backend', level: 'Comfortable', iconKey: 'express' },
  { id: 7, name: 'REST APIs', category: 'Backend', level: 'Proficient', iconKey: 'api' },
  { id: 8, name: 'MySQL', category: 'Database & Tools', level: 'Proficient', iconKey: 'mysql' },
  { id: 9, name: 'MongoDB', category: 'Database & Tools', level: 'Comfortable', iconKey: 'mongo' },
  { id: 10, name: 'Git & GitHub', category: 'Database & Tools', level: 'Proficient', iconKey: 'git' },
  { id: 11, name: 'Data Structures', category: 'Core CS', level: 'Proficient', iconKey: 'ds' },
  { id: 12, name: 'Algorithms', category: 'Core CS', level: 'Comfortable', iconKey: 'algo' },
  { id: 13, name: 'OOP Design', category: 'Core CS', level: 'Proficient', iconKey: 'oop' },
]

export const projects = [
  {
    id: 1,
    title: 'Campus Org Portal',
    description:
      'A membership and events portal for a student organization, with role-based dashboards and an event RSVP system.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MySQL'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    initialLikes: 12,
    featured: true,
    highlights: [
      'Built a role-based dashboard for officers vs. members',
      'Designed the schema and RSVP workflow end to end',
      'Deployed for live use during two org semesters',
    ],
  },
  {
    id: 2,
    title: 'Queueing Theory Simulator',
    description: 'An interactive visualizer for M/M/1 and M/M/c queue models built for our Operations Research class.',
    category: 'Web App',
    technologies: ['React', 'Recharts'],
    githubUrl: 'https://github.com/',
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
    title: 'Habit Tracker Mobile UI',
    description: 'A mobile-first habit tracking interface, prototyped in React and tuned for one-handed use.',
    category: 'Mobile/UI',
    technologies: ['React', 'CSS Grid'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    initialLikes: 7,
    featured: false,
    highlights: [
      'Explored thumb-zone friendly navigation patterns',
      'Built a streak-counter component with local state',
      'Ran a small usability test with five classmates',
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
