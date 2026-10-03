export const site = {
  name: "TELOSIX",
  legalName: "TELOSIX (텔로식)",
  url: "https://telosix.co.kr",
  locale: "ko_KR",
  tagline: "웹사이트를 만들고, 검색에 올리고, 숫자를 확인합니다",
  description:
    "TELOSIX(텔로식)는 웹사이트와 웹서비스를 만드는 개발 스튜디오입니다. 기획부터 개발, 배포, 검색 등록까지 한 사람이 끝까지 맡습니다.",
  shortDescription: "웹 개발 · SEO",
  email: "woojin052501@gmail.com",
  instagram: "telosix",
  instagramUrl: "https://instagram.com/telosix",
  founded: "2026",
  founder: {
    name: "염우진",
    nameEn: "Woojin Yeom",
    role: "대표",
    portfolio: "https://woojin052500-arch.github.io/WJ_potfolio/",
  },
  keywords: [
    "TELOSIX",
    "텔로식",
    "텔로식스",
    "웹사이트 제작",
    "홈페이지 제작",
    "웹개발 외주",
    "랜딩페이지 제작",
    "Next.js 개발",
    "SEO 최적화",
    "검색엔진최적화",
    "웹서비스 개발",
    "스타트업 홈페이지",
  ],
} as const;

/** 히어로 아래 지표 줄. 전부 실제 기록입니다. */
export const stats = [
  { n: "75", unit: "만", label: "유료 광고 없이 릴스 1개 조회수" },
  { n: "9,360", unit: "회", label: "스코어랩 구글 검색 누적 클릭" },
  { n: "51", unit: "개교", label: "스코어랩 등록 학교 (12개교에서 시작)" },
  { n: "12", unit: "곳", label: "500원 광고판 입점 광고주" },
];

export const services = [
  {
    no: "01",
    title: "웹사이트",
    desc:
      "회사 소개 사이트, 제품 랜딩페이지를 만듭니다. 페이지 수가 적어도 구조는 제대로 잡습니다. 나중에 글이나 사진을 직접 바꿀 수 있게 정리해서 넘겨 드립니다.",
    meta: "Next.js · TypeScript · 정적 배포",
  },
  {
    no: "02",
    title: "웹서비스",
    desc:
      "로그인, 데이터베이스, 관리자 페이지가 있는 서비스를 만듭니다. 사용자가 실제로 데이터를 쌓고 꺼내 쓰는 쪽입니다. 자체 서비스 다섯 개를 이 방식으로 운영해 왔습니다.",
    meta: "Supabase · 인증 · 관리자 · Vercel",
  },
  {
    no: "03",
    title: "검색 노출",
    desc:
      "사이트를 만드는 일과 검색에 걸리게 하는 일은 다릅니다. 메타데이터와 구조화 데이터를 심고, 서치콘솔과 GA4를 붙여 어떤 검색어로 들어오는지 볼 수 있게 합니다.",
    meta: "Search Console · GA4 · 구조화 데이터",
  },
  {
    no: "04",
    title: "앱과 유지보수",
    desc:
      "웹으로 만든 서비스를 앱 형태로 감싸 스토어에 올립니다. 배포가 끝이 아니라서, 원하시면 이후 수정과 개선도 이어서 맡습니다.",
    meta: "Capacitor · 스토어 배포 · 운영",
  },
];

export const process = [
  {
    step: "01",
    title: "이야기",
    doing: "무엇을 바꾸고 싶은지 듣고, 목표 숫자를 하나 정합니다.",
    out: "견적과 일정",
  },
  {
    step: "02",
    title: "설계",
    doing: "화면 구조와 데이터 모양을 잡고 눈으로 볼 수 있게 만듭니다.",
    out: "화면 시안",
  },
  {
    step: "03",
    title: "개발",
    doing: "만들고 배포합니다. 도메인, SSL, 검색 등록까지 처리합니다.",
    out: "동작하는 사이트",
  },
  {
    step: "04",
    title: "확인",
    doing: "들어온 숫자를 보고 다음에 고칠 것을 정리해 드립니다.",
    out: "지표 리포트",
  },
];

export const works = [
  {
    year: "2026",
    title: "스코어랩 (ScoreLab)",
    kind: "고입 에듀테크",
    result: "구글 검색 클릭 9,360회",
    note: "내 점수로 갈 수 있는 고등학교를 보여주는 고입 합격 가능성 분석 서비스. 스코어위키와 특목고 합격 확률 계산기를 하나로 합쳤고, 이용자 요청을 받아 12개교에서 51개교로 늘렸습니다.",
  },
  {
    year: "2026",
    title: "Certa",
    kind: "정보 서비스",
    result: "자격증 108종 정리",
    note: "흩어져 있던 자격증 정보를 한자리에 모아 비교할 수 있게 했습니다.",
  },
  {
    year: "2026",
    title: "끌 (Kkeul)",
    kind: "매칭 앱",
    result: "출시 2주, 100여 명 설치",
    note: "대회 팀원을 찾아 주는 매칭 앱. Google Play 스토어에 정식 출시했습니다.",
  },
  {
    year: "2026",
    title: "500원 광고판",
    kind: "마켓플레이스",
    result: "광고주 12곳 입점",
    note: "1칸에 500원, 한 번 올리면 영구 게재되는 바둑판 광고판. 1,000원으로 시작해 작은 가게도 부담 없도록 500원으로 낮췄습니다. 출시 4일 매출 260,000원.",
  },
  {
    year: "2026",
    title: "Grid Shift",
    kind: "모바일 게임",
    result: "Google Play 베타",
    note: "웹 기술로 만들어 스토어까지 올린 퍼즐 게임.",
  },
];

export const credentials = [
  { label: "수상", items: [
    "전국 중학생 창업아이디어 경진대회 금상 · 창업진흥원장상 (1위, 2026)",
    "한국정보올림피아드 KOI 동상 · 장려상 (2026)",
  ]},
  { label: "자격", items: [
    "Google Analytics 4",
    "PMI Project Management Ready",
    "PMI Fundamentals of Agile / Predictive PM",
  ]},
  { label: "도구", items: [
    "TypeScript · React · Next.js",
    "Python · C/C++",
    "Supabase · Vercel · Capacitor",
  ]},
];

export const faqs = [
  {
    q: "기간은 얼마나 걸리나요?",
    a: "랜딩페이지는 1~2주, 로그인과 데이터베이스가 들어가면 3~6주 정도로 봅니다. 다만 이건 어디까지나 기준이고, 무엇을 넣을지 정리하는 첫 대화에서 정확한 날짜를 확정합니다.",
  },
  {
    q: "SEO는 어디까지 해주나요?",
    a: "사이트 구조, 메타데이터, 구조화 데이터, 사이트맵은 기본으로 들어갑니다. 구글 서치콘솔과 네이버 서치어드바이저 등록, GA4 연결까지 해 드립니다. 키워드를 정하고 글을 쌓는 일은 따로 이야기가 필요합니다.",
  },
  {
    q: "만든 다음에 제가 직접 고칠 수 있나요?",
    a: "코드와 배포 계정을 그대로 넘겨 드립니다. 글과 사진을 바꾸는 방법은 문서로 정리해 함께 드리고, 직접 하기 번거로우시면 유지보수로 맡아도 됩니다.",
  },
  {
    q: "대표가 중학생인데 괜찮을까요?",
    a: "나이보다는 만든 것으로 봐 주시면 좋겠습니다. 지금까지 다섯 개의 서비스를 직접 출시해 트래픽과 매출을 냈고, 아래 작업 목록의 숫자는 전부 실제 기록입니다. 첫 대화에서 판단해 보셔도 늦지 않습니다.",
  },
];
