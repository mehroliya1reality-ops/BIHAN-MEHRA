import { useEffect, useState } from 'react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  PortfolioCategory,
  PortfolioProject,
} from '../data/alphaHomesData';
import { ResilientImage } from './ResilientImage';

interface PortfolioSectionProps {
  onEnquireProject: (projectTitle: string, scope: string) => void;
}

const CATEGORIES: PortfolioCategory[] = [
  'All',
  'Residential',
  'Modular Kitchen',
  'Commercial & Office',
  'Renovation',
];

export function PortfolioSection({ onEnquireProject }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');
  const [lightboxProject, setLightboxProject] = useState<PortfolioProject | null>(
    null
  );

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    if (!lightboxProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxProject]);

  return (
    <section
      id="portfolio"
      className="bg-[#FAF8F4] border-b border-[#141413]/10 py-16 sm:py-24"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#141413]/12">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9A7836] mb-3">
              Selected Portfolio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#141413] leading-[1.1] text-balance">
              Completed Residences &amp; Commercial Spaces
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EDE6D9]"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C5A059] ${
                    active
                      ? 'bg-[#141413] text-[#FAF8F4]'
                      : 'text-[#141413]/75 hover:text-[#141413]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isHeroSpan =
              selectedCategory === 'All' && idx === 0;
            return (
              <article
                key={project.id}
                className={`group bg-[#FAF8F4] border border-[#141413]/12 flex flex-col justify-between overflow-hidden ${
                  isHeroSpan ? 'lg:col-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxProject(project)}
                  className="relative w-full overflow-hidden bg-[#1D1C1A] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C5A059]"
                >
                  <div
                    className={
                      isHeroSpan ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }
                  >
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#141413]/80 via-[#141413]/30 to-transparent"
                  />
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs text-[#FAF8F4]">
                    <span>{project.location}</span>
                    <span className="inline-flex items-center gap-1 text-[#D6B87A]">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Project</span>
                    </span>
                  </div>
                </button>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#141413]/60 tabular-nums">
                      <span className="text-[#9A7836] font-medium">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.area}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-display text-2xl font-medium text-[#141413] mt-2">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#141413]/72">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#141413]/10 flex items-center justify-between gap-3 text-xs">
                    <span className="text-[#141413]/60 truncate">
                      {project.scope}
                    </span>
                    <button
                      type="button"
                      onClick={() => setLightboxProject(project)}
                      className="inline-flex items-center gap-1 font-medium text-[#141413] hover:text-[#9A7836] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {lightboxProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-[#141413]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="bg-[#FAF8F4] text-[#141413] max-w-4xl w-full border border-[#C5A059]/30 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#141413]/12 bg-[#FAF8F4]">
              <div className="flex items-center gap-2 text-xs text-[#141413]/65 tabular-nums">
                <span className="text-[#9A7836] font-medium uppercase tracking-wider">
                  {lightboxProject.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{lightboxProject.location}</span>
                <span aria-hidden="true">·</span>
                <span>{lightboxProject.area}</span>
              </div>

              <button
                type="button"
                aria-label="Close project preview"
                onClick={() => setLightboxProject(null)}
                className="w-10 h-10 inline-flex items-center justify-center text-[#141413] hover:bg-[#EDE6D9] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full bg-[#1D1C1A] overflow-hidden">
              <ResilientImage
                src={lightboxProject.image}
                alt={lightboxProject.imageAlt}
                fallbackTitle={lightboxProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="max-w-xl">
                  <h3
                    id="lightbox-title"
                    className="font-display text-2xl sm:text-3xl font-medium text-[#141413]"
                  >
                    {lightboxProject.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-[#141413]/78">
                    {lightboxProject.summary}
                  </p>
                  <p className="mt-4 text-xs text-[#141413]/65">
                    <span className="font-medium text-[#141413]">Materials Used: </span>
                    {lightboxProject.materials.join(' · ')}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const project = lightboxProject;
                      setLightboxProject(null);
                      onEnquireProject(project.title, project.scope);
                    }}
                    className="px-6 py-3.5 text-xs font-medium tracking-wider uppercase bg-[#141413] text-[#FAF8F4] hover:bg-[#C5A059] hover:text-[#141413] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Request Similar Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
