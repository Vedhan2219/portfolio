'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={center ? 'text-center' : ''}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-display text-[2.5rem] md:text-[3rem] font-[400] leading-[1.1] tracking-[-0.01em] mb-4 ${
          light ? 'text-[#FAF8F4]' : 'text-[var(--color-ink)]'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`font-body text-base leading-relaxed max-w-xl ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-[#A89E92]' : 'text-[var(--color-muted)]'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
