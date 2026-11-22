import { useEffect } from 'react';
import { CheckCircle2, ExternalLink, Github, X } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import type { ProjectItem } from '../types/profile';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language, pick } = useThemeLanguage();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 dark:bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[680px] max-h-[88vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.1] shadow-apple-modal p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono tabular-nums text-[#86868B]">
              <span>{project.year}</span>
              <span>·</span>
              <span className="font-sans">{pick(project.role)}</span>
            </div>
            <h3
              id="project-modal-title"
              className="text-2xl font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]"
            >
              {project.title}
            </h3>
            <p className="text-sm text-[#86868B]">{pick(project.subtitle)}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Impact Callout */}
        <div className="p-4 rounded-2xl bg-[#E8F2FD]/70 dark:bg-[#0071E3]/15 border border-[#0071E3]/15">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1">
            {language === 'ko' ? '핵심 임팩트' : 'Key Impact'}
          </div>
          <p className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
            {pick(project.impact)}
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[#F5F5F7] dark:bg-[#2C2C2E]/60 space-y-1.5">
            <h4 className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
              {language === 'ko' ? '문제 배경' : 'Problem'}
            </h4>
            <p className="text-[13.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]">
              {pick(project.problem)}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-[#F5F5F7] dark:bg-[#2C2C2E]/60 space-y-1.5">
            <h4 className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
              {language === 'ko' ? '해결 접근' : 'Solution'}
            </h4>
            <p className="text-[13.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]">
              {pick(project.solution)}
            </p>
          </div>
        </div>

        {/* Engineering Highlights */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
            {language === 'ko' ? '주요 구현 및 아키텍처' : 'Engineering Highlights'}
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#34C759] dark:text-[#30D158] shrink-0 mt-0.5" />
                <span>{pick(item)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
            {language === 'ko' ? '사용 기술' : 'Tech Stack'}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.08] flex flex-wrap items-center justify-end gap-2.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="bento-pill inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="bento-pill inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{language === 'ko' ? '바로가기' : 'Visit Live'}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
