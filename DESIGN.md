# DESIGN.md — Jaehyun Park Personal Profile (Modern Bento Edition)

> **"본질에 집중하는 정제된 미니멀리즘과 구조화된 개발자 포트폴리오"**
>
> `jhpark.github.com`은 `search-only-good-stock-fe`의 **Apple 스타일 모던 벤토(Modern Bento) 디자인 시스템**(`Clarity · Deference · Depth`)을 계승하여, 개발자의 이력·프로젝트·기술 스택·글을 군더더기 없이 명료하게 전달하는 개인 프로필 사이트 디자인 양식입니다.

---

## 1. 디자인 철학 (Zero AI-Slop)

1. **명료함 (Clarity)**
   - 시선을 분산시키는 과도한 네온 그라디언트, 인위적인 발광 효과, 조잡한 3D 일러스트를 배제합니다.
   - 넉넉한 여백과 명확한 정보 위계로 방문자가 10초 안에 핵심 역량과 대표 프로젝트를 파악할 수 있도록 설계합니다.
2. **겸손함 (Deference)**
   - UI 장식은 콘텐츠보다 앞서지 않습니다.
   - 반투명 블러 글래스 네비게이션(`.glass-panel`), 부드러운 `24px` 라운드 벤토 카드(`.bento-card`), 은은한 `1px` 보더(`rgba(0, 0, 0, 0.06)`)가 콘텐츠를 단정하게 감쌉니다.
3. **깊이감 (Depth)**
   - 평면 위 미세한 그림자와 `0.25s cubic-bezier(0.16, 1, 0.3, 1)` 호버 트랜지션, 모달 레이어링을 통해 절제된 깊이감을 제공합니다.
4. **숫자·날짜의 정밀성 (Tabular Monospace Precision)**
   - 경력 기간(`2023.03 — Present`), 핵심 지표, 프로젝트 연도, 글 발행일에 `font-mono tabular-nums`를 적용해 수직 정렬을 완벽하게 유지합니다.

---

## 2. 색상 팔레트 및 토큰 체계 (Design Color Tokens)

### 2.1 Background & Surface

| 토큰명 | Light Mode | Dark Mode | 용도 |
| :--- | :--- | :--- | :--- |
| `--canvas-bg` | `#FBFBFD` | `#000000` | 페이지 전체 캔버스 배경 |
| `--surface-bg` | `#FFFFFF` | `#1C1C1E` | 벤토 카드, 모달 컨테이너 배경 |
| `--surface-subtle` | `#EBEBED` / `#F5F5F7` | `#2C2C2E` | 세그먼트 트랙, 비활성 칩, 보조 버튼 |
| `--border-color` | `rgba(0, 0, 0, 0.06)` | `rgba(255, 255, 255, 0.08)` | 1px 카드 외곽선 |
| `--divider-color` | `rgba(0, 0, 0, 0.04)` | `rgba(255, 255, 255, 0.06)` | 카드 내부 행·섹션 구분선 |

### 2.2 Typography Hierarchy

| 토큰명 | Light Mode | Dark Mode | 용도 |
| :--- | :--- | :--- | :--- |
| `--text-primary` | `#1D1D1F` | `#F5F5F7` | 메인 헤드라인, 프로젝트명, 핵심 수치 |
| `--text-secondary` | `#86868B` | `#98989D` | 서브헤더, 설명문, 기간/기관명 |
| `--text-tertiary` | `#A1A1A6` | `#636366` | 각주, 캡션, 메타 정보 |

### 2.3 Semantic & Accent Colors

| 토큰명 | Light Mode | Dark Mode | 의미 및 적용처 |
| :--- | :--- | :--- | :--- |
| `--accent-blue` | `#0071E3` | `#2997FF` | 브랜드 액센트, 활성 네비게이션, 주요 CTA, 링크 |
| `--accent-blue-hover` | `#0077ED` | `#409CFF` | 버튼 호버 및 포커스 상태 |
| `--accent-green` | `#34C759` | `#30D158` | 활성 상태 닷(`Live`, `Open to collaborate`, 복사 완료) |
| `--accent-orange` | `#FF9500` | `#FF9F0A` | 진행 중 상태(`In Progress`, `WIP`) |
| `--accent-gold` | `#D97706` | `#F59E0B` | 대표 프로젝트(`Featured`) 하이라이트 |

---

## 3. 타이포그래피 (Typography System)

- **기본 UI/본문 폰트**: `Pretendard`, `-apple-system`, `BlinkMacSystemFont`, `Inter`, `system-ui`, `sans-serif` (`letter-spacing: -0.015em`)
- **숫자/기간/코드 폰트**: `JetBrains Mono`, `SF Mono`, `Menlo`, `monospace` + `tabular-nums`
- **타입 스케일**:
  - `Display (Hero)`: `36px–44px` / `1.15` (Bold, `-0.03em`)
  - `Section Title (H2)`: `24px–28px` / `1.25` (Bold, `-0.02em`)
  - `Card Title (H3)`: `17px–19px` / `1.35` (SemiBold, `-0.015em`)
  - `Body`: `14px–15px` / `1.65` (Regular, `-0.005em`)
  - `Caption / Label`: `12px` / `1.4` (Medium, `0.01em`)

---

## 4. 레이아웃 및 6대 섹션 컴포넌트 명세

- **컨테이너 폭**: `max-w-[1120px] mx-auto px-5 sm:px-8`
- **섹션 간격**: `space-y-16 sm:space-y-20`
- **벤토 카드 공통 규격**: `.bento-card` (`border-radius: 24px`, `padding: 24px–32px`, 미세 그림자 + 호버 시 보더/그림자 강화)

1. **Frosted Glass Top Navigation Bar (`52px`)**
   - `sticky top-0 z-40 glass-panel`
   - 좌측: 모노그램/이름 워드마크 (`jhpark`)
   - 중앙: 앵커 메뉴 (`About`, `Projects`, `Experience`, `Stack`, `Writing`, `Contact`) — 현재 스크롤 섹션에 `#0071E3` 하단 인디케이터 표시
   - 우측: 한/영(`KO/EN`) 토글 + 라이트/다크 모드 토글
2. **Bento Hero & Key Metrics**
   - 12컬럼 비대칭 그리드: 좌측 8컬럼 메인 소개 카드(상태 닷, 이름/직무, 핵심 소개, 주요 CTA), 우측 4컬럼 지표/포커스 카드 2단 구성.
3. **Projects Showcase & Detail Modal**
   - 알약형 세그먼트 필터(`rounded-full bg-[#EBEBED] dark:bg-[#1C1C1E] p-1`)로 카테고리 필터링.
   - 2컬럼 벤토 카드 그리드: 상태 닷 + 연도(`font-mono`), 요약, 핵심 성과 1줄, 기술 스택 칩, 외부 링크.
   - 카드 클릭 시 **Project Detail Modal** 오픈: 문제 정의, 해결 과정, 기술 아키텍처, 정량 성과, GitHub/Demo 링크 제공 (`ESC` 및 백드롭 클릭 닫기).
4. **Experience & Education Timeline**
   - 경력/학력을 구분된 벤토 카드 내부의 클린 타임라인으로 표현. 좌측 `font-mono tabular-nums` 기간 컬럼 + 우측 기관/역할/임팩트 불릿.
5. **Tech Stack & Skills**
   - 퍼센트 게이지 바 대신 카테고리별(Frontend / Backend / Infra & Data / Tools) 벤토 카드 내 정제된 칩 리스트. 핵심(Core) 스킬은 블루 틴트 뱃지로 구분.
6. **Writing / Notes**
   - 발행일(`font-mono`) + 제목 + 태그 + 읽기 시간 + 화살표 호버 모션이 결합된 단일 벤토 리스트 카드.
7. **Contact & Minimalist Footer**
   - Contact 벤토 배너: 이메일 원클릭 복사(`Copied` 인라인 피드백) + GitHub / LinkedIn / Blog 링크 카드.
   - Footer: `search-only-good-stock-fe`와 동일한 단일 라인 미니멀 푸터(저작권 · 퀵 링크 · KO/EN · Theme 토글).

---

## 5. 콘텐츠 커스터마이징 가이드

모든 프로필 정보(한국어/영어 텍스트, 지표, 프로젝트, 경력, 기술 스택, 글, 연락처)는 단일 파일 [`src/data/profile.ts`](src/data/profile.ts)에서 관리합니다.
컴포넌트 코드를 수정하지 않고 `src/data/profile.ts`의 값만 교체하면 전체 사이트에 즉시 반영됩니다.
