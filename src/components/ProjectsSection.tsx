import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';
import type { ProjectCategory, ProjectItem, ProjectStatus } from '../types/profile';
import { ProjectModal } from './ProjectModal';

type FilterValue = 'all' | ProjectCategory;

const FILTERS: { value: FilterValue; label: { ko: string; en: string } }[] = [
  { value: 'all', label: { ko: '전체', en: 'All' } },
  { value: 'rl', label: { ko: 'RL · Robotics', en: 'RL · Robotics' } },
  { value: 'fintech', label: { ko: 'Quant · Product', en: 'Quant · Product' } },
];

function StatusBadge({ status, language }: { status: ProjectStatus; language: 'ko' | 'en' }) {
  const config: Record<ProjectStatus, { dot: string; text: string; label: { ko: string; en: string } }> = {
    live: {
      dot: 'bg-[#34C759] dark:bg-[#30D158]',
      text: 'text-[#248A3D] dark:text-[#30D158]',
      label: { ko: '운영 중', en: 'Live' },
    },
    opensource: {
      dot: 'bg-[#0071E3] dark:bg-[#2997FF]',
      text: 'text-[#0071E3] dark:text-[#2997FF]',
      label: { ko: '오픈소스', en: 'Open Source' },
    },
    wip: {
      dot: 'bg-[#FF9500] dark:bg-[#FF9F0A]',
      text: 'text-[#C93400] dark:text-[#FF9F0A]',
      label: { ko: '진행 중', en: 'In Progress' },
    },
    planned: {
      dot: 'bg-[#86868B] dark:bg-[#98989D]',
      text: 'text-[#86868B] dark:text-[#98989D]',
      label: { ko: '계획 중', en: 'Planned' },
    },
    research: {
      dot: 'bg-[#5856D6] dark:bg-[#5E5CE6]',
      text: 'text-[#5856D6] dark:text-[#7D7AFF]',
      label: { ko: '연구 중', en: 'Research' },
    },
    completed: {
      dot: 'bg-[#1D1D1F] dark:bg-[#F5F5F7]',
      text: 'text-[#1D1D1F] dark:text-[#F5F5F7]',
      label: { ko: '완료', en: 'Completed' },
    },
  };

  const current = config[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${current.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`} />
      <span>{current.label[language]}</span>
    </span>
  );
}

export function ProjectsSection() {
  const { language, pick } = useThemeLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? profileData.projects
      : profileData.projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="scroll-mt-20">
      {/* Section Header + Pill Segmented Filter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
            Research &amp; Engineering
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            {language === 'ko' ? '연구 및 프로젝트' : 'Projects'}
          </h2>
        </div>

        {/* Apple-style Segmented Control */}
        <div
          role="tablist"
          aria-label={language === 'ko' ? '프로젝트 카테고리 필터' : 'Project category filter'}
          className="inline-flex items-center rounded-full bg-[#EBEBED] dark:bg-[#1C1C1E] p-1 border border-black/[0.04] dark:border-white/[0.08] self-start sm:self-auto overflow-x-auto no-scrollbar max-w-full"
        >
          {FILTERS.map((filter) => {
            const isSelected = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveFilter(filter.value)}
                className={`bento-pill px-3.5 py-1.5 text-xs font-medium whitespace-nowrap ${
                  isSelected
                    ? 'bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] shadow-apple-pill font-semibold'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                }`}
              >
                {pick(filter.label)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
            tabIndex={0}
            role="button"
            className="bento-card bento-card-interactive p-6 sm:p-7 flex flex-col justify-between gap-5 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
          >
            <div className="space-y-4">
              {/* Top Meta Row */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <StatusBadge status={project.status} language={language} />
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#FEF3C7] dark:bg-[#D97706]/20 text-[#D97706] dark:text-[#F59E0B]">
                      Featured
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono tabular-nums text-[#86868B]">
                  {project.year}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-[-0.015em] text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1A6] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                </div>
                <p className="text-[13px] font-medium text-[#86868B]">
                  {pick(project.subtitle)}
                </p>
                <p className="text-[14px] leading-[1.6] text-[#1D1D1F]/80 dark:text-[#F5F5F7]/80 pt-1">
                  {pick(project.summary)}
                </p>
              </div>

              {/* Key Impact Line */}
              <div className="px-3.5 py-2.5 rounded-2xl bg-[#F5F5F7] dark:bg-[#2C2C2E]/70 text-xs text-[#1D1D1F] dark:text-[#F5F5F7] leading-relaxed">
                <span className="font-semibold text-[#0071E3] dark:text-[#2997FF] mr-1.5">
                  {language === 'ko' ? '핵심 성과' : 'Impact'}
                </span>
                <span>{pick(project.impact)}</span>
              </div>
            </div>

            {/* Footer: Tech Chips & External Links */}
            <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-end justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#86868B] dark:text-[#A1A1A6]"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 text-[11px] font-mono tabular-nums text-[#86868B]">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div
                className="flex items-center gap-1.5 shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
                    aria-label={`${project.title} GitHub`}
                    title="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#86868B] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors"
                    aria-label={`${project.title} Live Demo`}
                    title="Live"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
