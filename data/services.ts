import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 's1',
    title: 'Python Full Stack',
    tagline: 'End-to-end Python web development.',
    description: 'Frontend skills: HTML, CSS, JavaScript. Database: MySQL, PostgreSQL.',
    icon: 'Database',
    priceFrom: 'Custom',
    duration: 'per project',
    features: ['HTML, CSS, JavaScript', 'MySQL, PostgreSQL', 'Python Backend'],
    deliverables: [],
    highlight: true,
  },
  {
    id: 's2',
    title: 'Java Full Stack',
    tagline: 'Comprehensive full-stack solutions.',
    description: 'Frontend: HTML, CSS, JavaScript, React.js. Backend: Node.js.',
    icon: 'Code',
    priceFrom: 'Custom',
    duration: 'per project',
    features: ['HTML, CSS, JavaScript', 'React.js', 'Node.js'],
    deliverables: [],
    highlight: false,
  },
];
