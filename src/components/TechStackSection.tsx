import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';

export function TechStackSection() {
  const { language, pick } = useThemeLanguage();

  return (
    <section id="stack" className="scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
            Research Interests
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            {language === 'ko' ? '연구 및 관심 분야' : 'Research Interests'}
          </h2>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#86868B]">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0071E3] dark:bg-[#2997FF]" />
            <span>{language === 'ko' ? '전문 분야' : 'Core'}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D2D2D7] dark:bg-[#48484A]" />
            <span>{language === 'ko' ? '활용 분야' : 'Familiar'}</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {profileData.techCategories.map((category) => (
          <div key={category.id} className="bento-card p-6 sm:p-7 flex flex-col justify-between gap-5">
            <div className="space-y-1">
              <h3 className="text-base font-semibold tracking-[-0.01em] text-[#1D1D1F] dark:text-[#F5F5F7]">
                {pick(category.title)}
              </h3>
              <p className="text-xs text-[#86868B]">{pick(category.description)}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    skill.core
                      ? 'bg-[#E8F2FD] dark:bg-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF] font-semibold'
                      : 'bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F]/80 dark:text-[#F5F5F7]/80'
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
