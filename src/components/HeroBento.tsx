import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';
import { renderTextWithLinks } from '../utils/renderTextWithLinks';

export function HeroBento() {
  const { language, pick } = useThemeLanguage();

  return (
    <div id="about" className="scroll-mt-20 pt-8 sm:pt-12 space-y-12 sm:space-y-14">
      {/* 1. Top Identity Block (대표소개 — inspired by dabeenl.github.io) */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pb-8 border-b border-black/[0.06] dark:border-white/[0.08]">
        {profileData.photoUrl && (
          <img
            src={profileData.photoUrl}
            alt={pick(profileData.name)}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border border-black/[0.06] dark:border-white/[0.08] shadow-apple-card shrink-0"
          />
        )}

        <div className="space-y-3 min-w-0">
          <div className="space-y-1">
            <h1 className="text-[30px] sm:text-[36px] font-bold tracking-[-0.025em] text-[#1D1D1F] dark:text-[#F5F5F7] leading-tight">
              {pick(profileData.name)}
            </h1>
            <p className="text-[15px] sm:text-[16px] font-medium text-[#1D1D1F]/90 dark:text-[#F5F5F7]/90">
              {pick(profileData.role)}
            </p>
            {profileData.affiliations && profileData.affiliations.length > 0 && (
              <div className="space-y-0.5 pt-0.5">
                {profileData.affiliations.map((affil, idx) => (
                  <p key={idx} className="text-[13.5px] text-[#86868B]">
                    {pick(affil)}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Contact Metadata Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#86868B]">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{pick(profileData.location)}</span>
            </span>
            <span className="inline-flex items-center gap-1 font-mono">
              <Mail className="w-3.5 h-3.5" />
              <span>{profileData.contact.email}</span>
            </span>
          </div>

          {/* Subtle Chip Links */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="bento-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-white dark:bg-[#1C1C1E] hover:bg-[#F5F5F7] dark:hover:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.08] dark:border-white/[0.1]"
            >
              <span>Email</span>
            </a>

            {profileData.contact.links.map((link) => {
              const isExternal = link.url.startsWith('http');
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="bento-pill inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium bg-white dark:bg-[#1C1C1E] hover:bg-[#F5F5F7] dark:hover:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.08] dark:border-white/[0.1]"
                >
                  <span>{pick(link.label)}</span>
                  {isExternal && <ArrowUpRight className="w-3 h-3 text-[#86868B]" />}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Separate About Section */}
      <section>
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
            About
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            {language === 'ko' ? '소개' : 'About'}
          </h2>
        </div>

        <div className="bento-card p-6 sm:p-8">
          <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-[#1D1D1F]/90 dark:text-[#F5F5F7]/90 whitespace-pre-line">
            {renderTextWithLinks(pick(profileData.bio))}
          </p>
        </div>
      </section>
    </div>
  );
}
