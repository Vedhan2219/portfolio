'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Pen, BarChart2, Users, Edit3, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';
import { staggerContainer, staggerChild, fadeUp } from '@/lib/animations';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BookOpen,
  Pen,
  BarChart2,
  Users,
  Edit3,
};

function GhostIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
    </svg>
  );
}

export function ServicesPageContent() {
  return (
    <div className="pt-16 min-h-screen bg-[var(--color-paper)]">
      {/* Hero */}
      <section className="py-16 border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
              Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-[4rem] md:text-[5rem] font-[300] leading-[1.05] text-[var(--color-ink)] mb-6">
              Core Expertise
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body text-base text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
              I specialize in building robust digital foundations—from high-traffic web applications to 
              resilient cloud infrastructure and strategic technical consulting.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon === 'Ghost' ? GhostIcon : (iconMap[service.icon] || BookOpen);
              return (
                <motion.div
                  key={service.id}
                  variants={staggerChild}
                  className={`group relative flex flex-col p-8 rounded-[12px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] ${
                    service.highlight
                      ? 'border-[#C9A84C] bg-gradient-to-br from-[#C9A84C]/8 to-transparent'
                      : 'border-[var(--color-border)] bg-[var(--color-paper)]'
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute -top-3 left-6 font-body text-[10px] font-semibold tracking-widest uppercase text-[#0D0D0D] bg-[#C9A84C] px-3 py-1 rounded-full">
                      Most Requested
                    </div>
                  )}

                  <div className="w-12 h-12 rounded-[10px] bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-[#C9A84C]" />
                  </div>

                  <h2 className="font-body text-xl font-semibold text-[var(--color-ink)] mb-1">{service.title}</h2>
                  <p className="font-body text-sm italic text-[var(--color-muted)] mb-3">{service.tagline}</p>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">{service.description}</p>

                  {/* Deliverables */}
                  <div className="mb-6 flex-1">
                    <p className="font-body text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-muted)] mb-3">Deliverables</p>
                    <ul className="space-y-2">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-[var(--color-muted)]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="pt-5 border-t border-[var(--color-border)] flex items-end justify-between">
                    <div>
                      <p className="font-body text-[10px] tracking-wider uppercase text-[var(--color-muted)] mb-1">From</p>
                      <p className="font-display text-2xl font-[400] text-[#C9A84C]">{service.priceFrom}</p>
                      <p className="font-body text-xs text-[var(--color-muted)]">{service.duration}</p>
                    </div>
                    <Button asChild variant={service.highlight ? 'gold' : 'ghost'} size="sm">
                      <Link href="/contact">Enquire</Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Not sure CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center py-12 rounded-[12px] bg-[var(--color-dark)]"
          >
            <p className="font-display text-2xl font-[300] text-[#FAF8F4] mb-3">Not sure what you need?</p>
            <p className="font-body text-sm text-[#A89E92] mb-6 max-w-lg mx-auto">
              Book a free 30-minute discovery call and let&apos;s figure out the right approach together.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link href="/contact" className="gap-2 flex items-center">
                Let&apos;s Talk <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
