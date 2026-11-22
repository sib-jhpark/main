import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';

export function HeroBento() {
  const { pick } = useThemeLanguage();

  return (
    <section id="about" className="scroll-mt-20 pt-8 sm:pt-12">
      <div className="bento-card p-7 sm:p-10 space-y-6">
        {/* Identity Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="space-y-1">
            <h1 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.025em] text-[#1D1D1F] dark:text-[#F5F5F7] leading-tight">
              {pick(profileData.name)}
            </h1>
            <p className="text-[14px] sm:text-[15px] font-medium text-[#0071E3] dark:text-[#2997FF]">
              {pick(profileData.role)}
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#86868B]">
            <MapPin className="w-3.5 h-3.5" />
            <span>{pick(profileData.location)}</span>
          </div>
        </div>

        {/* Concise Bio */}
        <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#1D1D1F]/85 dark:text-[#F5F5F7]/85 max-w-[780px]">
          {pick(profileData.bio)}
        </p>

        {/* Quiet Link Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
          <a
            href={`mailto:${profileData.contact.email}`}
            className="bento-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7]"
          >
            <Mail className="w-3.5 h-3.5 text-[#86868B]" />
            <span className="font-mono">{profileData.contact.email}</span>
          </a>

          {profileData.contact.links.map((link) => {
            const isExternal = link.url.startsWith('http');
            return (
              <a
                key={link.id}
                href={link.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="bento-pill inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                <span>{pick(link.label)}</span>
                {isExternal && <ArrowUpRight className="w-3 h-3 text-[#86868B]" />}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
