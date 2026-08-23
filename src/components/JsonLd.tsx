import { faqs, services, site, works } from "@/lib/site";

/** 검색엔진용 구조화 데이터(schema.org). 리치 결과 노출에 사용됩니다. */
export default function JsonLd() {
  const organization = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: ["텔로식스", site.legalName],
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${site.url}/og-image.png`,
    description: site.description,
    email: site.email,
    foundingDate: "2026",
    slogan: site.tagline,
    areaServed: { "@type": "Country", name: "대한민국" },
    knowsAbout: [
      "웹사이트 제작",
      "웹서비스 개발",
      "Next.js",
      "검색엔진최적화(SEO)",
      "웹 애널리틱스",
    ],
    sameAs: [site.instagramUrl, site.founder.portfolio],
    founder: { "@id": `${site.url}/#founder` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TELOSIX 서비스",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.desc,
        },
      })),
    },
  };

  const founder = {
    "@type": "Person",
    "@id": `${site.url}/#founder`,
    name: site.founder.name,
    alternateName: site.founder.nameEn,
    jobTitle: "대표 / Founder",
    worksFor: { "@id": `${site.url}/#organization` },
    url: site.founder.portfolio,
    sameAs: [site.founder.portfolio, site.instagramUrl],
    knowsAbout: ["TypeScript", "Next.js", "React", "Supabase", "SEO"],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "ko-KR",
    publisher: { "@id": `${site.url}/#organization` },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const portfolio = {
    "@type": "ItemList",
    "@id": `${site.url}/#works`,
    name: "TELOSIX 작업 사례",
    itemListElement: works.map((w, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: w.title,
        description: w.note,
        genre: w.kind,
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, founder, website, faqPage, portfolio],
  };

  return (
    <script
      type="application/ld+json"
      // 정적 데이터만 직렬화합니다.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
