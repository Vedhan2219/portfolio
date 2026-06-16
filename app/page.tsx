import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ContactSection } from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'vubbapally Vedhanta Kumar — Senior Software Engineer & Cloud Architect',
  description:
    'Senior software engineer specialized in building scalable cloud-native applications. Expert in React, Go, and Kubernetes.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProjectsPreview />
      <ServicesPreview />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
