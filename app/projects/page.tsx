import type { Metadata } from 'next';
import { ProjectsPageContent } from './ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected software engineering projects — cloud infrastructure, distributed systems, and modern web applications.',
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
