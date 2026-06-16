'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-16 bg-[var(--color-dark)]" aria-label="Testimonials">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <SectionHeading eyebrow="Kind Words" title="What Clients Say" center light />
        </div>

        <div className="relative min-h-[280px]" aria-live="polite">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <div className="bg-[var(--color-dark-card)] rounded-[12px] p-8 md:p-10 border border-[#2E2A27]">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl md:text-2xl font-[300] italic text-[#FAF8F4] leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border-2 border-[#C9A84C]/30"
                  />
                  <div>
                    <p className="font-body font-semibold text-[#FAF8F4]">{t.name}</p>
                    <p className="font-body text-sm text-[#A89E92]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="font-body text-[10px] tracking-wider uppercase text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-1 rounded-full">
                      {t.project}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-[#2E2A27] text-[#A89E92] hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center justify-center transition-all"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-6 h-2 bg-[#C9A84C]' : 'w-2 h-2 bg-[#2E2A27] hover:bg-[#C9A84C]/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-[#2E2A27] text-[#A89E92] hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center justify-center transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
