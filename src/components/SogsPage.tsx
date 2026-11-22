import { useState } from 'react';
import { ArrowUpRight, Calculator, Github, Layers, ShieldCheck } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import type { LocalizedText } from '../types/profile';

type ScreenId = 'screener' | 'detail' | 'valuation' | 'calculator' | 'guide' | 'community';

interface SogsScreen {
  id: ScreenId;
  tabLabel: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  highlights: LocalizedText[];
}

const SOGS_SCREENS: SogsScreen[] = [
  {
    id: 'screener',
    tabLabel: { ko: '스크리너', en: 'Screener' },
    title: { ko: '국내 · 미국 우량주 스크리너', en: 'KR & US Value Stock Screener' },
    description: {
      ko: '종목명·티커 검색과 시장·핵심 판정·가치평가 필터로 종목 탐색. 현재가와 1~5개년 내재가치, 안전마진·신뢰도, 데이터 기준일 및 Stale 여부 비교.',
      en: 'Search and filter Korean & US equities by market, rule pass status, and valuation. Compare current price against 1–5yr intrinsic values, margin of safety, and data freshness (STALE).',
    },
    image: './assets/sogs/screener.png',
    highlights: [
      { ko: '시장별(NASDAQ · NYSE · KOSPI · KOSDAQ) 세그먼트 필터', en: 'Market segmented filters (NASDAQ, NYSE, KOSPI, KOSDAQ)' },
      { ko: '1~5개년 내재가치 · 안전마진 · 데이터 신뢰도 정렬', en: '1–5yr intrinsic value, margin of safety & confidence sorting' },
    ],
  },
  {
    id: 'detail',
    tabLabel: { ko: '종목 상세', en: 'Stock Detail' },
    title: { ko: '종목별 핵심 판정 및 재무 진단', en: 'Stock-Level Rule Diagnosis & Financials' },
    description: {
      ko: '핵심 판정·가치평가·기준 안전마진·신뢰도와 투자 규칙별 통과/미달 진단 제공. DCF 추정가치와 연차 재무 추이 통합 조회.',
      en: 'Inspect rule-by-rule pass/fail diagnostics, DCF intrinsic valuation, margin of safety, and multi-year financial statement trends.',
    },
    image: './assets/sogs/stock-detail.png',
    highlights: [
      { ko: '핵심·보조 가치투자 규칙별 Pass / Fail / N/A 진단', en: 'Rule-by-rule Pass / Fail / N/A fundamental diagnostics' },
      { ko: 'DCF 추정가치 및 연차 재무지표 시각화', en: 'DCF fair-value breakdown and annual financial trends' },
    ],
  },
  {
    id: 'valuation',
    tabLabel: { ko: '내재가치 분석', en: 'Valuation' },
    title: { ko: '기간별 내재가치 추이 분석', en: 'Multi-Horizon Intrinsic Value Analysis' },
    description: {
      ko: '1~5개년 재무자료 구간에 따른 내재가치 변동과 현재가 대비 안전마진 비교.',
      en: 'Compare intrinsic value estimates across 1- to 5-year financial windows against current market price and margin of safety.',
    },
    image: './assets/sogs/valuation.png',
    highlights: [
      { ko: 'Normalized OEPS(정규화 소유주 이익) 기반 내재가치 산출', en: 'Intrinsic value computed from Normalized Owner Earnings (OEPS)' },
      { ko: '기간별(1~5개년) 추정치 일관성 및 안전마진 비교', en: 'Cross-window consistency and margin-of-safety comparison' },
    ],
  },
  {
    id: 'calculator',
    tabLabel: { ko: '계산기 · 관리', en: 'Calculator' },
    title: { ko: '내재가치 계산기 · 원자료 관리', en: 'Valuation Calculator & Raw Data Config' },
    description: {
      ko: '종목별 계산 기준일, CAPEX, 주주이익 정규화·성장률·할인율 조건을 조정해 시나리오별 내재가치 시뮬레이션.',
      en: 'Configure reference date, CAPEX assumptions, normalized owner earnings, growth rates, and discount rates for scenario sensitivity analysis.',
    },
    image: './assets/sogs/valuation-calculator.png',
    highlights: [
      { ko: '성장률 · 할인율 · CAPEX 파라미터 시나리오 시뮬레이션', en: 'Interactive growth, discount rate, and CAPEX sensitivity' },
      { ko: '로컬 재무 원자료 및 기준일 관리', en: 'Local financial filing and reference-date management' },
    ],
  },
  {
    id: 'guide',
    tabLabel: { ko: '투자 원칙 가이드', en: 'Guide' },
    title: { ko: '워런 버핏 · 피터 린치 투자 원칙 가이드', en: 'Value Investing Principles & Formula Guide' },
    description: {
      ko: '핵심·가치평가·자본행동·보조 규칙별 판정 기준과 재무 지표 산출 공식 문서화.',
      en: 'Clear documentation of Warren Buffett & Peter Lynch screening rules, capital allocation checks, and underlying financial formulas.',
    },
    image: './assets/sogs/guide.png',
    highlights: [
      { ko: '11대 가치투자 원칙 및 지표 산출 공식 정리', en: 'Core value-investing rules and transparent formula definitions' },
      { ko: '핵심 · 가치평가 · 자본행동 · 보조 규칙 계층화', en: 'Structured hierarchy across core, valuation, and capital checks' },
    ],
  },
  {
    id: 'community',
    tabLabel: { ko: '분석 게시판', en: 'Community' },
    title: { ko: '내재가치 분석 게시판', en: 'Intrinsic Value Analysis Board' },
    description: {
      ko: '종목별 투자 의견과 내재가치 분석 노트를 검색하고 최신순·추천순으로 탐색하는 분석 아카이브.',
      en: 'Searchable archive of stock-level valuation notes and investment theses sorted by recency or upvotes.',
    },
    image: './assets/sogs/community.png',
    highlights: [
      { ko: '종목 티커 연동 분석 노트 검색 및 정렬', en: 'Ticker-linked thesis search and sorting' },
      { ko: '컨테이너 쿼리 기반 반응형 피드 레이아웃', en: 'CSS container-query responsive feed layout' },
    ],
  },
];

export function SogsPage() {
  const { language, pick } = useThemeLanguage();
  const [activeScreenId, setActiveScreenId] = useState<ScreenId>('screener');

  const activeScreen =
    SOGS_SCREENS.find((screen) => screen.id === activeScreenId) ?? SOGS_SCREENS[0];

  return (
    <div className="pt-8 sm:pt-12 space-y-14 sm:space-y-16">
      {/* 1. HERO SECTION */}
      <section className="space-y-6">
        <div className="bento-card p-7 sm:p-10 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#E8F2FD] dark:bg-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF]">
                Value Investing
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11.5px] font-medium bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#86868B]">
                KR &amp; US Equities
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11.5px] font-medium bg-[#EAF8EE] dark:bg-[#30D158]/15 text-[#248A3D] dark:text-[#30D158]">
                Direct Indexing ETF
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.18] text-[#1D1D1F] dark:text-[#F5F5F7]">
              Search Only Good Stock (SOGS)
            </h1>
            <p className="text-[15px] leading-[1.75] text-[#86868B] max-w-[760px]">
              {language === 'ko'
                ? '워런 버핏 가치투자 원칙 기반 국내·미국 우량주 발굴 및 내재가치 분석 플랫폼. 종목별 Normalized OEPS·성장률·할인율로 내재가치를 산출하고 펀더멘털 필터링을 거쳐 Direct Indexing 개인 ETF를 구축.'
                : 'A quantitative value-investing platform for Korean and US equities built on Warren Buffett principles — computing intrinsic value from Normalized OEPS, filtering fundamentals, and constructing a Direct Indexing personal ETF.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
            <a
              href="https://github.com/sib-jhpark/search-only-good-stock-fe"
              target="_blank"
              rel="noreferrer"
              className="bento-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Frontend Repo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/sib-jhpark/search-only-good-stock"
              target="_blank"
              rel="noreferrer"
              className="bento-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7]"
            >
              <Github className="w-3.5 h-3.5 text-[#86868B]" />
              <span>Backend Repo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B]" />
            </a>
          </div>
        </div>

        {/* 3 Pillar Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bento-card p-6 space-y-2.5">
            <Calculator className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
            <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {language === 'ko' ? '1. 종목별 내재가치 계산' : '1. Intrinsic Valuation'}
            </h2>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? 'Normalized OEPS(정규화 소유주 이익), 성장률, 할인율 기반 1~5개년 현금흐름(DCF) 내재가치 및 안전마진 산출'
                : '1–5yr DCF intrinsic value and margin of safety based on Normalized OEPS, growth, and discount rates.'}
            </p>
          </div>

          <div className="bento-card p-6 space-y-2.5">
            <ShieldCheck className="w-4 h-4 text-[#34C759] dark:text-[#30D158]" />
            <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {language === 'ko' ? '2. 펀더멘털 필터링' : '2. Fundamental Filtering'}
            </h2>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? 'ROE, 부채비율, 주주이익 등 핵심 가치투자 기준 자동 판정 및 Stale 데이터 신선도·신뢰도 표시'
                : 'Automated screening on ROE, debt ratio, and owner earnings with explicit data freshness (STALE) flags.'}
            </p>
          </div>

          <div className="bento-card p-6 space-y-2.5">
            <Layers className="w-4 h-4 text-[#D97706] dark:text-[#F59E0B]" />
            <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {language === 'ko' ? '3. Direct Indexing 개인 ETF' : '3. Direct Indexing ETF'}
            </h2>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? '안전마진과 펀더멘털 기준을 통과한 우량 종목을 선별해 Direct Indexing 방식의 개인 ETF 포트폴리오 구축'
                : 'Selects fundamentally sound, undervalued equities to construct a custom Direct Indexing personal ETF.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SCREEN SHOWCASE */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
              Product Preview
            </p>
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
              {language === 'ko' ? '주요 실행 화면' : 'Interface Showcase'}
            </h2>
          </div>

          {/* Apple-Style Segmented Control */}
          <div
            role="tablist"
            aria-label="SOGS screens"
            className="inline-flex items-center rounded-full bg-[#EBEBED] dark:bg-[#1C1C1E] p-1 border border-black/[0.04] dark:border-white/[0.08] self-start sm:self-auto overflow-x-auto no-scrollbar max-w-full"
          >
            {SOGS_SCREENS.map((screen) => {
              const selected = screen.id === activeScreen.id;
              return (
                <button
                  key={screen.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveScreenId(screen.id)}
                  className={`bento-pill px-3 py-1.5 text-xs font-medium whitespace-nowrap ${
                    selected
                      ? 'bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] shadow-apple-pill font-semibold'
                      : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                  }`}
                >
                  {pick(screen.tabLabel)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bento-card p-5 sm:p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-[-0.015em] text-[#1D1D1F] dark:text-[#F5F5F7]">
                {pick(activeScreen.title)}
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#86868B] leading-relaxed">
                {pick(activeScreen.description)}
              </p>
            </div>
            <span className="text-[11px] font-mono tabular-nums text-[#A1A1A6] shrink-0">
              2026-10-11 capture
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-[#F5F5F7] dark:bg-[#141416]">
            <img
              src={activeScreen.image}
              alt={pick(activeScreen.title)}
              className="w-full h-auto block"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {activeScreen.highlights.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F]/80 dark:text-[#F5F5F7]/80"
              >
                {pick(item)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURE & TECH STACK */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bento-card p-6 sm:p-7 space-y-4">
          <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            {language === 'ko' ? '시스템 아키텍처' : 'System Architecture'}
          </h3>
          <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-[#86868B]">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0071E3] dark:bg-[#2997FF] shrink-0" />
              <span>
                <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">FE / BE 저장소 분리:</strong>{' '}
                {language === 'ko'
                  ? 'React(FE)와 FastAPI(BE)를 독립 운영하고 OpenAPI 스펙 기반 TypeScript 타입 계약 자동 동기화'
                  : 'Decoupled React FE and FastAPI BE repositories synchronized via OpenAPI-generated TypeScript contracts.'}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0071E3] dark:bg-[#2997FF] shrink-0" />
              <span>
                <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Modern Bento UI:</strong>{' '}
                {language === 'ko'
                  ? 'Pretendard + JetBrains Mono(tabular-nums) 숫자 정밀 정렬, 라이트/다크 모드 및 한/영 다국어 지원'
                  : 'Tabular monospace financial alignment, light/dark modes, and KO/EN bilingual support.'}
              </span>
            </li>
          </ul>
        </div>

        <div className="bento-card p-6 sm:p-7 space-y-4">
          <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            {language === 'ko' ? '기술 스택' : 'Tech Stack'}
          </h3>
          <div className="space-y-3">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#86868B] mb-2">
                Frontend
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'Vitest'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#E8F2FD] dark:bg-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#86868B] mb-2">
                Backend
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'FastAPI', 'Pydantic', 'OpenAPI', 'uv'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F]/80 dark:text-[#F5F5F7]/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
