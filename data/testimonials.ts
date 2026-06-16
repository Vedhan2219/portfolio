import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'NextGen Fintech',
    avatar: 'https://picsum.photos/seed/it-avatar1/200/200',
    quote: 'vedhan is one of the rare engineers who can think about architecture at a high level while being incredibly efficient in the weeds of the implementation. A true asset to any team.',
    rating: 5,
    project: 'Infrastructure Migration',
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Lead Architect',
    company: 'DataStream AI',
    avatar: 'https://picsum.photos/seed/it-avatar2/200/200',
    quote: 'The real-time dashboard vedhan built transformed how our operations team monitors data flow. The performance is rock solid even under extreme load.',
    rating: 5,
    project: 'Analytics Dashboard',
  },
];
