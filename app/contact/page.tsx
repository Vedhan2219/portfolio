import type { Metadata } from 'next';
import { ContactSection } from '@/components/home/ContactSection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with vubbapally Vedhanta Kumar for software engineering projects, cloud architecture consulting, or technical partnership enquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-[var(--color-paper)]">
      {/* Hero */}
      <section className="py-16 border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            Connect
          </p>
          <h1 className="font-display text-[4rem] md:text-[5rem] font-[300] leading-[1.05] text-[var(--color-ink)] mb-6">
            Let&apos;s Build Together
          </h1>
          <p className="font-body text-base text-[var(--color-muted)] leading-relaxed max-w-xl mx-auto">
            Have a project in mind or just want to talk tech? I&apos;m always open to discussing new opportunities 
            and interesting challenges.
          </p>
        </div>
      </section>

      {/* Reuse ContactSection */}
      <ContactSection />
      
      {/* Map or location details */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="h-[350px] w-full rounded-[12px] bg-[var(--color-dark-card)] border border-[var(--color-border)] overflow-hidden relative">
          {/* Static Map Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
             <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <p className="font-display text-xl text-[#FAF8F4]">Based in San Francisco</p>
                <p className="font-body text-sm text-[#A89E92]">Available worldwide for remote collaboration.</p>
             </div>
          </div>
          <Image 
            src="https://picsum.photos/seed/sf-map/1600/600?grayscale&blur=1" 
            alt="San Francisco Map Location" 
            fill
            className="object-cover opacity-30"
          />
        </div>
      </div>
    </div>
  );
}
