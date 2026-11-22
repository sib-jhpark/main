import { Briefcase, GraduationCap } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';
import type { ExperienceItem } from '../types/profile';

function TimelineList({ items }: { items: ExperienceItem[] }) {
  const { pick } = useThemeLanguage();

  return (
    <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
      {items.map((item) => (
        <div
          key={item.id}
          className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
        >
          {/* Left: Period & Location */}
          <div className="md:col-span-3 space-y-1">
            <div className="text-xs font-mono tabular-nums font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              {item.period}
            </div>
            <div className="text-xs text-[#86868B]">{pick(item.location)}</div>
          </div>

          {/* Right: Organization, Role & Impact */}
          <div className="md:col-span-9 space-y-2.5">
            <div>
              <h3 className="text-base font-semibold tracking-[-0.01em] text-[#1D1D1F] dark:text-[#F5F5F7]">
                {pick(item.role)}
              </h3>
              <p className="text-[13px] font-medium text-[#0071E3] dark:text-[#2997FF]">
                {pick(item.organization)}
              </p>
            </div>

            <p className="text-[14px] leading-relaxed text-[#86868B]">
              {pick(item.summary)}
            </p>

            {item.bullets.length > 0 && (
              <ul className="space-y-1.5 pt-1">
                {item.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#1D1D1F]/85 dark:text-[#F5F5F7]/85"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#86868B] shrink-0" />
                    <span>{pick(bullet)}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#86868B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ExperienceSection() {
  const { language } = useThemeLanguage();
  const workItems = profileData.experiences.filter((e) => e.type === 'work');
  const eduItems = profileData.experiences.filter((e) => e.type === 'education');

  return (
    <section id="experience" className="scroll-mt-20">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
          Background
        </p>
        <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
          {language === 'ko' ? '경력 및 학력' : 'Experience & Education'}
        </h2>
      </div>

      <div className="space-y-5">
        {/* Work Experience Bento Card */}
        <div className="bento-card p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-6">
            <Briefcase className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
            <span>{language === 'ko' ? '경력' : 'Work Experience'}</span>
          </div>
          <TimelineList items={workItems} />
        </div>

        {/* Education Bento Card */}
        {eduItems.length > 0 && (
          <div className="bento-card p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-6">
              <GraduationCap className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
              <span>{language === 'ko' ? '학력' : 'Education'}</span>
            </div>
            <TimelineList items={eduItems} />
          </div>
        )}
      </div>
    </section>
  );
}
