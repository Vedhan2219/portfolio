'use client';

import { motion } from 'framer-motion';
import { stats } from '@/data/about';
import { CountUp } from '@/components/shared/CountUp';
import { staggerContainer, staggerChild } from '@/lib/animations';

export function StatsSection() {
  return (
    <section className="bg-[var(--color-dark)] py-16" aria-label="Statistics">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerChild}
              className={`text-center ${i < stats.length - 1 ? 'md:border-r border-[#2E2A27]' : ''}`}
            >
              <p className="font-display text-[3rem] md:text-[3.5rem] font-[300] text-[#C9A84C] leading-none mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-[#A89E92]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
