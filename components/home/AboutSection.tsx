'use client';

import { motion } from 'framer-motion';
import { education, experience } from '@/data/about';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { slideLeft, slideRight, staggerContainer } from '@/lib/animations';

export function AboutSection() {
  return (
    <section className="py-16 bg-[var(--color-paper)]" aria-label="Background timeline">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <SectionHeading eyebrow="Background" title="Education & Experience" center />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-8">
              Education
            </h3>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/20" />
              <div className="space-y-10">
                {education.map((item, i) => (
                  <motion.div key={i} variants={slideRight} className="pl-10 relative group">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-[#C9A84C] bg-[var(--color-paper)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                    </div>
                    {/* Pulse ring on hover */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-[#C9A84C]/40 scale-150 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-ring transition-opacity" />

                    <p className="font-body text-xs text-[var(--color-muted)] mb-1 font-medium tracking-wide">{item.period}</p>
                    <h4 className="font-display text-lg font-[400] text-[var(--color-ink)] mb-1">{item.degree}</h4>
                    <p className="font-body text-sm font-medium text-[#C9A84C] mb-2">{item.institution}</p>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-8">
              Experience
            </h3>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/20" />
              <div className="space-y-10">
                {experience.map((item, i) => (
                  <motion.div key={i} variants={slideLeft} className="pl-10 relative group">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-[#C9A84C] bg-[var(--color-paper)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                    </div>

                    <p className="font-body text-xs text-[var(--color-muted)] mb-1 font-medium tracking-wide">{item.period}</p>
                    <h4 className="font-display text-lg font-[400] text-[var(--color-ink)] mb-1">{item.role}</h4>
                    <p className="font-body text-sm font-medium text-[#C9A84C] mb-2">{item.company}</p>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
