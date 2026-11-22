# jhpark.github.io

`search-only-good-stock-fe`의 **Apple 스타일 모던 벤토(Modern Bento) 디자인 시스템**을 기반으로 만든 개인 개발자 프로필 사이트 템플릿입니다.

자세한 디자인 가이드라인은 [DESIGN.md](./DESIGN.md)에서 확인할 수 있습니다.

## 주요 구성

- **Bento Hero & Key Metrics**: 상태 닷, 핵심 소개, 현재 집중 분야, 3컬럼 요약 지표
- **Projects Showcase**: 알약형 세그먼트 필터 + 벤토 카드 + 상세 모달(Problem/Solution/Highlights)
- **Experience & Education**: `JetBrains Mono (tabular-nums)` 기간 정렬 타임라인
- **Tech Stack & Skills**: 카테고리별 주력(Core)/실무 활용 칩 그리드
- **Writing / Notes**: 날짜 정렬 기술 글 리스트 카드
- **Contact & Footer**: 이메일 원클릭 복사 + 소셜 링크 + 라이트/다크 모드 & 한/영(KO/EN) 토글

## 내 정보로 수정하기

모든 텍스트와 항목은 [`src/data/profile.ts`](./src/data/profile.ts) 한 파일에서 관리합니다.
컴포넌트를 건드리지 않고 `profileData` 객체의 내용만 교체하면 6개 섹션(한/영 전환 포함)에 즉시 반영됩니다.

## 로컬 실행 및 빌드

```bash
npm install
npm run dev      # 로컬 개발 서버
npm run build    # TypeScript 검사 및 프로덕션 빌드 (dist/)
npm run preview  # 빌드 결과물 미리보기
```

## GitHub Pages 배포

1. GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정합니다.
2. `main` 브랜치에 푸시하면 [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)이 자동으로 빌드 후 배포합니다.
