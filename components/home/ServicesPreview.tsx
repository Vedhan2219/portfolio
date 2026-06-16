'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Database, Server } from 'lucide-react';
import { services } from '@/data/services';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { staggerContainer, staggerChild } from '@/lib/animations';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code,
  Database,
  Server,
};

export function ServicesPreview() {
  const featured = services.slice(0, 3);

  return (
    <section className="py-16 bg-[var(--color-paper)]" aria-label="Services preview">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Core Expectations"
            title="What I Deliver"
            subtitle="Expertise across modern full-stack development and robust database architecture."
          />
          <Link
            href="/services"
            className="flex items-center gap-2 font-body text-sm font-medium text-[#C9A84C] hover:gap-3 transition-all duration-200 whitespace-nowrap self-start md:self-auto hidden"
          >
            All Services <ArrowRight size={14} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((service) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                variants={staggerChild}
                className={`group relative p-8 rounded-[12px] border bg-[var(--color-paper)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 ${
                  service.highlight
                    ? 'border-[#C9A84C]/40 bg-gradient-to-br from-[#C9A84C]/5 to-transparent'
                    : 'border-[var(--color-border)]'
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 text-[10px] font-medium tracking-widest uppercase text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="w-11 h-11 rounded-[8px] bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-body text-lg font-semibold text-[var(--color-ink)] mb-2">{service.title}</h3>
                <p className="font-body text-sm text-[var(--color-muted)] italic mb-3">{service.tagline}</p>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-5">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)] hidden">
                  <span className="font-body text-sm font-semibold text-[#C9A84C]">from {service.priceFrom}</span>
                  <span className="font-body text-xs text-[var(--color-muted)]">{service.duration}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
