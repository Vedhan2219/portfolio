import type { Metadata } from 'next';
import { ServicesPageContent } from './ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full-stack development, cloud infrastructure, and technical consulting. Architecture for high-performance systems.',
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
