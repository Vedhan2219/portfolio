'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { HeroParticles } from './HeroParticles';

const roles = ['Full-Stack Developer', 'Cloud Architect', 'Open Source Contributor'];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < text.length) {
      timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return (
    <span className="font-body text-xl md:text-2xl font-[300] text-[var(--color-muted)]">
      {displayed}
      <span className="animate-pulse text-[#C9A84C]">_</span>
    </span>
  );
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: i * 0.08 },
  }),
};

export function HeroSection() {
  const headingWords = ['Engineering', 'Scalable', 'Digital', 'Solutions'];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--color-paper)]" aria-label="Hero">
      <HeroParticles />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#C9A84C]">
                Vubbapally Vedhanta Kumar — Software Engineer
              </span>
            </motion.div>

            <h1 className="font-display text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-[300] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)] mb-4">
              {headingWords.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-[0.25em]"
                >
                  {word === 'Solutions' ? (
                    <span className="text-gradient-gold italic">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-4"
            >
              <TypewriterText />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-body text-base text-[var(--color-muted)] leading-[1.75] max-w-lg mb-6"
            >
              Building the future through code. Transforming ideas into beautiful, functional digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Button variant="ghost" size="md" className="gap-2">
                <Download size={16} />
                Download Resume
              </Button>
              <Button variant="gold" size="md" asChild>
                <Link href="/projects" className="gap-2 flex items-center">
                  View Projects
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Mail, text: 'vubbapallyvedhan@gmail.com' },
                { icon: MapPin, text: 'Hyderabad,Telangana,India' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[var(--color-muted)]">
                  <Icon size={13} className="text-[#C9A84C]" />
                  <span className="font-body text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-2 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="relative w-[300px] h-[380px] md:w-[350px] md:h-[450px]"
            >
              <div className="absolute inset-0 rounded-[12px] border-2 border-[#C9A84C]/40 animate-spin-slow" />
              <div className="absolute inset-3 rounded-[8px] overflow-hidden border border-[#C9A84C]/20">
                <Image
                  src="/vedhan.png"
                  alt="vubbapally Vedhanta Kumar — Software Engineer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paper)]/20 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -right-6 top-8 bg-[var(--color-paper)] border border-[var(--color-border)] rounded-[8px] px-3 py-2 shadow-lift"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">💻</span>
                  <div>
                    <p className="font-body text-[10px] text-[var(--color-muted)] uppercase tracking-wider">GitHub</p>
                    <p className="font-display text-base font-[600] text-[var(--color-ink)]">100+ Commits</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -left-6 bottom-12 bg-[var(--color-dark)] rounded-[8px] px-3 py-2 shadow-lift"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  <div>
                    <p className="font-body text-[10px] text-[#A89E92] uppercase tracking-wider">Uptime</p>
                    <p className="font-display text-sm font-[600] text-[#FAF8F4]">99.99% Maintained</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
