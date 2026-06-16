'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { staggerContainer, staggerChild } from '@/lib/animations';

export function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-16 bg-[var(--color-paper)]" aria-label="Projects preview">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading eyebrow="Projects" title="Selected Work" />
          <Link
            href="/projects"
            className="flex items-center gap-2 font-body text-sm font-medium text-[#C9A84C] hover:gap-3 transition-all duration-200 whitespace-nowrap self-start md:self-auto"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((project) => (
            <motion.article key={project.slug} variants={staggerChild}>
              <a href={project.url || `/projects/${project.slug}`} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="rounded-[12px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-paper)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#C9A84C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-[#0D0D0D] font-body font-semibold">
                        View Live Site <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="dark">{project.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-body text-xs text-[var(--color-muted)]">{project.client}</span>
                      <span className="font-body text-xs text-[var(--color-muted)]">{project.year}</span>
                    </div>
                    <h3 className="font-display text-xl font-[400] text-[var(--color-ink)] mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">
                      {project.excerpt}
                    </p>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
