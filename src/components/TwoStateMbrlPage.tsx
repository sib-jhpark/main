import { useRef, useState } from 'react';
import { AlertCircle, Check, Copy, FileText, Play, TrendingUp } from 'lucide-react';

type DemoTab = 'polybag' | 'threeball' | 'other';
type OutcomeTone = 'success' | 'recovery' | 'posture' | 'failure';

interface VideoDemoItem {
  id: string;
  src: string;
  pathLabel: string;
  outcome: string;
  tone: OutcomeTone;
  title: string;
  caption: string;
}

const DEMO_TABS: { id: DemoTab; label: string }[] = [
  { id: 'polybag', label: '1. Polybag Picking (4)' },
  { id: 'threeball', label: '2. Three-Ball Target Picking (3)' },
  { id: 'other', label: '3. Crate Transport & Cylinder (2)' },
];

const DEMO_VIDEOS: Record<DemoTab, VideoDemoItem[]> = {
  polybag: [
    {
      id: 'polybag-central',
      src: './assets/videos/polybag_central_1st.mp4',
      pathLabel: 'assets/videos/polybag_central_1st.mp4',
      outcome: '1st-Attempt',
      tone: 'success',
      title: 'First-Attempt Delivery',
      caption: 'Direct grasp and delivery from a central placement (11.4 s median cycle).',
    },
    {
      id: 'polybag-corner',
      src: './assets/videos/polybag_corner_retry.mp4',
      pathLabel: 'assets/videos/polybag_corner_retry.mp4',
      outcome: 'Retry Recovery',
      tone: 'recovery',
      title: 'Same-Object Retry Recovery',
      caption: 'Missed first grasp near a corner followed by autonomous re-observation and recovery (98.98% conditional retry recovery).',
    },
    {
      id: 'polybag-challenging-pose',
      src: './assets/videos/polybag_challenging_pose.mp4',
      pathLabel: 'assets/videos/polybag_challenging_pose.mp4',
      outcome: 'Pose Recovery',
      tone: 'posture',
      title: 'Challenging Orientation Recovery',
      caption: 'Autonomous recovery from an unfavorable initial orientation and completion of delivery.',
    },
    {
      id: 'polybag-failure-case',
      src: './assets/videos/polybag_failure_case.mp4',
      pathLabel: 'assets/videos/polybag_failure_case.mp4',
      outcome: 'Failure Case',
      tone: 'failure',
      title: 'Representative Failure Case',
      caption: 'Unrecoverable drop outside the crate boundary.',
    },
  ],
  threeball: [
    {
      id: 'ball-direct-pick',
      src: './assets/videos/ball_direct_pick.mp4',
      pathLabel: 'assets/videos/ball_direct_pick.mp4',
      outcome: '1st-Attempt',
      tone: 'success',
      title: 'Direct Target Pick',
      caption: 'Selecting and delivering only the designated ball among three (0 wrong balls).',
    },
    {
      id: 'ball-clutter-clearance',
      src: './assets/videos/ball_clutter_clearance.mp4',
      pathLabel: 'assets/videos/ball_clutter_clearance.mp4',
      outcome: 'Clutter Handling',
      tone: 'posture',
      title: 'Clutter Handling',
      caption: 'Creating clearance around an obstructed target ball before re-observing and picking.',
    },
    {
      id: 'ball-retry-recovery',
      src: './assets/videos/ball_retry_recovery.mp4',
      pathLabel: 'assets/videos/ball_retry_recovery.mp4',
      outcome: 'Retry Recovery',
      tone: 'recovery',
      title: 'Same-Target Retry',
      caption: 'Recovering after a missed initial attempt on the same target ball.',
    },
  ],
  other: [
    {
      id: 'crate-continuous',
      src: './assets/videos/crate_continuous.mp4',
      pathLabel: 'assets/videos/crate_continuous.mp4',
      outcome: '91.1% (82/90)',
      tone: 'success',
      title: 'Continuous H1-2 Dual-Hand Crate Transport',
      caption: '30 crates each at 88 / 90 / 92 cm heights: 82/90 physical transports, 90/90 auto returns, 1.51–1.61 crates/min.',
    },
    {
      id: 'cylinder-9zone',
      src: './assets/videos/cylinder_9zone.mp4',
      pathLabel: 'assets/videos/cylinder_9zone.mp4',
      outcome: '95.1% (5 seeds)',
      tone: 'success',
      title: '9-Zone Unitree H1 + Shadow Hand Grasp-and-Hold',
      caption: '95.1% joint grasp-and-hold on 90 unseen scenes (≥ 88% in every zone) vs. 75.6% pre-online (+19.6%p gain).',
    },
  ],
};

const BIBTEX_TEXT = `@article{park2026twostate,
  title   = {I Don't Think When I Pick It Up: Two-State Model-Based Reinforcement Learning for Humanoid Robot Control},
  author  = {Park, Jaehyun},
  journal = {arXiv preprint arXiv:XXXX.XXXXX},
  year    = {2026}
}`;

function outcomeClasses(tone: OutcomeTone): string {
  switch (tone) {
    case 'success':
      return 'bg-[#EAF8EE] dark:bg-[#30D158]/15 text-[#248A3D] dark:text-[#30D158]';
    case 'recovery':
      return 'bg-[#E8F2FD] dark:bg-[#2997FF]/15 text-[#0071E3] dark:text-[#2997FF]';
    case 'posture':
      return 'bg-[#FFF4E5] dark:bg-[#FF9F0A]/15 text-[#C93400] dark:text-[#FF9F0A]';
    case 'failure':
      return 'bg-[#FEECEB] dark:bg-[#FF453A]/15 text-[#D70015] dark:text-[#FF453A]';
  }
}

function VideoSlot({
  src,
  pathLabel,
  title,
  autoPlay = false,
  speed,
}: {
  src: string;
  pathLabel: string;
  title: string;
  autoPlay?: boolean;
  speed: 1 | 2;
}) {
  const [missing, setMissing] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (videoRef.current && videoRef.current.playbackRate !== speed) {
    videoRef.current.playbackRate = speed;
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-[#F5F5F7] dark:bg-[#2C2C2E]/60">
      {!missing ? (
        <video
          ref={videoRef}
          muted
          autoPlay={autoPlay}
          loop
          playsInline
          controls
          preload="metadata"
          onError={() => setMissing(true)}
          onLoadedMetadata={() => {
            if (videoRef.current) videoRef.current.playbackRate = speed;
          }}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" onError={() => setMissing(true)} />
        </video>
      ) : (
        <div className="w-full h-full p-5 flex flex-col items-center justify-center text-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.1] flex items-center justify-center text-[#0071E3] dark:text-[#2997FF] shadow-apple-pill">
            <Play className="w-4 h-4 fill-current" />
          </div>
          <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">{title}</div>
          <code className="px-2.5 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-[11px] font-mono text-[#86868B] break-all">
            {pathLabel}
          </code>
        </div>
      )}
    </div>
  );
}

function FigureSlot({
  src,
  pathLabel,
  title,
  hint,
}: {
  src: string;
  pathLabel: string;
  title: string;
  hint: string;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <div className="bento-card p-4">
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-black/[0.05] dark:border-white/[0.08] bg-[#F5F5F7] dark:bg-[#2C2C2E]/60">
        {!missing ? (
          <img
            src={src}
            alt={title}
            onError={() => setMissing(true)}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.1] flex items-center justify-center text-[#0071E3] dark:text-[#2997FF] shadow-apple-pill">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">{title}</div>
            <code className="px-2.5 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-[11px] font-mono text-[#86868B] break-all">
              {pathLabel}
            </code>
            <p className="text-xs text-[#86868B] max-w-[340px]">{hint}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function VideoDemoCard({ item }: { item: VideoDemoItem }) {
  const [speed, setSpeed] = useState<1 | 2>(1);

  return (
    <article className="bento-card p-5 flex flex-col gap-3.5">
      <div className="flex items-center justify-between gap-2">
        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${outcomeClasses(item.tone)}`}>
          {item.outcome}
        </span>
        <button
          type="button"
          onClick={() => setSpeed((prev) => (prev === 1 ? 2 : 1))}
          className="bento-pill px-2.5 py-0.5 text-[11px] font-mono font-bold bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.06] dark:border-white/[0.08]"
          title="Toggle playback speed"
        >
          {speed}x
        </button>
      </div>

      <VideoSlot src={item.src} pathLabel={item.pathLabel} title={item.title} speed={speed} />

      <div className="space-y-1">
        <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#1D1D1F] dark:text-[#F5F5F7]">
          {item.title}
        </h3>
        <p className="text-xs leading-relaxed text-[#86868B]">{item.caption}</p>
      </div>
    </article>
  );
}

export function TwoStateMbrlPage() {
  const [activeTab, setActiveTab] = useState<DemoTab>('polybag');
  const [teaserSpeed, setTeaserSpeed] = useState<1 | 2>(1);
  const [archMissing, setArchMissing] = useState(false);
  const [copiedBib, setCopiedBib] = useState(false);

  const handleCopyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(BIBTEX_TEXT);
      setCopiedBib(true);
      window.setTimeout(() => setCopiedBib(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <div className="pt-8 sm:pt-12 space-y-16 sm:space-y-20">
      {/* 1. HERO SECTION */}
      <section className="space-y-6">
        <div className="text-center max-w-[860px] mx-auto space-y-4">
          {/* Dual-State Semantic Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11.5px] font-mono font-semibold bg-[#E8F2FD] dark:bg-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF]">
              s0 · Unacquired
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11.5px] font-mono font-semibold bg-[#FEECEB] dark:bg-[#FF453A]/20 text-[#D70015] dark:text-[#FF453A]">
              s1 · Acquired
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11.5px] font-medium bg-[#F5F5F7] dark:bg-[#1C1C1E] text-[#86868B] border border-black/[0.06] dark:border-white/[0.08]">
              MuJoCo Simulation
            </span>
          </div>

          <h1 className="text-[28px] sm:text-[40px] font-bold tracking-[-0.03em] leading-[1.18] text-[#1D1D1F] dark:text-[#F5F5F7]">
            I Don&apos;t Think When I Pick It Up
            <span className="block text-[17px] sm:text-[21px] font-medium text-[#86868B] mt-2 tracking-[-0.015em]">
              Two-State Model-Based Reinforcement Learning for Humanoid Robot Control
            </span>
          </h1>

          <div className="space-y-1 pt-1">
            <p className="text-[15px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Jaehyun Park</p>
            <p className="text-xs sm:text-[13px] text-[#86868B]">
              Optimization &amp; Software Engineer, Smart Logistics AX Team, LG CNS ·{' '}
              <a
                href="mailto:jhpark@alumni.kaist.ac.kr"
                className="font-mono text-[#0071E3] dark:text-[#2997FF] hover:underline"
              >
                jhpark@alumni.kaist.ac.kr
              </a>
            </p>
          </div>

          {/* CTA Pills (Paper & BibTeX only) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <a
              href="#TODO-arxiv-pdf"
              data-todo="arxiv-pdf"
              className="bento-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-[#1D1D1F] hover:opacity-90"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Paper (arXiv)</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-[#FF9500]/20 text-[#FF9500] dark:text-[#C93400]">
                TODO
              </span>
            </a>
            <a
              href="#bibtex"
              className="bento-pill inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-white dark:bg-[#1C1C1E] hover:bg-[#F5F5F7] dark:hover:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.08] dark:border-white/[0.1]"
            >
              <span>BibTeX</span>
            </a>
          </div>
        </div>

        {/* Teaser Video Bento Card + Conceptual State-Transition Strip */}
        <div className="bento-card p-5 space-y-3.5">
          <VideoSlot
            src="./assets/videos/teaser.mp4"
            pathLabel="assets/videos/teaser.mp4"
            title="Teaser Video Slot (16:9 · MuJoCo Simulation)"
            autoPlay
            speed={teaserSpeed}
          />

          <div className="rounded-2xl bg-[#1D1D1F] dark:bg-black border border-white/[0.08] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#F5F5F7]">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="px-2 py-0.5 rounded-md bg-[#0071E3]/30 text-[#60A5FA] font-semibold">
                s0 (Unacquired)
              </span>
              <span className="text-[#86868B]">→</span>
              <span className="px-2 py-0.5 rounded-md bg-white/10">Controller Action Sequence</span>
              <span className="text-[#86868B]">→</span>
              <span className="px-2 py-0.5 rounded-md bg-[#FF3B30]/30 text-[#FCA5A5] font-semibold">
                s1 (Acquired)
              </span>
              <span className="text-[#86868B]">→</span>
              <span className="px-2 py-0.5 rounded-md bg-white/10">Delivery &amp; Return</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] text-[#86868B]">MuJoCo Simulation</span>
              <button
                type="button"
                onClick={() => setTeaserSpeed((prev) => (prev === 1 ? 2 : 1))}
                className="bento-pill px-2.5 py-0.5 text-[11px] font-bold bg-white/15 hover:bg-white/25 text-white"
              >
                {teaserSpeed}x
              </button>
            </div>
          </div>
        </div>

        {/* 3 Concise KPI Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bento-card p-6 space-y-2">
            <div className="text-[28px] font-bold font-mono tabular-nums tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              99.75%
            </div>
            <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Polybag Crate Delivery</div>
            <p className="text-xs text-[#86868B] leading-relaxed">
              1,197/1,200 independent test (95% LB 99.36%). Full closed-loop system; 85.00% for base 10k online policy alone.
            </p>
          </div>
          <div className="bento-card p-6 space-y-2">
            <div className="text-[28px] font-bold font-mono tabular-nums tracking-tight text-[#0071E3] dark:text-[#2997FF]">
              +14.0%p
            </div>
            <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Three-Ball Target Picking</div>
            <p className="text-xs text-[#86868B] leading-relaxed">
              83.50% vs. 69.50% paired baseline (N=1,200 · 0 wrong balls in tray · +4.68 s/delivery cost).
            </p>
          </div>
          <div className="bento-card p-6 space-y-2">
            <div className="text-[28px] font-bold font-mono tabular-nums tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              95.1%
            </div>
            <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">9-Zone Cylinder Grasp-and-Hold</div>
            <p className="text-xs text-[#86868B] leading-relaxed">
              Unitree H1 + Shadow Hand · 5 seeds on 90 unseen scenes (≥ 88% in every zone, +19.6%p online gain).
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABSTRACT & CORE IDEA */}
      <section id="abstract" className="scroll-mt-20">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
            Overview
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            Abstract &amp; Core Idea
          </h2>
        </div>

        <div className="bento-card p-6 sm:p-8 space-y-6">
          <div className="space-y-3 text-[14.5px] leading-[1.75] text-[#1D1D1F]/85 dark:text-[#F5F5F7]/85">
            <p>
              We discretize local humanoid manipulation into two task states —{' '}
              <span className="font-mono font-semibold text-[#0071E3] dark:text-[#2997FF]">s0 (unacquired)</span> and{' '}
              <span className="font-mono font-semibold text-[#D70015] dark:text-[#FF453A]">s1 (acquired)</span> —
              inferred from onboard camera observations and lift-time tactile feedback. Instead of continuous joint-space RL,
              actions are drawn from <strong>a finite vocabulary of temporally extended controller-input sequences</strong>{' '}
              (discrete button combinations, quantized analog inputs, and press durations) executed by a fixed low-level controller.
            </p>
            <p className="text-[#86868B]">
              Decision-making is driven by <strong>a visual-context-conditioned two-state transition model learned online from sensor feedback alone</strong>{' '}
              via Bayesian posterior sampling and time-aware planning (physical ground-truth labels are strictly reserved for evaluation).
            </p>
          </div>

          {/* High-Level Concept Overview Diagram Slot (PNG with Inline SVG Fallback) */}
          <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-[#FBFBFD] dark:bg-[#141416] p-4 sm:p-6">
            {!archMissing ? (
              <img
                src="./assets/figures/architecture.png"
                alt="Two-State MBRL High-Level Concept Overview"
                onError={() => setArchMissing(true)}
                className="w-full h-auto rounded-xl"
              />
            ) : (
              <div className="space-y-3">
                <div className="overflow-x-auto">
                  <svg viewBox="0 0 960 150" className="w-full min-w-[700px] h-auto" role="img" aria-label="Two-State MBRL Concept Overview">
                    <defs>
                      <marker id="ts-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#86868B" />
                      </marker>
                    </defs>

                    {/* 1. Onboard Camera */}
                    <rect x="8" y="30" width="150" height="84" rx="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
                    <text x="83" y="68" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1D1D1F">Onboard Camera</text>
                    <text x="83" y="88" textAnchor="middle" fontSize="11" fill="#6B7280">&amp; Tactile Sensor</text>

                    <line x1="158" y1="72" x2="188" y2="72" stroke="#86868B" strokeWidth="1.8" markerEnd="url(#ts-arrow)" />

                    {/* 2. Binary Task State (s0 / s1) + Visual Context */}
                    <rect x="192" y="24" width="196" height="96" rx="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
                    <text x="290" y="54" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1D1D1F">Binary Task State</text>
                    <rect x="212" y="64" width="70" height="22" rx="11" fill="#E8F2FD" />
                    <text x="247" y="79" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0071E3">s0</text>
                    <rect x="298" y="64" width="70" height="22" rx="11" fill="#FEECEB" />
                    <text x="333" y="79" textAnchor="middle" fontSize="11" fontWeight="700" fill="#D70015">s1</text>
                    <text x="290" y="106" textAnchor="middle" fontSize="11" fill="#6B7280">+ Visual Context</text>

                    <line x1="388" y1="72" x2="418" y2="72" stroke="#86868B" strokeWidth="1.8" markerEnd="url(#ts-arrow)" />

                    {/* 3. Online Two-State World Model */}
                    <rect x="422" y="24" width="186" height="96" rx="14" fill="#E8F2FD" stroke="#0071E3" strokeWidth="1.6" />
                    <text x="515" y="62" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1D1D1F">Online Two-State</text>
                    <text x="515" y="80" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0071E3">World Model</text>
                    <text x="515" y="102" textAnchor="middle" fontSize="10.5" fill="#4B5563">Bayesian + Time-Aware</text>

                    <line x1="608" y1="72" x2="638" y2="72" stroke="#86868B" strokeWidth="1.8" markerEnd="url(#ts-arrow)" />

                    {/* 4. Finite Controller Sequence */}
                    <rect x="642" y="30" width="146" height="84" rx="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
                    <text x="715" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1D1D1F">Finite Controller</text>
                    <text x="715" y="86" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1D1D1F">Sequence</text>

                    <line x1="788" y1="72" x2="818" y2="72" stroke="#86868B" strokeWidth="1.8" markerEnd="url(#ts-arrow)" />

                    {/* 5. Low-Level Humanoid Controller */}
                    <rect x="822" y="30" width="130" height="84" rx="14" fill="#1D1D1F" />
                    <text x="887" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="#F5F5F7">Low-Level</text>
                    <text x="887" y="84" textAnchor="middle" fontSize="11.5" fill="#D1D5DB">Humanoid</text>
                    <text x="887" y="100" textAnchor="middle" fontSize="11.5" fill="#D1D5DB">Controller</text>
                  </svg>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#86868B]">
                  <span>
                    Concept overview fallback shown until high-res figure is placed at{' '}
                    <code className="font-mono">public/assets/figures/architecture.png</code>.
                  </span>
                  <span className="font-mono">Sensor feedback only · GT eval only</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. VIDEO DEMOS BY TASK */}
      <section id="demos" className="scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
              Qualitative Rollouts (MuJoCo Simulation)
            </p>
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
              Video Demos by Task
            </h2>
          </div>

          {/* Apple-Style Segmented Tabs */}
          <div
            role="tablist"
            aria-label="Task video demos"
            className="inline-flex items-center rounded-full bg-[#EBEBED] dark:bg-[#1C1C1E] p-1 border border-black/[0.04] dark:border-white/[0.08] self-start sm:self-auto overflow-x-auto no-scrollbar max-w-full"
          >
            {DEMO_TABS.map((tab) => {
              const selected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`bento-pill px-3.5 py-1.5 text-xs font-medium whitespace-nowrap ${
                    selected
                      ? 'bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] shadow-apple-pill font-semibold'
                      : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`grid grid-cols-1 ${
            activeTab === 'threeball' ? 'md:grid-cols-3' : 'md:grid-cols-2'
          } gap-5`}
        >
          {DEMO_VIDEOS[activeTab].map((item) => (
            <VideoDemoCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 4. QUANTITATIVE RESULTS & HONEST DIAGNOSTICS */}
      <section id="results" className="scroll-mt-20 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
            Pre-Registered &amp; Audited MuJoCo Benchmarks
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            Quantitative Results &amp; Diagnostics
          </h2>
          <p className="text-sm text-[#86868B] mt-1.5">
            All time metrics (seconds per delivery) include failures, retries, and return-to-ready time. Independent tests have zero overlap with prior physical initial states.
          </p>
        </div>

        {/* Clean 2-Row Polybag Summary Table */}
        <div className="bento-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[13px]">
              <thead>
                <tr className="border-b border-black/[0.06] dark:border-white/[0.08] bg-[#F5F5F7]/70 dark:bg-[#2C2C2E]/40 text-[11.5px] font-semibold text-[#86868B]">
                  <th className="py-3.5 px-5 min-w-[260px]">System</th>
                  <th className="py-3.5 px-4 text-right whitespace-nowrap">1st-Attempt</th>
                  <th className="py-3.5 px-4 text-right whitespace-nowrap">≤ 2 Attempts</th>
                  <th className="py-3.5 px-4 text-right whitespace-nowrap">Final Physical Delivery</th>
                  <th className="py-3.5 px-4 text-right whitespace-nowrap">One-Sided 95% LB</th>
                  <th className="py-3.5 px-5 text-right whitespace-nowrap">Time / Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06] font-mono tabular-nums">
                <tr>
                  <td className="py-3.5 px-5 font-sans text-[#1D1D1F] dark:text-[#F5F5F7]">
                    Base Online Policy (10k rounds, 1 seed)
                  </td>
                  <td className="py-3.5 px-4 text-right">65.8%</td>
                  <td className="py-3.5 px-4 text-right">79.8%</td>
                  <td className="py-3.5 px-4 text-right">1,020 / 1,200 (85.00%)</td>
                  <td className="py-3.5 px-4 text-right">83.20%</td>
                  <td className="py-3.5 px-5 text-right">24.17 s</td>
                </tr>
                <tr className="bg-[#E8F2FD]/60 dark:bg-[#0071E3]/15 font-semibold">
                  <td className="py-3.5 px-5 font-sans text-[#1D1D1F] dark:text-[#F5F5F7]">
                    Full Closed-Loop System (Online Model + Recovery Primitives)
                  </td>
                  <td className="py-3.5 px-4 text-right">82.1%</td>
                  <td className="py-3.5 px-4 text-right">94.3%</td>
                  <td className="py-3.5 px-4 text-right text-[#0071E3] dark:text-[#2997FF]">
                    1,197 / 1,200 (99.75%)
                  </td>
                  <td className="py-3.5 px-4 text-right">99.36% (p = 0.0022)</td>
                  <td className="py-3.5 px-5 text-right">17.46 s</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 border-t border-black/[0.04] dark:border-white/[0.06] bg-[#FBFBFD] dark:bg-[#141416] text-xs leading-relaxed text-[#86868B]">
            The full closed-loop system combines the online-learned transition model with task-specific recovery primitives.
            All reported times include failures, retries, and return-to-ready. Conditional retry recovery after a 1st-attempt grasp-sensor negative:
            <strong className="font-mono text-[#1D1D1F] dark:text-[#F5F5F7]"> 98.98% (194/196)</strong>; completion time (failures/unready = ∞):
            median <span className="font-mono">11.43 s</span>, p90 <span className="font-mono">27.87 s</span>.
          </div>
        </div>

        {/* Stratum Breakdown Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bento-card p-6 space-y-4">
            <div>
              <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                Polybag Stratum Breakdown (Final N=1,200)
              </h3>
              <p className="text-xs text-[#86868B] mt-0.5">1st-attempt vs. final delivery across crate regions</p>
            </div>

            <div className="space-y-3.5">
              {[
                { name: 'Central (436/436 · 13.71 s)', first: 91.5, final: 100.0 },
                { name: 'Wall (374/374 · 18.03 s)', first: 79.7, final: 100.0 },
                { name: 'Corner (387/390 · 21.14 s)', first: 73.8, final: 99.23 },
              ].map((row) => (
                <div key={row.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">{row.name}</span>
                    <span className="font-mono tabular-nums text-[#86868B]">
                      {row.first}% → <strong className="text-[#0071E3] dark:text-[#2997FF]">{row.final.toFixed(2)}%</strong>
                    </span>
                  </div>
                  <div className="relative h-2.5 rounded-full bg-[#F5F5F7] dark:bg-[#2C2C2E] overflow-hidden">
                    <div className="absolute inset-y-0 left-0 rounded-full bg-[#0071E3] dark:bg-[#2997FF]" style={{ width: `${row.final}%` }} />
                    <div className="absolute inset-y-0 left-0 rounded-full bg-[#93C5FD]" style={{ width: `${row.first}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#86868B] pt-1">
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#93C5FD]" />1st-Attempt</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#0071E3]" />Final Delivery</span>
            </div>
          </div>

          <div className="bento-card p-6 space-y-4">
            <div>
              <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                Three-Ball Target Picking (Paired N=1,200)
              </h3>
              <p className="text-xs text-[#86868B] mt-0.5">
                Two-State Model + Retry: 83.50% (32.73 s) vs. Baseline: 69.50% (28.05 s) · +14.02%p (95% CI: +11.44 to +16.61%p)
              </p>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Free (290/299)', pct: 97.0 },
                { name: 'Neighbor (253/298)', pct: 84.9 },
                { name: 'Wall (236/302)', pct: 78.1 },
                { name: 'Corner (223/301)', pct: 74.1 },
              ].map((row) => (
                <div key={row.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">{row.name}</span>
                    <span className="font-mono tabular-nums font-semibold text-[#0071E3] dark:text-[#2997FF]">
                      {row.pct.toFixed(1)}%
                    </span>
                  </div>
                  <div className="relative h-2.5 rounded-full bg-[#F5F5F7] dark:bg-[#2C2C2E] overflow-hidden">
                    <div className="absolute inset-y-0 left-0 rounded-full bg-[#0071E3] dark:bg-[#2997FF]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#86868B] leading-relaxed">
              225 exclusive wins vs. 57 exclusive losses · 1,200/1,200 ready return · 0 wrong balls in tray. Did not meet 99% reliability or time-reduction threshold (+4.68 s/delivery cost).
            </p>
          </div>
        </div>

        {/* Tasks 3 & 4 Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bento-card p-6 space-y-2">
            <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Continuous H1-2 Crate Transport
            </h3>
            <p className="text-[13.5px] leading-relaxed text-[#86868B]">
              Fixed-base H1-2 with dual Shadow Hands across 30 crates at 88 / 90 / 92 cm heights under a continuous clock:{' '}
              <strong className="font-mono text-[#1D1D1F] dark:text-[#F5F5F7]">82/90 (91.1%)</strong> physical transports,{' '}
              <strong className="font-mono text-[#1D1D1F] dark:text-[#F5F5F7]">90/90</strong> automatic returns,{' '}
              <strong className="font-mono text-[#1D1D1F] dark:text-[#F5F5F7]">1.51–1.61 crates/min</strong>.
            </p>
          </div>
          <div className="bento-card p-6 space-y-2">
            <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Unitree H1 + Shadow Hand 9-Zone Cylinder
            </h3>
            <p className="text-[13.5px] leading-relaxed text-[#86868B]">
              5 training seeds evaluated frozen on 90 unseen scenes:{' '}
              <strong className="font-mono text-[#1D1D1F] dark:text-[#F5F5F7]">95.1%</strong> joint grasp-and-hold (≥ 88% in every zone) vs.{' '}
              <strong className="font-mono text-[#1D1D1F] dark:text-[#F5F5F7]">75.6%</strong> pre-online (+19.6%p online gain), ≤ 21.1% scripted/visual/random baselines, 0% zero-data prior.
            </p>
          </div>
        </div>

        {/* Learning Curve Figure Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FigureSlot
            src="./assets/figures/polybag_learning_curve.png"
            pathLabel="assets/figures/polybag_learning_curve.png"
            title="Polybag Online Learning Curve"
            hint="10,000 rounds (1 seed): 8,551/10,000 (85.51%), 23.60 s/delivery"
          />
          <FigureSlot
            src="./assets/figures/ball_learning_curve.png"
            pathLabel="assets/figures/ball_learning_curve.png"
            title="Three-Ball Online Learning Curve"
            hint="10,000 rounds (1 seed): 8,121/10,000 (81.21%), 34.53 s/delivery"
          />
        </div>
      </section>

      {/* 5. SCOPE, LIMITATIONS & FUTURE WORK */}
      <section id="limitations" className="scroll-mt-20">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#D70015] dark:text-[#FF453A] mb-1.5">
            Scientific Honesty
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            Scope, Limitations &amp; Future Work
          </h2>
        </div>

        <div className="bento-card p-6 sm:p-8 border-l-4 border-l-[#FF3B30] dark:border-l-[#FF453A] space-y-4">
          <div className="flex items-start gap-2.5 text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            <AlertCircle className="w-4 h-4 text-[#FF3B30] dark:text-[#FF453A] shrink-0 mt-0.5" />
            <span>Human-level execution and reaction speed is our research objective, not an established claim.</span>
          </div>
          <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-[#86868B] list-disc pl-5">
            <li>
              <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Simulation-Only Measurements:</strong> All reported metrics are MuJoCo simulation measurements. Human-level parity has not yet been established by a matched human benchmark, and sim-to-real transfer remains future work.
            </li>
            <li>
              <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Single-Seed Online Runs:</strong> Polybag and Three-Ball 10,000-round online runs are single-seed, evaluated on large unseen independent cohorts (1,200 layouts).
            </li>
            <li>
              <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Disturbance Reaction Latency:</strong> Synthetic 20 mm lateral disturbance tests (48 layouts) achieve <span className="font-mono">47/48</span> final delivery per direction, but median physical hand reaction is <span className="font-mono">2.58 s</span> (software command <span className="font-mono">0.194 s</span>).
            </li>
            <li>
              <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Future Direction:</strong> Composing a library of lightweight, task-specific two-state models orchestrated by a high-level VLM or warehouse fleet manager.
            </li>
          </ul>
        </div>
      </section>

      {/* 6. BIBTEX */}
      <section id="bibtex" className="scroll-mt-20">
        <div className="bento-card p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-0.5">
                Citation
              </p>
              <h2 className="text-xl font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">BibTeX</h2>
            </div>
            <button
              type="button"
              onClick={() => void handleCopyBibtex()}
              className="bento-pill inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7]"
            >
              {copiedBib ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#34C759]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#86868B]" />
                  <span>Copy BibTeX</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 sm:p-5 rounded-2xl bg-[#1D1D1F] dark:bg-black text-[#F5F5F7] text-xs font-mono overflow-x-auto leading-relaxed">
            {BIBTEX_TEXT}
          </pre>
        </div>
      </section>
    </div>
  );
}
