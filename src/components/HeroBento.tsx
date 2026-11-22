import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';

export function HeroBento() {
  const { language, pick } = useThemeLanguage();
  const githubLink = profileData.contact.links.find((l) => l.id === 'github');

  return (
    <section id="about" className="scroll-mt-20 pt-8 sm:pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Main Hero Bento Card (8 cols) */}
        <div className="lg:col-span-8 bento-card p-7 sm:p-10 flex flex-col justify-between gap-8">
          <div className="space-y-5">
            {/* Status Row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                <span
                  className={`w-2 h-2 rounded-full ${
                    profileData.availability.active
                      ? 'bg-[#34C759] dark:bg-[#30D158]'
                      : 'bg-[#86868B]'
                  }`}
                />
                <span>{pick(profileData.availability.label)}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-[#86868B]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{pick(profileData.location)}</span>
              </div>
            </div>

            {/* Name & Role */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-[#0071E3] dark:text-[#2997FF]">
                {pick(profileData.name)} · {pick(profileData.role)}
              </p>
              <h1 className="text-[30px] sm:text-[40px] font-bold leading-[1.18] tracking-[-0.03em] text-[#1D1D1F] dark:text-[#F5F5F7] whitespace-pre-line">
                {pick(profileData.headline)}
              </h1>
              <p className="text-[15px] leading-[1.7] text-[#86868B] max-w-[600px]">
                {pick(profileData.bio)}
              </p>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
            <a
              href="#projects"
              className="bento-pill inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white"
            >
              <span>{language === 'ko' ? '프로젝트 보기' : 'View Projects'}</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noreferrer"
                className="bento-pill inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B]" />
              </a>
            )}

            <a
              href="#contact"
              className="bento-pill inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]"
            >
              <span>{language === 'ko' ? '연락하기' : 'Get in touch'}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Focus + Snapshot Metrics (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Current Focus Card */}
          <div className="bento-card p-6 flex-1 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
                  {language === 'ko' ? '현재 집중 분야' : 'Current Focus'}
                </span>
                <span className="text-[11px] font-mono tabular-nums text-[#0071E3] dark:text-[#2997FF]">
                  2026
                </span>
              </div>
              <ul className="space-y-2.5">
                {profileData.currentFocus.map((focus, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#1D1D1F] dark:text-[#F5F5F7]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0071E3] dark:bg-[#2997FF] shrink-0" />
                    <span>{pick(focus)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.06] text-[12px] text-[#86868B]">
              {language === 'ko'
                ? '이론과 현장을 잇는 정교한 알고리즘 설계'
                : 'Preferring simple, durable software.'}
            </div>
          </div>

          {/* Quick Contact Micro Card */}
          <div className="bento-card p-5 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[11px] font-medium text-[#86868B]">
                {language === 'ko' ? '직접 연락' : 'Direct Email'}
              </div>
              <div className="text-[13px] font-mono text-[#1D1D1F] dark:text-[#F5F5F7] truncate">
                {profileData.contact.email}
              </div>
            </div>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="bento-pill shrink-0 px-3.5 py-1.5 text-xs font-semibold bg-[#E8F2FD] dark:bg-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF] hover:bg-[#D8E9FC] dark:hover:bg-[#0071E3]/30"
            >
              {language === 'ko' ? '메일' : 'Mail'}
            </a>
          </div>
        </div>
      </div>

      {/* 3-Column Bento Summary Strip (matching SOGS top summary cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
        {profileData.metrics.map((metric, idx) => (
          <div key={idx} className="bento-card p-6 flex flex-col justify-between gap-3">
            <span className="text-xs font-medium text-[#86868B]">
              {pick(metric.label)}
            </span>
            <div className="text-[28px] sm:text-[32px] font-bold font-mono tabular-nums tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-none">
              {metric.value}
            </div>
            <p className="text-xs text-[#86868B] pt-2.5 border-t border-black/[0.04] dark:border-white/[0.06]">
              {pick(metric.sublabel)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
