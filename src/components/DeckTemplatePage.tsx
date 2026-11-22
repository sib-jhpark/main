import {
  ArrowLeftRight,
  ArrowUpRight,
  BookOpen,
  Download,
  FileCode2,
  Keyboard,
  Layers,
  Monitor,
  Sparkles,
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export function DeckTemplatePage() {
  const { language } = useThemeLanguage();

  const shortcuts = [
    {
      key: '← → / Space',
      ko: '이전 / 다음 슬라이드 이동',
      en: 'Previous / Next slide',
    },
    {
      key: 'F',
      ko: '전체화면 발표 모드 (툴바 숨김)',
      en: 'Fullscreen presentation mode',
    },
    {
      key: 'O',
      ko: '슬라이드 전체보기 그리드',
      en: 'Slide overview grid',
    },
    {
      key: 'P / Shift+P',
      ko: '발표자 노트 별도 창 / 하단 패널',
      en: 'Presenter notes window / drawer',
    },
    {
      key: 'Home / End',
      ko: '첫 슬라이드 / 마지막 슬라이드',
      en: 'Jump to first / last slide',
    },
    {
      key: '?',
      ko: '단축키 도움말 열기',
      en: 'Toggle keyboard shortcut help',
    },
  ];

  return (
    <div className="pt-8 sm:pt-12 space-y-14 sm:space-y-16">
      {/* 1. HERO SECTION */}
      <section className="space-y-6">
        <div className="bento-card p-7 sm:p-10 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#E8F2FD] dark:bg-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF]">
                Dual-Mode Presentation
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11.5px] font-medium bg-[#EAF8EE] dark:bg-[#30D158]/15 text-[#248A3D] dark:text-[#30D158]">
                2 Standalone HTML Files
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11.5px] font-medium bg-[#F5E8FC] dark:bg-[#BF5AF2]/15 text-[#8944AB] dark:text-[#BF5AF2]">
                Zero Build · No Localhost
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.18] text-[#1D1D1F] dark:text-[#F5F5F7]">
              {language === 'ko'
                ? '슬라이드 ↔ 쇼케이스 듀얼 모드 발표 템플릿'
                : 'Dual-Mode HTML Presentation Template'}
            </h1>
            <p className="text-[15px] leading-[1.75] text-[#86868B] max-w-[780px]">
              {language === 'ko'
                ? '16:9 고정 비율 슬라이드(presentation.html)와 스크롤형 상세 쇼케이스(interactive-showcase.html)를 자유롭게 왕복하며 발표할 수 있도록 직접 고안한 웹 발표 양식입니다. 발표 중 깊은 수식·전체 표·Q&A 자료가 필요할 때 1클릭으로 쇼케이스에 다녀온 뒤 보던 슬라이드로 정확히 복귀하며, 별도 서버나 빌드 도구 없이 HTML 파일 2개만 같은 폴더에 두고 바로 실행할 수 있습니다.'
                : 'A self-contained presentation workflow that pairs a crisp 1920×1080 slide deck (presentation.html) with a scrollable deep-dive web showcase (interactive-showcase.html). Jump into detailed equations, benchmark tables, or Q&A accordions mid-talk and return to your exact slide in one click—just place the two HTML files in the same folder and open in any browser, with zero build step or local server.'}
            </p>
          </div>

          {/* Primary Actions: Live Preview + Direct Downloads */}
          <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-black/[0.04] dark:border-white/[0.06]">
            <a
              href="./templates/dual-deck/presentation.html"
              target="_blank"
              rel="noreferrer"
              className="bento-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>{language === 'ko' ? '슬라이드 라이브 미리보기' : 'Live Demo: Slides'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="./templates/dual-deck/interactive-showcase.html"
              target="_blank"
              rel="noreferrer"
              className="bento-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.06] dark:border-white/[0.08]"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
              <span>{language === 'ko' ? '쇼케이스 라이브 미리보기' : 'Live Demo: Showcase'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="hidden sm:inline text-[#D2D2D7] dark:text-[#3A3A3C] mx-1">|</span>

            <a
              href="./templates/dual-deck/presentation.html"
              download="presentation.html"
              className="bento-pill inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-[#EAF8EE] dark:bg-[#30D158]/15 hover:bg-[#DDF4E4] dark:hover:bg-[#30D158]/25 text-[#248A3D] dark:text-[#30D158]"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="font-mono">presentation.html</span>
            </a>

            <a
              href="./templates/dual-deck/interactive-showcase.html"
              download="interactive-showcase.html"
              className="bento-pill inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-[#EAF8EE] dark:bg-[#30D158]/15 hover:bg-[#DDF4E4] dark:hover:bg-[#30D158]/25 text-[#248A3D] dark:text-[#30D158]"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="font-mono">interactive-showcase.html</span>
            </a>
          </div>
        </div>

        {/* 3 Pillar Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bento-card p-6 space-y-2.5">
            <ArrowLeftRight className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
            <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {language === 'ko' ? '슬라이드 ↔ 쇼케이스 원클릭 왕복' : 'Seamless Slide ⇄ Showcase Loop'}
            </h2>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? '슬라이드별 data-showcase 속성과 ?from=N 쿼리 파라미터로 해당 상세 섹션에 진입하고, "발표로 돌아가기" 클릭 시 원래 슬라이드 번호로 복귀합니다.'
                : 'Each slide deep-links to its matching showcase section via ?from=N#section, and the return button brings you right back to #slide-N.'}
            </p>
          </div>

          <div className="bento-card p-6 space-y-2.5">
            <Layers className="w-4 h-4 text-[#34C759] dark:text-[#30D158]" />
            <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {language === 'ko' ? '1920×1080 고정 캔버스 & PDF 출력' : '1920×1080 Fixed Canvas & PDF Print'}
            </h2>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? '어떤 프로젝터·모니터 해상도에서도 레이아웃이 깨지지 않도록 16:9 캔버스를 통째로 스케일링하며, 브라우저 인쇄로 슬라이드당 1쪽 PDF를 바로 생성합니다.'
                : 'Uniformly scales a 1920×1080 stage to fit any projector or monitor without reflow, with built-in 1-slide-per-page print/PDF CSS.'}
            </p>
          </div>

          <div className="bento-card p-6 space-y-2.5">
            <Sparkles className="w-4 h-4 text-[#AF52DE] dark:text-[#BF5AF2]" />
            <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {language === 'ko' ? '로컬 서버 불필요 · HTML 2개 완결' : 'No Server · Just 2 HTML Files'}
            </h2>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? 'npm 설치나 localhost 실행 없이 두 HTML 파일을 같은 폴더에 저장하고 더블클릭하면 다크 모드 동기화·발표자 노트까지 그대로 동작합니다.'
                : 'No npm, bundler, or localhost setup. Put both HTML files in one folder and double-click—dark mode sync and presenter notes work immediately.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ROUND-TRIP WORKFLOW DIAGRAM */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
            Dual-Mode Workflow
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            {language === 'ko' ? '발표 중 화면 전환 구조' : 'How the Round-Trip Switching Works'}
          </h2>
        </div>

        <div className="bento-card p-6 sm:p-8">
          <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-[#FBFBFD] dark:bg-[#141416] p-4 sm:p-6 overflow-x-auto">
            <svg
              viewBox="0 0 920 190"
              className="w-full min-w-[660px] h-auto"
              role="img"
              aria-label="Dual-mode presentation workflow between presentation.html and interactive-showcase.html"
            >
              <defs>
                <marker
                  id="deck-arrow-blue"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#0071E3" />
                </marker>
                <marker
                  id="deck-arrow-green"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#34C759" />
                </marker>
              </defs>

              {/* Left: presentation.html */}
              <rect x="20" y="28" width="290" height="134" rx="18" fill="#FFFFFF" stroke="#0071E3" strokeWidth="1.8" />
              <text x="165" y="64" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0071E3">
                presentation.html
              </text>
              <text x="165" y="90" textAnchor="middle" fontSize="12" fill="#1D1D1F">
                1920×1080 Key-Point Slide Deck
              </text>
              <text x="165" y="114" textAnchor="middle" fontSize="11" fill="#68686E">
                Fullscreen (F) · Overview (O) · Notes (P)
              </text>
              <text x="165" y="138" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#0071E3">
                #slide-4 · data-showcase="architecture"
              </text>

              {/* Top Arrow: Slide -> Showcase */}
              <path
                d="M 310 66 C 415 34, 505 34, 606 66"
                fill="none"
                stroke="#0071E3"
                strokeWidth="2"
                markerEnd="url(#deck-arrow-blue)"
              />
              <rect x="355" y="16" width="210" height="28" rx="14" fill="#E8F2FD" />
              <text x="460" y="34" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="monospace" fill="#0071E3">
                ?from=4#architecture ↗
              </text>

              {/* Bottom Arrow: Showcase -> Slide */}
              <path
                d="M 610 126 C 505 158, 415 158, 314 126"
                fill="none"
                stroke="#34C759"
                strokeWidth="2"
                markerEnd="url(#deck-arrow-green)"
              />
              <rect x="368" y="148" width="184" height="28" rx="14" fill="#EAF8EE" />
              <text x="460" y="166" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="monospace" fill="#248A3D">
                ← presentation.html#slide-4
              </text>

              {/* Right: interactive-showcase.html */}
              <rect x="610" y="28" width="290" height="134" rx="18" fill="#FFFFFF" stroke="#34C759" strokeWidth="1.8" />
              <text x="755" y="64" textAnchor="middle" fontSize="14" fontWeight="700" fill="#248A3D">
                interactive-showcase.html
              </text>
              <text x="755" y="90" textAnchor="middle" fontSize="12" fill="#1D1D1F">
                Scrollable Deep-Dive Companion
              </text>
              <text x="755" y="114" textAnchor="middle" fontSize="11" fill="#68686E">
                Equations · Full Tables · Q&amp;A Accordions
              </text>
              <text x="755" y="138" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#248A3D">
                id="architecture" · data-slide="4"
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* 3. QUICK START & SHORTCUTS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bento-card p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
            <FileCode2 className="w-4 h-4" />
            <span>{language === 'ko' ? '빠른 시작 (3단계)' : 'Quick Start (3 Steps)'}</span>
          </div>
          <ol className="space-y-3 text-[13.5px] leading-relaxed text-[#1D1D1F]/85 dark:text-[#F5F5F7]/85">
            <li className="flex gap-3">
              <span className="font-mono font-bold text-[#0071E3] dark:text-[#2997FF] shrink-0">01</span>
              <span>
                {language === 'ko'
                  ? '위 다운로드 버튼으로 presentation.html과 interactive-showcase.html 두 파일을 같은 폴더에 저장합니다.'
                  : 'Download both presentation.html and interactive-showcase.html into the same folder.'}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono font-bold text-[#0071E3] dark:text-[#2997FF] shrink-0">02</span>
              <span>
                {language === 'ko'
                  ? '파일 내 ✏️ [커스텀] 주석과 <section class="slide-page"> 블록을 편집해 발표 내용·수식·참고 자료를 채웁니다.'
                  : 'Edit the ✏️ [커스텀] markers and <section class="slide-page"> blocks with your own slides, notes, and deep-dive sections.'}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono font-bold text-[#0071E3] dark:text-[#2997FF] shrink-0">03</span>
              <span>
                {language === 'ko'
                  ? 'presentation.html을 브라우저로 더블클릭해 열고 F 키로 전체화면 발표를 시작하세요.'
                  : 'Double-click presentation.html to open it in your browser and press F for fullscreen mode.'}
              </span>
            </li>
          </ol>
        </div>

        <div className="bento-card p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
            <Keyboard className="w-4 h-4" />
            <span>{language === 'ko' ? '내장 키보드 단축키' : 'Built-in Keyboard Shortcuts'}</span>
          </div>
          <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
            {shortcuts.map((s) => (
              <div key={s.key} className="py-2 first:pt-0 last:pb-0 flex items-center justify-between gap-3 text-xs">
                <span className="text-[#86868B]">{language === 'ko' ? s.ko : s.en}</span>
                <kbd className="px-2 py-0.5 rounded-md font-mono text-[11px] font-semibold bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.06] dark:border-white/[0.08] shrink-0">
                  {s.key}
                </kbd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
