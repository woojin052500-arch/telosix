# TELOSIX 공식 웹사이트

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4로 만든 TELOSIX 기업 사이트입니다.
애플 홈페이지식 구성(흰색 · 연회색 구획, 가운데 정렬된 큰 제목, 반투명 상단 메뉴, 각주가 달린 숫자)에
로고 색(차콜 · 블루 · 스틸)을 입혔고, 한국어 SEO가 적용되어 있습니다.

> **레이아웃**: 반응형입니다. 760px 이하에서 상단 메뉴가 '메뉴' 펼침으로 바뀌고 서비스 격자와
> 카드가 한 열로 접힙니다. 클라이언트 자바스크립트 없이 동작합니다(펼침은 `details` 사용).
> 페이지의 숫자 옆 위첨자는 푸터 각주(`src/lib/site.ts`의 `notes`)로 이어지니,
> 숫자를 바꿀 때 각주의 기준일도 같이 고쳐 주세요.

## 1. 실행하기

```bash
npm install      # 최초 1회
npm run dev      # 개발 서버 → http://localhost:3000
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
```

Node.js 20 이상이 필요합니다.

## 2. 배포하기 (Vercel 추천)

1. 이 폴더를 GitHub 저장소에 올립니다.
2. [vercel.com](https://vercel.com) → **Add New → Project** → 저장소 선택 → Deploy.
   (설정은 건드릴 필요 없이 자동 인식됩니다.)
3. Vercel 프로젝트 → **Settings → Domains** 에서 `telosix.co.kr` 연결.
   도메인 등록기관(가비아 등)에서 안내되는 A / CNAME 레코드를 넣어주면 됩니다.
4. `telosix.com` 도 갖고 있다면 같은 화면에서 함께 추가하고
   **Redirect to telosix.co.kr (301)** 로 설정합니다.
   두 주소에서 같은 사이트가 각각 열리면 검색엔진이 중복 문서로 취급하니
   반드시 한쪽으로 넘겨야 합니다.

## 3. 내용 수정하는 법

거의 모든 문구·수치·프로젝트 목록은 **`src/lib/site.ts` 한 파일**에 모여 있습니다.

| 항목 | 위치 |
| --- | --- |
| 회사명, 도메인, 이메일, 인스타 | `site` |
| 하는 일 4종 | `services` |
| 진행 단계 4개 | `process` |
| 만든 것 목록 | `works` |
| 수상 / 자격 / 도구 | `credentials` |
| 자주 묻는 질문 | `faqs` |

FAQ를 수정하면 검색결과용 구조화 데이터(FAQ 스키마)도 자동으로 함께 바뀝니다.

색상은 `src/app/globals.css` 의 `@theme` 블록에서 관리합니다.
(`--color-navy`, `--color-brand` 등)

## 4. SEO 체크리스트

이미 적용된 것:

- 페이지 메타데이터 · 캐노니컬 URL (`src/app/layout.tsx`)
- Open Graph / 트위터 카드 + `public/og-image.png`
- 구조화 데이터 JSON-LD — ProfessionalService, Person, WebSite, FAQPage, ItemList (`src/components/JsonLd.tsx`)
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` 자동 생성
- 파비콘 / 애플 터치 아이콘 / PWA 아이콘
- 시맨틱 마크업(h1 1개, section·article·table·dl), 이미지 alt, 본문 바로가기 링크
- 서버 렌더링(정적 생성)으로 크롤러가 전체 내용을 그대로 읽음
- Pretendard 폰트 자체 호스팅 + 동적 서브셋 → 외부 요청 없이 빠른 로딩

배포 후 직접 해야 할 것:

1. **Google Search Console** 등록 → 소유권 확인 코드 발급 →
   `src/app/layout.tsx` 하단의 `verification` 주석을 해제하고 코드 입력 →
   `https://telosix.co.kr/sitemap.xml` 제출.
2. **네이버 서치어드바이저** 등록 → 같은 방식으로 `naver-site-verification` 코드 입력 → 사이트맵 제출.
3. **Google Analytics 4** 속성 생성 후 측정 ID 연결(필요 시 요청 주세요).
4. 도메인을 바꾸게 되면 `src/lib/site.ts` 의 `url` 한 줄만 고치면 됩니다.
   캐노니컬·사이트맵·robots·OG·구조화 데이터가 모두 이 값을 따라갑니다.

## 5. 폴더 구조

```
src/
├─ app/
│  ├─ layout.tsx       # 메타데이터 · 폰트 · 공통 레이아웃
│  ├─ page.tsx         # 메인 페이지 (모든 섹션)
│  ├─ globals.css      # 디자인 토큰 · 유틸리티
│  ├─ sitemap.ts / robots.ts / manifest.ts
│  └─ not-found.tsx    # 404 페이지
├─ components/         # Header · Footer · JsonLd
└─ lib/site.ts         # 사이트 콘텐츠 데이터 (여기만 고치면 됨)
public/                # 로고 · 아이콘 · OG 이미지 · 폰트
```

폰트: Pretendard (SIL Open Font License 1.1) — `public/fonts/pretendard/LICENSE.txt`
