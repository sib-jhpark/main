import { Award, BadgeCheck, BookOpen, ArrowUpRight } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';

export function WritingSection() {
  const { language, pick } = useThemeLanguage();

  return (
    <section id="writing" className="scroll-mt-20">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
          Publications &amp; Honors
        </p>
        <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
          {language === 'ko' ? '논문 · 학회 · 수상' : 'Publications & Honors'}
        </h2>
      </div>

      <div className="space-y-5">
        {/* Publications & Conference Talks Bento Card */}
        <div className="bento-card p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-5">
            <BookOpen className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
            <span>{language === 'ko' ? '논문 및 학회 발표' : 'Publications & Talks'}</span>
          </div>

          <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
            {profileData.publications.map((pub) => (
              <div key={pub.id} className="py-5 first:pt-0 last:pb-0">
                <div className="space-y-2 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#E8F2FD] dark:bg-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF]">
                      Conference
                    </span>
                    <span className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {pub.venue}
                    </span>
                    <span className="text-xs text-[#D2D2D7] dark:text-[#3A3A3C]">·</span>
                    <time className="text-xs font-mono tabular-nums text-[#86868B]">
                      {pub.date}
                    </time>
                  </div>

                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-start gap-1.5 group"
                    >
                      <h3 className="text-[15px] font-semibold leading-snug text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors">
                        {pub.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-[#A1A1A6] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] shrink-0 mt-0.5 transition-colors" />
                    </a>
                  ) : (
                    <h3 className="text-[15px] font-semibold leading-snug text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {pub.title}
                    </h3>
                  )}

                  <p className="text-xs text-[#86868B]">{pick(pub.note)}</p>

                  {pub.links && pub.links.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {pub.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="bento-pill inline-flex items-center gap-1 px-3 py-1 text-[11.5px] font-semibold bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7]"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#86868B]" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2-Column Bento: Honors + Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Honors Card (5 cols) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-5">
                <Award className="w-3.5 h-3.5 text-[#D97706] dark:text-[#F59E0B]" />
                <span>{language === 'ko' ? '수상 및 주요 이력' : 'Honors & Awards'}</span>
              </div>

              <div className="space-y-4">
                {profileData.honors.map((honor) => (
                  <div key={honor.id} className="space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FEF3C7] dark:bg-[#D97706]/20 text-[#D97706] dark:text-[#F59E0B] font-mono tabular-nums">
                      {honor.date}
                    </span>
                    <h3 className="text-[15px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] leading-snug">
                      {pick(honor.title)}
                    </h3>
                    <p className="text-xs text-[#86868B] leading-relaxed font-mono tabular-nums">
                      {pick(honor.detail)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Card (7 cols) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-5">
              <BadgeCheck className="w-3.5 h-3.5 text-[#34C759] dark:text-[#30D158]" />
              <span>{language === 'ko' ? '자격증' : 'Certifications'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profileData.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-2xl bg-[#F5F5F7]/80 dark:bg-[#2C2C2E]/60 flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-medium text-[#86868B]">
                      {pick(cert.issuer)}
                    </span>
                    <time className="text-[11px] font-mono tabular-nums text-[#0071E3] dark:text-[#2997FF] font-medium">
                      {cert.date}
                    </time>
                  </div>
                  <div className="text-[13.5px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {pick(cert.name)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
