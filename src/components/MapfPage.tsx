import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Cpu, Github, Network, Play, Shield } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { ProtectedImage } from './ProtectedImage';

export function MapfPage() {
  const { language } = useThemeLanguage();
  const [videoMissing, setVideoMissing] = useState(false);

  return (
    <div className="pt-8 sm:pt-12 space-y-14 sm:space-y-16">
      {/* 1. HERO SECTION */}
      <section className="space-y-6">
        <div className="bento-card p-7 sm:p-10 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#E8F2FD] dark:bg-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF]">
                Decentralized MAPF
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11.5px] font-medium bg-[#EAF8EE] dark:bg-[#30D158]/15 text-[#248A3D] dark:text-[#30D158]">
                Simulator &amp; Platform Built
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11.5px] font-medium bg-[#FFF4E5] dark:bg-[#FF9F0A]/15 text-[#C93400] dark:text-[#FF9F0A]">
                RL Policy In Progress
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.18] text-[#1D1D1F] dark:text-[#F5F5F7]">
              Distributed MAPF with Model-Based RL
            </h1>
            <p className="text-[15px] leading-[1.75] text-[#86868B] max-w-[780px]">
              {language === 'ko'
                ? 'AGV·AMR 물류 로봇 군집(Fleet)의 경로 탐색(MAPF)에 모델 기반 강화학습(MBRL)을 적용하는 분산형 멀티에이전트 연구 플랫폼. 중앙 서버의 계산 병목을 줄이고 각 로봇 온보드에서 경량 정책을 실행하는 구조를 지향하며, 현재 Rust 결정론적 시뮬레이터·Core 플래너·실시간 관제 UI 기준선까지 구현 완료.'
                : 'A distributed multi-agent path finding (MAPF) platform applying Model-Based Reinforcement Learning to AGV/AMR robot fleets. Designed to relieve central compute bottlenecks via lightweight onboard policy inference; the deterministic Rust fleet simulator, Core planner, and Live WS operator UI baseline are currently implemented.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
            <a
              href="https://github.com/sib-jhpark/mapf-rl-fe"
              target="_blank"
              rel="noreferrer"
              className="bento-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Frontend Repo (mapf-rl-fe)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-xs text-[#86868B] px-2">
              {language === 'ko'
                ? '※ RL 상태/행동 공간 축소 및 전이 확률 모델링 세부 아이디어는 비공개'
                : '※ RL state/action space reduction & transition modeling details remain private'}
            </span>
          </div>
        </div>

        {/* 3 Pillar Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bento-card p-6 space-y-2.5">
            <Shield className="w-4 h-4 text-[#34C759] dark:text-[#30D158]" />
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                {language === 'ko' ? 'Rust 연속 모션 시뮬레이터' : 'Rust Fleet Simulator'}
              </h2>
              <span className="text-[10.5px] font-mono font-semibold text-[#248A3D] dark:text-[#30D158]">BUILT</span>
            </div>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? 'Rust·Tokio·Ruckig 기반 100ms 고정 틱, 비상 정지 궤적 검증, 통행권·충돌 불변 조건 및 원자적 플릿 체크포인트 복구 구현'
                : 'Deterministic 100 ms fixed-tick simulator with Ruckig jerk-limited motion, emergency braking safety envelopes, passage rights, and atomic fleet checkpoints.'}
            </p>
          </div>

          <div className="bento-card p-6 space-y-2.5">
            <Network className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                {language === 'ko' ? 'Core 플래너 & 관제 UI' : 'Core Planner & Live UI'}
              </h2>
              <span className="text-[10.5px] font-mono font-semibold text-[#248A3D] dark:text-[#30D158]">BUILT</span>
            </div>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? 'FastAPI·PostgreSQL·Redis 기반 전역 계획·거리 기반 자동 배차·배터리/충전·오더 웨이브 및 React Live WS 관제 대시보드 연동'
                : 'FastAPI/PostgreSQL/Redis global planning, distance-based auto-assignment, battery/charging lifecycle, order waves, and React Live WS dashboard.'}
            </p>
          </div>

          <div className="bento-card p-6 space-y-2.5">
            <Cpu className="w-4 h-4 text-[#FF9500] dark:text-[#FF9F0A]" />
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                {language === 'ko' ? '분산형 MBRL 로컬 정책' : 'Decentralized MBRL Policy'}
              </h2>
              <span className="text-[10.5px] font-mono font-semibold text-[#C93400] dark:text-[#FF9F0A]">PLANNED</span>
            </div>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? '로봇 온보드 경량 추론(ONNX) 기반 자율 경로 협응 정책 학습 및 시뮬레이터 안전 경계 내 실증 검증 예정'
                : 'Onboard lightweight ONNX policy inference for autonomous local coordination inside deterministic safety boundaries (upcoming).'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONS DASHBOARD PREVIEW + DEMO VIDEO SLOT */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
            Simulator &amp; Operations Preview
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            {language === 'ko' ? '실시간 관제 및 시뮬레이터 화면' : 'Operations & Simulator Preview'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Real Operations Screenshot (7 cols) */}
          <div className="lg:col-span-7 bento-card p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                {language === 'ko' ? '창고 운영 관제 화면 (32×20 · 1m/cell)' : 'Warehouse Operations UI (32×20 · 1m/cell)'}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#86868B]">
                Fixture 10Hz / Live WS
              </span>
            </div>
            <ProtectedImage
              src="./assets/mapf/operations-fixture.png"
              alt="MAPF-RL Warehouse Operations Dashboard"
              watermarkVariant="tiled"
              wrapperClassName="rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-[#F5F5F7] dark:bg-[#141416]"
              className="w-full h-auto block"
            />
            <p className="text-xs text-[#86868B] leading-relaxed">
              {language === 'ko'
                ? '창고 맵 캔버스, 로봇 함대 상태, 배터리·충전, 오더 큐/웨이브(최대 100건), 로컬 Live 로봇 프로비저닝 및 안전 제거를 실시간 시각화.'
                : 'Visualizes warehouse map, fleet telemetry, battery/charging state, order waves (up to 100 tasks), and live local robot provisioning/removal.'}
            </p>
          </div>

          {/* Live Fleet Simulation Video Slot (5 cols) */}
          <div className="lg:col-span-5 bento-card p-5 sm:p-6 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {language === 'ko' ? '시뮬레이션 데모 영상 슬롯' : 'Fleet Simulation Demo Slot'}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#E8F2FD] dark:bg-[#0071E3]/20 text-[#0071E3] dark:text-[#2997FF]">
                  MP4 Ready
                </span>
              </div>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-[#F5F5F7] dark:bg-[#2C2C2E]/60">
                {!videoMissing ? (
                  <video
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    onError={() => setVideoMissing(true)}
                    className="w-full h-full object-cover"
                  >
                    <source src="./assets/mapf/fleet_demo.mp4" type="video/mp4" onError={() => setVideoMissing(true)} />
                  </video>
                ) : (
                  <div className="w-full h-full p-5 flex flex-col items-center justify-center text-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.1] flex items-center justify-center text-[#0071E3] dark:text-[#2997FF] shadow-apple-pill">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {language === 'ko' ? '멀티로봇 주행 데모 영상 예정' : 'Multi-Robot Fleet Demo Slot'}
                    </div>
                    <code className="px-2.5 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-[11px] font-mono text-[#86868B]">
                      public/assets/mapf/fleet_demo.mp4
                    </code>
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs text-[#86868B] leading-relaxed">
              {language === 'ko'
                ? '향후 Rust 시뮬레이터·메가맵 주행 녹화본을 해당 경로에 추가하면 자동으로 영상 플레이어로 전환됩니다.'
                : 'Drop a rendered multi-robot fleet recording at this path to replace the placeholder automatically.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. PLANNED RL ARCHITECTURE: CNN POLICY & STATE ABSTRACTION */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
            Planned RL Architecture
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            {language === 'ko'
              ? 'CNN 로컬 정책 & State Abstraction 설계'
              : 'CNN Local Policy & State Abstraction'}
          </h2>
          <p className="text-sm text-[#86868B] mt-1.5 max-w-[780px]">
            {language === 'ko'
              ? '전역 맵 크기나 로봇 대수가 늘어나도 입력 차원이 고정되도록 Ego 중심 국소 관측으로 상태를 추상화하고, 경량 CNN 정책이 5개 이산 행동(상·하·좌·우·정지)을 산출한 뒤 시뮬레이터 Safety Kernel을 통과시키는 분산 제어 구조.'
              : 'Ego-centered state abstraction keeps input dimensionality invariant to warehouse scale and fleet size. A lightweight CNN outputs 5 discrete cardinal actions (Up / Down / Left / Right / Wait), gated by the simulator deterministic safety kernel.'}
          </p>
        </div>

        <div className="bento-card p-6 sm:p-8 space-y-6">
          {/* High-Level Concept Flow SVG */}
          <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-[#FBFBFD] dark:bg-[#141416] p-4 sm:p-5 overflow-x-auto">
            <svg viewBox="0 0 960 150" className="w-full min-w-[700px] h-auto" role="img" aria-label="MAPF-RL CNN Policy Flow">
              <defs>
                <marker id="mapf-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#86868B" />
                </marker>
              </defs>

              <rect x="8" y="24" width="188" height="96" rx="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
              <text x="102" y="56" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1D1D1F">State Abstraction</text>
              <text x="102" y="78" textAnchor="middle" fontSize="11" fill="#6B7280">Ego-Centered Local Grid</text>
              <text x="102" y="96" textAnchor="middle" fontSize="11" fill="#6B7280">+ Goal &amp; Nearby Fleet</text>

              <line x1="196" y1="72" x2="228" y2="72" stroke="#86868B" strokeWidth="1.8" markerEnd="url(#mapf-arrow)" />

              <rect x="232" y="24" width="174" height="96" rx="14" fill="#E8F2FD" stroke="#0071E3" strokeWidth="1.6" />
              <text x="319" y="58" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0071E3">Lightweight CNN</text>
              <text x="319" y="80" textAnchor="middle" fontSize="11" fill="#1D1D1F">Local Spatial Features</text>
              <text x="319" y="98" textAnchor="middle" fontSize="10.5" fill="#4B5563">Onboard ONNX Inference</text>

              <line x1="406" y1="72" x2="438" y2="72" stroke="#86868B" strokeWidth="1.8" markerEnd="url(#mapf-arrow)" />

              <rect x="442" y="24" width="184" height="96" rx="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
              <text x="534" y="54" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1D1D1F">5 Discrete Actions</text>
              <text x="534" y="78" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0071E3">↑ · ↓ · ← · → · WAIT</text>
              <text x="534" y="98" textAnchor="middle" fontSize="10.5" fill="#6B7280">Cardinal Policy Logits</text>

              <line x1="626" y1="72" x2="658" y2="72" stroke="#86868B" strokeWidth="1.8" markerEnd="url(#mapf-arrow)" />

              <rect x="662" y="24" width="144" height="96" rx="14" fill="#EAF8EE" stroke="#34C759" strokeWidth="1.5" />
              <text x="734" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="#248A3D">Safety Kernel</text>
              <text x="734" y="78" textAnchor="middle" fontSize="10.5" fill="#1D1D1F">Collision &amp; Route</text>
              <text x="734" y="96" textAnchor="middle" fontSize="10.5" fill="#1D1D1F">Final Veto Gate</text>

              <line x1="806" y1="72" x2="836" y2="72" stroke="#86868B" strokeWidth="1.8" markerEnd="url(#mapf-arrow)" />

              <rect x="840" y="30" width="112" height="84" rx="14" fill="#1D1D1F" />
              <text x="896" y="68" textAnchor="middle" fontSize="12" fontWeight="700" fill="#F5F5F7">Rust Motion</text>
              <text x="896" y="88" textAnchor="middle" fontSize="10.5" fill="#9CA3AF">100 ms Tick</text>
            </svg>
          </div>

          {/* 3 Compact Spec Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#F5F5F7]/80 dark:bg-[#2C2C2E]/60 space-y-1.5">
              <div className="text-xs font-semibold text-[#0071E3] dark:text-[#2997FF]">
                {language === 'ko' ? 'State Abstraction' : 'State Abstraction'}
              </div>
              <p className="text-xs leading-relaxed text-[#1D1D1F]/85 dark:text-[#F5F5F7]/85">
                {language === 'ko'
                  ? '전역 창고 상태 대신 로봇 중심 국소 점유·예약 격자, 상대 목표 벡터, 최근접 이웃 상태로 압축해 대규모 플릿에서도 동일한 입력 규격 유지.'
                  : 'Compresses global warehouse state into an ego-centered local occupancy/reservation grid, relative goal vector, and nearest-neighbor features.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F5F7]/80 dark:bg-[#2C2C2E]/60 space-y-1.5">
              <div className="text-xs font-semibold text-[#0071E3] dark:text-[#2997FF]">
                {language === 'ko' ? 'Action Space (5종)' : 'Action Space (5 Actions)'}
              </div>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {(language === 'ko'
                  ? ['상 (NORTH)', '하 (SOUTH)', '좌 (WEST)', '우 (EAST)', '정지 (WAIT)']
                  : ['NORTH', 'SOUTH', 'WEST', 'EAST', 'WAIT']
                ).map((act) => (
                  <span
                    key={act}
                    className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.06] dark:border-white/[0.08]"
                  >
                    {act}
                  </span>
                ))}
              </div>
              <p className="text-[11.5px] text-[#86868B] pt-0.5">
                {language === 'ko'
                  ? '정책 출력은 후보 행동이며 Safety Kernel 통과 후에만 실제 모션으로 커밋.'
                  : 'Policy outputs are candidate actions committed only after passing the safety kernel.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F5F7]/80 dark:bg-[#2C2C2E]/60 space-y-1.5">
              <div className="text-xs font-semibold text-[#0071E3] dark:text-[#2997FF]">
                {language === 'ko' ? 'CNN 학습 & 안전한 배포' : 'CNN Learning & Safe Rollout'}
              </div>
              <p className="text-xs leading-relaxed text-[#1D1D1F]/85 dark:text-[#F5F5F7]/85">
                {language === 'ko'
                  ? '경량 CNN 정책을 오프라인 학습 후 서명된 ONNX 패키지로 배포. 충돌 0건 및 베이스라인 대비 비열화 통계 검증 통과 모델만 활성화.'
                  : 'Offline-trained lightweight CNN exported as signed ONNX packages, activated only after passing zero-collision and statistical non-inferiority gates.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3-TIER SYSTEM ARCHITECTURE */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF] mb-1.5">
            Architecture &amp; Boundaries
          </p>
          <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.02em] text-[#1D1D1F] dark:text-[#F5F5F7]">
            {language === 'ko' ? '저장소별 책임 분리 구조' : 'Decoupled 3-Tier Architecture'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bento-card p-6 space-y-3">
            <div className="text-xs font-mono font-semibold text-[#0071E3] dark:text-[#2997FF]">mapf-rl-simulator</div>
            <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Rust · Tokio · Ruckig</h3>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? '가상 로봇 런타임, 연속 물리 모션, 센서/고장 주입, 결정론적 안전 강제(최종 정지·감속 권한), 향후 로컬 ONNX 정책 추론 담당.'
                : 'Virtual robot runtime, continuous motion, fault injection, deterministic final safety authority, and future local ONNX inference.'}
            </p>
          </div>

          <div className="bento-card p-6 space-y-3">
            <div className="text-xs font-mono font-semibold text-[#0071E3] dark:text-[#2997FF]">mapf-rl-core</div>
            <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Python · FastAPI · PG · Redis</h3>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? '버전 관리 REST/WS 계약 정본, Order·배터리·자동 배차, 전역 MAPF/재계획, 오프라인 학습·ONNX 패키징 및 승인 정보 소유.'
                : 'Canonical versioned REST/WS contracts, order/battery/dispatch domain, global MAPF/replan, and offline training/ONNX export.'}
            </p>
          </div>

          <div className="bento-card p-6 space-y-3">
            <div className="text-xs font-mono font-semibold text-[#0071E3] dark:text-[#2997FF]">mapf-rl-fe</div>
            <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">React · TypeScript · Vite</h3>
            <p className="text-xs leading-relaxed text-[#86868B]">
              {language === 'ko'
                ? '운영자 워크플로, 맵·로봇·오더·이벤트 실시간 시각화, 계약 기반 타입 드리프트 검증. DB/Redis 직접 접근 금지 경계 준수.'
                : 'Operator workflow, real-time map/fleet/order visualization, and contract drift checks with strict isolation from DB/Redis.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. IMPLEMENTATION STATUS & ROADMAP */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bento-card p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#248A3D] dark:text-[#30D158]">
            <CheckCircle2 className="w-4 h-4" />
            <span>{language === 'ko' ? '현재 구현 완료 (Baseline)' : 'Implemented Baseline'}</span>
          </div>
          <ul className="space-y-2 text-[13.5px] leading-relaxed text-[#1D1D1F]/85 dark:text-[#F5F5F7]/85">
            <li>• {language === 'ko' ? 'Rust 결정론적 멀티로봇 시뮬레이터 (Ruckig 연속 모션 · 안전 제동 · 통행권)' : 'Deterministic Rust multi-robot simulator (Ruckig motion, braking safety, passage rights)'}</li>
            <li>• {language === 'ko' ? 'Core–Simulator–FE 계약 기반 Live WS 연동 및 체크포인트 복구' : 'Contract-verified Core–Simulator–FE Live WS loop & atomic checkpoint recovery'}</li>
            <li>• {language === 'ko' ? '로컬 Live 로봇 프로비저닝/제거, 거리 기반 자동 배차, 배터리·자동 충전, 오더 웨이브' : 'Local live robot provisioning/removal, auto-assignment, battery/charging & order waves'}</li>
          </ul>
        </div>

        <div className="bento-card p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C93400] dark:text-[#FF9F0A]">
            <Clock className="w-4 h-4" />
            <span>{language === 'ko' ? '향후 연구 · 개발 계획 (Roadmap)' : 'Planned Research & Roadmap'}</span>
          </div>
          <ul className="space-y-2 text-[13.5px] leading-relaxed text-[#86868B]">
            <li>• {language === 'ko' ? '분산형 모델 기반 강화학습(MBRL) 로컬 협응 정책 학습 및 오프라인 평가 파이프라인' : 'Decentralized Model-Based RL local coordination training & offline evaluation pipeline'}</li>
            <li>• {language === 'ko' ? 'Simulator 내 경량 ONNX 런타임 추론 통합 및 안전 경계 하 정책 승인 통계 검증' : 'Lightweight onboard ONNX inference inside simulator safety boundaries & statistical approval gates'}</li>
            <li>• {language === 'ko' ? '대규모 메가맵 멀티로봇 군집 처리량·교착 해소 실증 벤치마크' : 'Large-scale mega-map fleet throughput & congestion benchmarks'}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
