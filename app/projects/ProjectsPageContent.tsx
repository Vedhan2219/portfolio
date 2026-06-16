'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, fadeUp } from '@/lib/animations';

const categories = ['All', 'Full-Stack'];

export function ProjectsPageContent() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-16 min-h-screen bg-[var(--color-paper)]">
      {/* Hero */}
      <section className="py-16 border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
              Projects
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-[4rem] md:text-[5rem] font-[300] leading-[1.05] text-[var(--color-ink)] mb-6">
              Selected Projects
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body text-base text-[var(--color-muted)] leading-relaxed max-w-xl mx-auto">
              A gallery of web development projects, from luxury real estate platforms and travel services to food delivery applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#C9A84C] text-[#0D0D0D]'
                    : 'border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[#C9A84C] hover:text-[#C9A84C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href={project.url || `/projects/${project.slug}`} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="rounded-[12px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-paper)] hover:shadow-lift transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#C9A84C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="flex items-center gap-2 text-[#0D0D0D] font-body font-semibold">
                            View Live Site <ArrowUpRight size={18} />
                          </span>
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge variant="dark">{project.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-body text-xs text-[var(--color-muted)]">{project.client}</span>
                          <span className="font-body text-xs text-[var(--color-muted)]">{project.year}</span>
                        </div>
                        <h2 className="font-display text-xl font-[400] text-[var(--color-ink)] mb-2 leading-snug">
                          {project.title}
                        </h2>
                        <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2 mb-4">
                          {project.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="font-body text-[10px] text-[var(--color-muted)] bg-[var(--color-border)] px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

