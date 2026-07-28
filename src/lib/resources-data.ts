export interface Resource {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  link: string
}

export const SEED_RESOURCES: Omit<Resource, 'id'>[] = [
  {
    title: 'Coding & Programming',
    category: 'Technology',
    description: 'Coding is the process of transforming ideas, solutions, and instructions into the language that a computer can understand. Coding is how humans communicate with computers.',
    tags: ['Technology', 'STEAM'],
    link: 'https://www.google.com/search?q=coding+and+programming+for+students',
  },
  {
    title: 'Robotics',
    category: 'Technology',
    description: 'Robotics is the interdisciplinary field involving the design, construction, operation, and programming of robots. It combines mechanical engineering, electrical engineering, and computer science.',
    tags: ['Technology', 'Engineering'],
    link: 'https://www.google.com/search?q=robotics+for+students',
  },
  {
    title: 'Virtual Reality (VR)',
    category: 'Technology',
    description: 'Virtual Reality (VR) is a technology that creates a simulated environment or experience. Users can interact with and explore this artificial environment using special equipment such as VR headsets.',
    tags: ['Technology', 'Innovation'],
    link: 'https://www.google.com/search?q=virtual+reality+education+resources',
  },
  {
    title: 'Augmented Reality (AR)',
    category: 'Technology',
    description: 'Augmented Reality overlays virtual elements onto the real world, enhancing the user\'s perception and interaction with their environment.',
    tags: ['Technology', 'Innovation'],
    link: 'https://www.google.com/search?q=augmented+reality+education+resources',
  },
  {
    title: 'Artificial Intelligence (AI)',
    category: 'Technology',
    description: 'Artificial Intelligence (AI) is a branch of computer science that focuses on creating intelligent machines capable of performing tasks that typically require human intelligence.',
    tags: ['Technology', 'Future'],
    link: 'https://www.google.com/search?q=artificial+intelligence+for+kids+education',
  },
  {
    title: '3D Printing',
    category: 'Technology',
    description: '3D printing is a process of creating three-dimensional objects from a digital file by layering materials on top of each other. It has applications in manufacturing, medicine, architecture, and more.',
    tags: ['Technology', 'Engineering'],
    link: 'https://www.google.com/search?q=3d+printing+education+resources',
  },
  {
    title: 'Engineering',
    category: 'Core Learning',
    description: 'Engineering is the creative application of science, mathematical methods, and empirical evidence to the innovation, design, construction, and maintenance of structures, machines, and systems.',
    tags: ['STEAM', 'Core'],
    link: 'https://www.google.com/search?q=engineering+learning+resources+for+students',
  },
  {
    title: 'Mathematics',
    category: 'Core Learning',
    description: 'Advanced mathematics concepts applied through real-world project challenges, covering algebra, geometry, statistics, and applied math.',
    tags: ['Core', 'STEAM'],
    link: 'https://www.google.com/search?q=mathematics+learning+resources+for+students',
  },
  {
    title: 'Science',
    category: 'Core Learning',
    description: 'Hands-on experiments and exploration covering biology, chemistry, physics, and earth science through project-based discovery.',
    tags: ['Core', 'STEAM'],
    link: 'https://www.google.com/search?q=science+learning+resources+for+students',
  },
  {
    title: 'Critical Thinking',
    category: 'Philosophy',
    description: 'Analyzing problems from multiple angles and developing logical, evidence-based solutions. A foundational skill for all future innovators.',
    tags: ['Mindset', 'Leadership'],
    link: 'https://www.google.com/search?q=critical+thinking+activities+for+students',
  },
  {
    title: 'Entrepreneurship',
    category: 'Philosophy',
    description: 'Building a business mindset through pitching ideas, budgeting, and product development. Students learn to see problems as opportunities.',
    tags: ['Mindset', 'Leadership'],
    link: 'https://www.google.com/search?q=entrepreneurship+for+students+resources',
  },
  {
    title: 'Visual Arts & Design',
    category: 'Arts',
    description: 'Creative expression through drawing, digital design, and visual storytelling using tools like Procreate, Figma, and Adobe Creative Suite.',
    tags: ['Arts', 'Creativity'],
    link: 'https://www.google.com/search?q=visual+arts+and+design+resources+for+students',
  },
  {
    title: 'Game Development',
    category: 'Arts',
    description: 'Designing and building video games from concept to playable prototype using tools like Unity, Scratch, and GameMaker.',
    tags: ['Arts', 'Technology'],
    link: 'https://www.google.com/search?q=game+development+for+students+resources',
  },
  {
    title: 'Film & Photography',
    category: 'Arts',
    description: 'Capturing the world through a lens — cinematography, editing, and visual narratives using industry-standard tools and techniques.',
    tags: ['Arts', 'Creativity'],
    link: 'https://www.google.com/search?q=film+and+photography+resources+for+students',
  },
  {
    title: 'Music Production',
    category: 'Arts',
    description: 'Composing, recording, and producing music using digital audio workstations (DAWs) like GarageBand, Logic, and FL Studio.',
    tags: ['Arts', 'Creativity'],
    link: 'https://www.google.com/search?q=music+production+resources+for+students',
  },
  {
    title: 'Architecture & Design',
    category: 'Core Learning',
    description: 'Architecture is the art and science of designing buildings and spaces. Students learn design thinking, structural concepts, and 3D modeling.',
    tags: ['Core', 'Engineering'],
    link: 'https://www.google.com/search?q=architecture+and+design+resources+for+students',
  },
  {
    title: 'Neuroscience',
    category: 'Core Learning',
    description: 'The study of the nervous system, including the brain. Students explore how the brain works and its impact on behavior, learning, and creativity.',
    tags: ['Core', 'Science'],
    link: 'https://www.google.com/search?q=neuroscience+resources+for+students',
  },
  {
    title: 'Sustainability & Environment',
    category: 'Philosophy',
    description: 'Understanding environmental systems and designing solutions that protect and restore our planet for future generations.',
    tags: ['Future', 'Mindset'],
    link: 'https://www.google.com/search?q=sustainability+and+environment+resources+for+students',
  },
]
