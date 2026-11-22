import type { ProfileData } from '../types/profile';

/**
 * Jaehyun Park's Profile Data (synced from docs/remember.md)
 * 이 파일의 내용만 수정하면 6개 섹션(한/영 전환, 프로젝트 필터/모달 포함)에 즉시 반영됩니다.
 */
export const profileData: ProfileData = {
  brand: 'Jaehyun Park',
  name: {
    ko: '박재현',
    en: 'Jaehyun Park',
  },
  role: {
    ko: '선임 · 최적화 및 강화학습 알고리즘 엔지니어, (주)LG CNS',
    en: 'Senior Associate · Optimization & RL Algorithm Engineer, LG CNS',
  },
  affiliations: [
    {
      ko: 'KAIST 산업및시스템공학 석사 · 고려대학교 산업경영공학부 학사',
      en: 'M.S. in Industrial & Systems Engineering, KAIST · B.S. in Industrial Management Engineering, Korea University',
    },
  ],
  location: {
    ko: '서울, 대한민국',
    en: 'Seoul, South Korea',
  },
  availability: {
    active: true,
    label: {
      ko: 'LG CNS 선임 · 물류/산업용 로봇 최적화 알고리즘 개발 중',
      en: 'Senior Associate @ LG CNS · Robotics Optimization & RL',
    },
  },
  headline: {
    ko: '강화학습과 수리 최적화 기반\n로봇 · 물류 시스템 제어',
    en: 'Bridging Model-Based RL &\nMathematical Optimization to Real Robots.',
  },
  bio: {
    ko: '(주)LG CNS 선임 · 물류·산업용 로봇 제어 최적화 알고리즘 및 운영 시뮬레이터 설계·개발\nKAIST 산업및시스템공학 석사 졸업 (4.15/4.3, 지도교수: [이다빈](https://dabeenl.github.io/)) · 모델 기반 강화학습(MBRL)·컨벡스·조합 최적화 연구, AISTATS 2025 단독 1저자 발표\n고려대학교 산업경영공학부 학사 · 양자 시스템 최적화 연구실(최인찬 교수) 학부연구생',
    en: 'I am a Senior Associate at LG CNS, where I design and develop optimization algorithms and operational simulators for logistics and industrial robot fleets. Previously, I earned my M.S. in Industrial & Systems Engineering at KAIST (ranked 1st in department, GPA 4.15/4.3) advised by [Prof. Dabeen Lee](https://dabeenl.github.io/), researching Model-Based Reinforcement Learning (MBRL), convex optimization, and combinatorial optimization, with a sole first-author paper at AISTATS 2025 and a talk at INFORMS 2024. Prior to KAIST, I received my B.S. in Industrial Management Engineering from Korea University, where I worked as an undergraduate researcher in the Quantum Systems Optimization Lab.',
  },
  currentFocus: [
    {
      ko: '이기종 로봇 플랫폼(PWB) 자원 할당 · 경로 · 배터리 최적화',
      en: 'Heterogeneous robot platform (PWB) allocation, routing & battery optimization',
    },
    {
      ko: 'NVIDIA Omniverse · Isaac Sim 기반 초정밀 운영 시뮬레이터',
      en: 'High-fidelity operations simulation with NVIDIA Omniverse & Isaac Sim',
    },
    {
      ko: '분산형 MAPF 및 Two-State MBRL 휴머노이드 제어 연구',
      en: 'Distributed MAPF & Two-State MBRL for humanoid robot control',
    },
  ],
  metrics: [
    {
      label: { ko: 'KAIST 석사 졸업', en: 'KAIST M.S. Valedictorian' },
      value: '4.15 / 4.3',
      sublabel: {
        ko: '산업및시스템공학과 석차 1/17 (전체 33/832)',
        en: 'Ranked 1/17 in IE Dept (Top 33/832 overall)',
      },
    },
    {
      label: { ko: '스마트 물류 AGV 최적화', en: 'Smart Logistics AGV Fleet' },
      value: '80 AGVs · +10%',
      sublabel: {
        ko: '80대 도입·RCS 안정화 및 물류 CAPA 약 10% 개선',
        en: '80-unit fleet stabilization & ~10% throughput gain',
      },
    },
    {
      label: { ko: '국제 AI 학회 논문', en: 'Top-Tier AI Publication' },
      value: 'AISTATS 2025',
      sublabel: {
        ko: '단독 1저자 포스터 발표 · INFORMS 2024 발표',
        en: 'Sole 1st author poster · INFORMS 2024 speaker',
      },
    },
  ],
  projects: [
    {
      id: 'distributed-mapf-mbrl',
      title: 'Distributed MAPF with Model-Based RL',
      subtitle: {
        ko: '분산형 멀티에이전트 경로 최적화(MAPF) 및 자율 협응 시스템',
        en: 'Scalable distributed multi-agent path finding with Model-Based RL',
      },
      category: 'rl',
      status: 'planned',
      year: '2026',
      featured: true,
      summary: {
        ko: '중앙 서버 계산 병목 없이 대규모 이동 로봇 군집(Fleet)이 동적 물류·창고 환경에서 데드락 없이 경로를 협응하는 분산형 MAPF 시스템',
        en: 'A distributed multi-agent path finding framework that eliminates central bottlenecks so large robot fleets coordinate fluidly in dynamic warehouse environments.',
      },
      impact: {
        ko: '분산형 로컬 인터랙션 정책 기반 스케일러블 군집 제어 및 실시간 물리 제약 검증',
        en: 'Scalable fleet control via local RL interaction policies & real-time constraint validation',
      },
      role: {
        ko: '개인 연구 · 알고리즘 설계 · 시뮬레이션 프론트엔드',
        en: 'Independent Research · Algorithm Design · Simulation UI',
      },
      tech: ['Model-Based RL', 'MAPF', 'Multi-Agent RL', 'Python', 'React', 'TypeScript'],
      problem: {
        ko: '중앙 집중형 경로 탐색 서버의 로봇 대수 증가에 따른 계산 복잡도 급증 및 동적 장애물·교착(Deadlock) 실시간 대응 한계',
        en: 'Centralized pathfinding servers hit severe computational bottlenecks as fleet size grows, struggling to resolve dynamic congestion and deadlocks in real time.',
      },
      solution: {
        ko: '강화학습 기반 로컬 인터랙션 정책을 통한 에이전트 간 자율 경로 조율 설계 및 시뮬레이션 기반 물리 제약·실시간 성능 검증',
        en: 'Introduced RL-based local interaction policies enabling robots to negotiate paths autonomously, validated in simulation under strict physical and real-time constraints.',
      },
      highlights: [
        {
          ko: '스케일러블 군집 제어: 중앙 서버 계산 병목을 해소하는 분산형 멀티에이전트 경로 최적화 구조',
          en: 'Scalable fleet control: distributed architecture removing central compute bottlenecks',
        },
        {
          ko: '머신러닝 기반 자율 협응: 동적 창고 환경에서 정체·얽힘을 방지하는 로컬 인터랙션 정책',
          en: 'Autonomous coordination: local RL policies preventing deadlocks in dynamic warehouses',
        },
        {
          ko: '산업 레벨 신뢰성 검증: 시뮬레이션 기반 실시간 성능 및 물리적 제약 조건 충족 검증',
          en: 'Industrial-grade verification: real-time performance & physical constraint checks in sim',
        },
      ],
      githubUrl: 'https://github.com/sib-proejct/mapf-rl-fe',
    },
    {
      id: 'search-only-good-stock',
      title: 'Intrinsic Value Portfolio (SOGS)',
      subtitle: {
        ko: '정규화 소유주 이익(Normalized OEPS) 기반 내재가치 분석 및 개인 ETF 서비스',
        en: 'Intrinsic value valuation & Direct Indexing personal ETF platform',
      },
      category: 'fintech',
      status: 'completed',
      year: '2026',
      featured: true,
      summary: {
        ko: '종목별 Normalized OEPS·성장률·할인율 기반 내재가치 산출 및 ROE·부채비율·주주이익 펀더멘털 필터링을 통한 Direct Indexing 개인 ETF 구축',
        en: 'A quantitative value-investing platform computing intrinsic value from Normalized OEPS, growth, and discount rates to construct a Direct Indexing personal ETF.',
      },
      impact: {
        ko: '내재가치 자동 산출 · 펀더멘털 스크리닝 · Direct Indexing 개인 ETF 파이프라인 구축',
        en: 'End-to-end intrinsic valuation, fundamental screening & Direct Indexing ETF workflow',
      },
      role: {
        ko: '개인 프로젝트 · 정량 모델링 · 풀스택 개발',
        en: 'Personal Project · Quantitative Modeling · Full-Stack',
      },
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Quantitative Finance', 'Recharts'],
      problem: {
        ko: '소유주 이익 기반 내재가치와 다년간 펀더멘털 건전성의 일관된 비교 및 개인 포트폴리오 반영 과정의 높은 수작업 비용',
        en: 'Consistently evaluating owner earnings, multi-year fundamentals, and margin of safety across stocks to construct a personal portfolio is slow and error-prone.',
      },
      solution: {
        ko: 'Normalized OEPS·성장률·할인율 내재가치 모델 및 ROE·부채비율 펀더멘털 필터 자동화, 선별 우량주 기반 Direct Indexing 개인 ETF 구성',
        en: 'Automated Normalized OEPS valuation and fundamental screening (ROE, debt ratio, owner earnings), feeding qualified picks into a Direct Indexing personal ETF.',
      },
      highlights: [
        {
          ko: '종목별 Normalized OEPS(Owners Earning per Share), 성장률, 할인율 기반 내재가치 계산 모델 구축',
          en: 'Built intrinsic valuation engine using Normalized OEPS, growth rates, and discount rates',
        },
        {
          ko: 'ROE, 부채 비율, 주주이익 등 핵심 펀더멘털 규칙 자동 검증 필터링 구현',
          en: 'Implemented automated fundamental verification filtering on ROE, leverage, and owner earnings',
        },
        {
          ko: '선별된 내재가치 우량주 기반 Direct Indexing 개인 ETF 포트폴리오 구축',
          en: 'Constructed personal Direct Indexing ETF from value-screened equities',
        },
      ],
      githubUrl: 'https://github.com/sib-proejct/search-only-good-stock-fe',
    },
    {
      id: 'humanoid-two-state-mbrl',
      title: 'Humanoid Robot Control with MBRL',
      subtitle: {
        ko: 'Two-State Model-Based RL 기반 휴머노이드 고속 조작 제어',
        en: 'High-speed humanoid manipulation via Two-State Model-Based RL',
      },
      category: 'rl',
      status: 'research',
      year: '2026',
      summary: {
        ko: '파지·수건 접기 등 복합 조작 동작의 Two-State 수학적 추상화 및 모델 기반 강화학습(MBRL) 기반 고속 휴머노이드 제어 연구',
        en: 'Researching human-speed manipulation (grasping, towel folding) by mathematically abstracting contact states and actions into a Two-State Model-Based RL formulation.',
      },
      impact: {
        ko: 'Two-State 상태·행동 수학적 추상화를 통한 샘플 효율적 휴머노이드 제어 모델링',
        en: 'Sample-efficient humanoid control formulation via Two-State mathematical abstraction',
      },
      role: {
        ko: '개인 연구 · 수리 모델링 · 시뮬레이션 실험',
        en: 'Independent Research · Mathematical Modeling · Simulation',
      },
      tech: ['Model-Based RL', 'MuJoCo', 'Isaac Sim', 'Python', 'Optimal Control'],
      problem: {
        ko: '휴머노이드 고속·변형체 조작의 방대한 상태 공간으로 인한 모델 프리 강화학습의 낮은 샘플 효율 및 속도 한계',
        en: 'High-speed dexterous and deformable-object manipulation in humanoids suffers from huge state spaces and poor sample efficiency under model-free RL.',
      },
      solution: {
        ko: '작업 핵심 위상의 Two-State 동역학 모델 추상화 및 학습을 통해 계획(Planning)·제어 속도를 높이는 Two-State MBRL 프레임워크 설계',
        en: 'Formulated a Two-State MBRL framework abstracting manipulation phases and actions mathematically to accelerate planning and policy learning.',
      },
      highlights: [
        {
          ko: '인간의 파지·접기(Towel Folding) 동작을 Two-State 상태·행동 공간으로 수학적 추상화',
          en: 'Mathematically abstracted grasping and folding into a compact Two-State dynamics space',
        },
        {
          ko: '모델 기반 강화학습(MBRL)을 적용해 인간 수준의 고속 조작 정책 탐색',
          en: 'Applying Model-Based RL toward human-speed dexterous manipulation',
        },
      ],
    },
    {
      id: 'pwb-omniverse-simulator',
      title: 'PWB Robotics Platform & Isaac Sim Emulator',
      subtitle: {
        ko: '이기종 로봇 제어 최적화 알고리즘 및 Omniverse · Isaac Sim 운영 시뮬레이터',
        en: 'Heterogeneous robot optimization algorithms & Omniverse / Isaac Sim emulator',
      },
      category: 'optimization',
      status: 'completed',
      year: '2026',
      summary: {
        ko: 'LG CNS 이기종 로봇 플랫폼(피지컬 웍스 바톤, PWB) Contextual Bandit 자원 할당, 적응형 배터리 최적화 및 NVIDIA Omniverse Kit·Isaac Sim 3D 운영 시뮬레이터 MVP 구축',
        en: 'Engineered Contextual Bandit task allocation, adaptive battery optimization, and NVIDIA Omniverse Kit / Isaac Sim 3D operational emulator MVP for LG CNS PWB.',
      },
      impact: {
        ko: 'Contextual Bandit Warm-Start 할당 · 3모드 배터리 최적화 · WebRTC 3D 모니터링 MVP 구현',
        en: 'Contextual Bandit warm-start allocation, 3-mode battery optimization & WebRTC 3D MVP',
      },
      role: {
        ko: 'LG CNS 선임 · 알고리즘 설계 · 시뮬레이터 MVP 개발',
        en: 'LG CNS Senior Associate · Algorithm Design & Simulator MVP',
      },
      tech: ['Contextual Bandit', 'NVIDIA Omniverse', 'Isaac Sim', 'cuOpt', 'WebRTC', 'Python'],
      problem: {
        ko: '이기종 로봇 혼재 물류 현장 배포 전 자원 할당·경로·배터리 전략의 안전한 사전 정밀 검증 환경 부재',
        en: 'Deploying allocation, routing, and battery algorithms to heterogeneous robot fleets required a high-fidelity simulation environment prior to live floor rollout.',
      },
      solution: {
        ko: '비용 함수 기반 Warm-Start Contextual Bandit 및 3모드 배터리 로직 설계, NVIDIA Omniverse Kit·WebRTC 3D 뷰 및 Isaac Sim 초정밀 운영 시뮬레이터 MVP 구현',
        en: 'Designed cost-function warm-started Contextual Bandits and 3-mode adaptive battery control, paired with an Omniverse Kit WebRTC 3D viewer and Isaac Sim emulator MVP.',
      },
      highlights: [
        {
          ko: '강화학습 계열 Contextual Bandit 기반 로봇-작업 분배(Action, Reward Model, 학습 파이프라인, Warm-Start)',
          en: 'Contextual Bandit task dispatch with custom action/reward models and cost-function warm start',
        },
        {
          ko: '일반·무중단·다크 팩토리 3가지 운영 모드를 환경에 따라 전환하는 적응형 배터리 최적화 모듈',
          en: 'Adaptive battery module switching across Normal, Non-Stop, and Dark Factory modes',
        },
        {
          ko: 'LG–NVIDIA 협업 미팅 PWB 발표 및 Omniverse Assets · Isaac Sim · cuOpt 활용 방안 발굴',
          en: 'Presented PWB in LG–NVIDIA collaboration meetings, exploring Isaac Mission Control & cuOpt',
        },
      ],
    },
  ],
  experiences: [
    {
      id: 'lg-cns-pwb',
      type: 'work',
      period: '2026 — Present',
      organization: {
        ko: '(주)LG CNS · 선임 (2025.07 ~ 재직 중)',
        en: 'LG CNS · Senior Associate (2025.07 — Present)',
      },
      role: {
        ko: '이기종 로봇 플랫폼 (피지컬 웍스 바톤, PWB) 최적화 & 시뮬레이터',
        en: 'Heterogeneous Robot Platform (Physical Works Baton, PWB)',
      },
      location: {
        ko: 'Seoul, South Korea',
        en: 'Seoul, South Korea',
      },
      summary: {
        ko: '이기종 로봇 군집 자원 할당·경로 탐색·배터리 최적화 알고리즘 및 NVIDIA Omniverse/Isaac Sim 기반 초정밀 운영 시뮬레이터 설계·구현',
        en: 'Designing fleet allocation, routing, and battery optimization algorithms alongside NVIDIA Omniverse/Isaac Sim high-fidelity operational emulators.',
      },
      bullets: [
        {
          ko: '자원 할당 알고리즘: Contextual Bandit 기반 로봇-작업 분배(Action/Reward 모델, 학습 파이프라인, 비용 함수 기반 Warm-Start 설계)',
          en: 'Task Allocation: Contextual Bandit robot-task dispatch with action/reward models, training pipeline, and cost-function warm start',
        },
        {
          ko: '경로 탐색 & 배터리 최적화: 맵 Node/Edge 제어 휴리스틱 및 일반·무중단·다크 팩토리 3모드 적응형 배터리 최적화 모듈 설계',
          en: 'Routing & Battery: Map node/edge control heuristics and 3-mode adaptive battery optimization (Normal / Non-Stop / Dark Factory)',
        },
        {
          ko: '시뮬레이터(에뮬레이터) MVP: NVIDIA Omniverse Kit 기반 물류 씬 설계, WebRTC 3D 모니터링 및 Isaac Sim 초정밀 운영 시뮬레이터 구축',
          en: 'Simulator MVP: Omniverse Kit logistics scenes, WebRTC 3D live monitoring, and Isaac Sim operational emulator MVP',
        },
        {
          ko: 'LG–NVIDIA 협업 미팅 PWB 소개 발표(Isaac Sim, Omniverse Kit, Isaac Mission Control, cuOpt 활용 발굴) 및 Pre-built AI Agent(음성인식·보고서/암묵지 저장) 제안',
          en: 'Presented PWB at LG–NVIDIA meetings (Isaac Mission Control, cuOpt) and proposed pre-built Voice & Report/Tacit-Knowledge AI Agents',
        },
      ],
      tags: ['Contextual Bandit', 'Omniverse Kit', 'Isaac Sim', 'WebRTC', 'cuOpt', 'AI Agent'],
    },
    {
      id: 'lg-cns-agv',
      type: 'work',
      period: '2025.09 — 2026.03',
      organization: {
        ko: '(주)LG CNS · 사원',
        en: 'LG CNS · Associate',
      },
      role: {
        ko: '스마트 물류 센터 AGV 구축 · FAT 및 현장 안정화',
        en: 'Smart Logistics Center AGV Deployment · FAT & Field Stabilization',
      },
      location: {
        ko: 'South Korea',
        en: 'South Korea',
      },
      summary: {
        ko: '대규모 AGV(80대) 도입 과정의 FAT 참여, RCS 안정화 및 현장 이슈 대응',
        en: 'Participated in FAT, RCS stabilization, and on-site issue resolution for an 80-AGV deployment.',
      },
      bullets: [
        {
          ko: 'FAT(공장수락시험) 참여: AGV 80대 도입 전 주행·제어 시나리오 검증 및 RCS 연동 안정성 점검',
          en: 'FAT (Factory Acceptance Test): Validated control scenarios and RCS integration prior to 80-AGV rollout',
        },
        {
          ko: '현장 이슈 대응: 운영 중 데드락·교착 이슈 해결 및 A*·맵 엣지 튜닝을 통한 물류 CAPA 약 10% 개선',
          en: 'On-site Issue Resolution: Resolved live deadlocks and map congestion via A*/edge tuning, improving CAPA by ~10%',
        },
      ],
      tags: ['AGV (80 units)', 'FAT', 'RCS', 'On-site Stabilization'],
    },
    {
      id: 'edu-kaist',
      type: 'education',
      period: '2023 — 2025',
      organization: {
        ko: '한국과학기술원 (KAIST)',
        en: 'KAIST (Korea Advanced Institute of Science and Technology)',
      },
      role: {
        ko: '산업및시스템공학 석사 · 학과 졸업',
        en: 'M.S. in Industrial & Systems Engineering · Valedictorian',
      },
      location: {
        ko: 'Daejeon, South Korea',
        en: 'Daejeon, South Korea',
      },
      summary: {
        ko: '학점 4.15 / 4.3 (학과 석차 1/17, 전체 석차 33/832) · 모델 기반 강화학습(MBRL), 컨벡스 최적화 이론, 조합 최적화.',
        en: 'GPA 4.15 / 4.3 (Ranked 1/17 in Dept, 33/832 Overall) · Researched Model-Based RL, convex optimization theory, and industrial combinatorial optimization.',
      },
      bullets: [
        {
          ko: '지도교수: [이다빈 교수](https://dabeenl.github.io/) (Optimization and Algorithms Lab)',
          en: 'Advisor: [Prof. Dabeen Lee](https://dabeenl.github.io/) (Optimization and Algorithms Lab)',
        },
        {
          ko: '학회 발표: AISTATS 2025 (단독 1저자 포스터 발표), INFORMS 2024 발표',
          en: 'Conferences: AISTATS 2025 (Sole 1st author poster), INFORMS 2024 presentation',
        },
        {
          ko: '대표 과목: 정수계획법, 컨벡스 최적화, 기계학습이론, 게임이론 및 다중 에이전트 강화학습, 고급공학통계',
          en: 'Coursework: Integer Programming, Convex Optimization, Statistical Learning Theory, Game Theory & MARL',
        },
        {
          ko: '수업 조교(TA): OR 및 최적화, 컨벡스 최적화',
          en: 'Teaching Assistant: Operations Research & Optimization, Convex Optimization',
        },
      ],
    },
    {
      id: 'edu-ku',
      type: 'education',
      period: '2020 — 2023',
      organization: {
        ko: '고려대학교 (Korea University)',
        en: 'Korea University',
      },
      role: {
        ko: '산업경영공학부 학사',
        en: 'B.S. in Industrial Management Engineering',
      },
      location: {
        ko: 'Seoul, South Korea',
        en: 'Seoul, South Korea',
      },
      summary: {
        ko: '학점 4.17 / 4.5 · 해석학, OR, 최적화 응용, 계량경제학, 베이즈통계, 실험계획법',
        en: 'GPA 4.17 / 4.5 · Built mathematical foundations across Analysis, Operations Research, Econometrics, Bayesian Statistics, and Experimental Design.',
      },
      bullets: [
        {
          ko: '양자 시스템 최적화 연구실(최인찬 교수) 학부연구생 — 양자 최적화 연구 및 ZX-calculus 자료 조사',
          en: 'Undergraduate Researcher, Quantum Systems Optimization Lab (Prof. Inchan Choi) — Quantum optimization & ZX-calculus study',
        },
      ],
    },
    {
      id: 'edu-seoultech',
      type: 'education',
      period: '2016 — 2020(중퇴)',
      organization: {
        ko: '서울과학기술대학교 (SeoulTech)',
        en: 'Seoul National University of Science and Technology (SeoulTech)',
      },
      role: {
        ko: '글로벌융합산업공학과 학사',
        en: 'B.S. in Global Convergence Industrial Engineering',
      },
      location: {
        ko: 'Seoul, South Korea',
        en: 'Seoul, South Korea',
      },
      summary: {
        ko: '학점 3.91 / 4.5',
        en: 'GPA 3.91 / 4.5',
      },
      bullets: [],
    },
  ],
  techCategories: [
    {
      id: 'rl',
      title: { ko: 'Reinforcement Learning', en: 'Reinforcement Learning' },
      description: {
        ko: '모델 기반 강화학습',
        en: 'Model-based RL',
      },
      skills: [
        { name: 'Model-Based RL (MBRL)', core: true },
        { name: 'Contextual Bandits', core: true },
        // { name: 'Multi-Agent RL (MARL)', core: true },
        { name: 'MNL Function Approx.' },
        { name: 'Policy & Reward Design' },
      ],
    },
    {
      id: 'optimization',
      title: { ko: 'Mathematical Optimization', en: 'Mathematical Optimization' },
      description: {
        ko: '수리 최적화 기반 물류·로봇 제어 최적화 설계',
        en: 'Mathematical programming for logistics & robot control',
      },
      skills: [
        { name: 'Mathematical Programming', core: true },
        { name: 'Convex Optimization', core: true },
        { name: 'Integer Programming', core: true },
        { name: 'Combinatorial Optimization' },
        { name: 'MAPF / A* Heuristics', core: true },
      ],
    },
    {
      id: 'simulation',
      title: { ko: 'Simulation', en: 'Simulation' },
      description: {
        ko: '초정밀 물리 시뮬레이터 및 디지털 트윈',
        en: 'High-fidelity physics simulation & digital twins',
      },
      skills: [
        { name: 'NVIDIA Omniverse', core: true },
        { name: 'NVIDIA Isaac Sim', core: true },
        { name: 'MuJoCo', core: true },
        // { name: 'Isaac Mission Control' },
        { name: 'NVIDIA cuOpt' },
        // { name: 'WebRTC 3D' },
      ],
    },
    {
      id: 'engineering',
      title: { ko: 'Engineering & Product', en: 'Engineering & Product' },
      description: {
        ko: '',
        en: '',
      },
      skills: [
        { name: 'Python', core: true },
        // { name: 'TypeScript', core: true },
        { name: 'JAVA' },
        // { name: 'FastAPI' },
        // { name: 'Docker' },
        // { name: 'Quantitative Finance' },
      ],
    },
  ],
  publications: [
    {
      id: 'aistats-2025',
      date: '2025.05',
      venue: 'AISTATS 2025',
      title: 'Infinite-Horizon Reinforcement Learning with Multinomial Logit Function Approximation',
      note: {
        ko: '단독 1저자 · 포스터 발표 (International Conference on Artificial Intelligence and Statistics)',
        en: 'Sole First Author · Poster Presentation (AISTATS 2025)',
      },
      url: 'https://proceedings.mlr.press/v258/park25a.html',
      links: [
        {
          label: 'Paper (PMLR)',
          url: 'https://proceedings.mlr.press/v258/park25a.html',
        },
        {
          label: 'Poster',
          url: 'https://virtual.aistats.org/media/PosterPDFs/AISTATS%202025/9497.png?t=1746000705.1348274',
        },
      ],
    },
    {
      id: 'informs-2024',
      date: '2024',
      venue: 'INFORMS 2024',
      title: 'Model-Based Reinforcement Learning & Optimization Research Presentation',
      note: {
        ko: 'INFORMS Annual Meeting 학회 발표',
        en: 'Conference Presentation at INFORMS Annual Meeting',
      },
    },
  ],
  honors: [
    {
      id: 'kaist-valedictorian',
      date: '2025.02',
      title: {
        ko: 'KAIST 산업및시스템공학과 석사 수석 졸업',
        en: 'KAIST M.S., Industrial & Systems Engineering',
      },
      detail: {
        ko: '학점 4.15 / 4.3 · 학과 석차 1/17 · KAIST 전체 석차 33/832',
        en: 'GPA 4.15 / 4.3 · Ranked 1/17 in Department · 33/832 Overall',
      },
    },
  ],
  certifications: [
    {
      id: 'cert-eip',
      date: '2026.09',
      name: { ko: '정보처리기사', en: 'Engineer Information Processing' },
      issuer: { ko: '한국산업인력공단', en: 'HRDK' },
    },
    {
      id: 'cert-ax',
      date: '2026.08',
      name: { ko: 'AX 전문가 (LG CNS)', en: 'AX Specialist (LG CNS)' },
      issuer: { ko: 'LG CNS', en: 'LG CNS' },
    },
    {
      id: 'cert-bigdata',
      date: '2026.07',
      name: { ko: '빅데이터분석기사', en: 'Engineer Big Data Analysis' },
      issuer: { ko: '한국데이터산업진흥원', en: 'K-DATA' },
    },
    {
      id: 'cert-adsp',
      date: '2026.03',
      name: { ko: 'ADsP (데이터분석 준전문가)', en: 'ADsP (Data Analytics Semi-Professional)' },
      issuer: { ko: '한국데이터산업진흥원', en: 'K-DATA' },
    },
  ],
  contact: {
    email: 'jhpark@alumni.kaist.ac.kr',
    heading: {
      ko: '수리 최적화 · 강화학습 · 피지컬AI',
      en: 'Open to Mathematical Optimization, RL & Physical AI Collaborations.',
    },
    description: {
      ko: '물류·로봇 제어 최적화, 모델 기반 강화학습(MBRL), Omniverse/Isaac Sim 시뮬레이션 및 관련 연구·프로젝트 협업 문의',
      en: 'Reach out anytime to discuss robot fleet optimization, Model-Based RL, Omniverse/Isaac Sim simulation, or research collaborations.',
    },
    links: [
      {
        id: 'github',
        label: { ko: 'GitHub', en: 'GitHub' },
        handle: '@sib-proejct',
        url: 'https://github.com/sib-proejct',
      },
      // {
      //   id: 'blog',
      //   label: { ko: 'MAPF-RL Repo', en: 'MAPF-RL Repo' },
      //   handle: 'mapf-rl-fe',
      //   url: 'https://github.com/sib-proejct/mapf-rl-fe',
      // },
      // {
      //   id: 'resume',
      //   label: { ko: 'SOGS Repo', en: 'SOGS Repo' },
      //   handle: 'search-only-good-stock-fe',
      //   url: 'https://github.com/sib-proejct/search-only-good-stock-fe',
      // },
      {
        id: 'linkedin',
        label: { ko: 'LinkedIn', en: 'LinkedIn' },
        handle: 'in/jhpark',
        url: 'https://www.linkedin.com/in/jhpark220/',
      },
    ],
  },
};
