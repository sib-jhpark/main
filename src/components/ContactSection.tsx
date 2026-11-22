import { useState } from 'react';
import { ArrowUpRight, BookOpen, Check, Copy, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { profileData } from '../data/profile';
import type { SocialLink } from '../types/profile';

function LinkIcon({ id }: { id: SocialLink['id'] }) {
  switch (id) {
    case 'github':
      return <Github className="w-4 h-4" />;
    case 'linkedin':
      return <Linkedin className="w-4 h-4" />;
    case 'blog':
      return <BookOpen className="w-4 h-4" />;
    case 'resume':
      return <FileText className="w-4 h-4" />;
  }
}

export function ContactSection() {
  const { language, pick } = useThemeLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profileData.contact.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="bento-card p-7 sm:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-[540px]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
              Contact
            </p>
            <h2 className="text-2xl sm:text-[30px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
              {pick(profileData.contact.heading)}
            </h2>
            <p className="text-[14.5px] leading-relaxed text-[#86868B]">
              {pick(profileData.contact.description)}
            </p>
          </div>

          {/* Email Action Group */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => void handleCopyEmail()}
              className="bento-pill inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#34C759] dark:text-[#30D158]" />
                  <span className="text-[#248A3D] dark:text-[#30D158]">
                    {language === 'ko' ? '이메일 복사됨' : 'Email Copied'}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#86868B]" />
                  <span className="font-mono">{profileData.contact.email}</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${profileData.contact.email}`}
              className="bento-pill inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'ko' ? '메일 보내기' : 'Send Email'}</span>
            </a>
          </div>
        </div>

        {/* Social Link Bento Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-black/[0.04] dark:border-white/[0.06]">
          {profileData.contact.links.map((link) => {
            const isExternal = link.url.startsWith('http');
            return (
              <a
                key={link.id}
                href={link.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#F5F5F7]/80 dark:bg-[#2C2C2E]/60 hover:bg-[#EBEBED] dark:hover:bg-[#2C2C2E] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] shadow-apple-pill shrink-0">
                    <LinkIcon id={link.id} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {pick(link.label)}
                    </div>
                    <div className="text-[11px] font-mono text-[#86868B] truncate">
                      {link.handle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1A6] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors shrink-0" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
