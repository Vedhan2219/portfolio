import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Award, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-16 min-h-screen bg-[var(--color-paper)]">
      {/* Hero image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Badge variant="gold" className="mb-3">{project.category}</Badge>
            <h1 className="font-display text-[2.5rem] md:text-[3.5rem] font-[300] text-[#FAF8F4] leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body text-sm text-[var(--color-muted)] mb-12">
          <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[#C9A84C] transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-[var(--color-ink)]">{project.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Body */}
          <div className="lg:col-span-2">
            <p className="font-body text-[1.0625rem] text-[var(--color-muted)] leading-[1.8] mb-8">
              {project.description}
            </p>

            {project.awards.length > 0 && (
              <div>
                <h2 className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-4">
                  Awards & Recognition
                </h2>
                <ul className="space-y-2">
                  {project.awards.map((award) => (
                    <li key={award} className="flex items-center gap-2">
                      <Award size={14} className="text-[#C9A84C]" />
                      <span className="font-body text-sm text-[var(--color-muted)]">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-6 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)]">
              {[
                { label: 'Category', value: project.category },
                { label: 'Client', value: project.client },
                { label: 'Year', value: String(project.year) },
              ].map(({ label, value }) => (
                <div key={label} className="py-3 border-b border-[var(--color-border)] last:border-0">
                  <p className="font-body text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-muted)] mb-1">
                    {label}
                  </p>
                  <p className="font-body text-sm font-medium text-[var(--color-ink)]">{value}</p>
                </div>
              ))}
              <div className="py-3">
                <p className="font-body text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--color-muted)] mb-2">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-body text-[10px] text-[var(--color-muted)] bg-[var(--color-border)] px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-[6px] bg-[#C9A84C] text-[#0D0D0D] font-body text-sm font-semibold hover:bg-[#E8C97A] transition-colors duration-200"
                >
                  View Live Site <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-[var(--color-border)]">
          <Link
            href="/projects"
            className="flex items-center gap-2 font-body text-sm text-[var(--color-muted)] hover:text-[#C9A84C] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 font-body text-sm text-[var(--color-muted)] hover:text-[#C9A84C] transition-colors"
          >
            Next Project <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
