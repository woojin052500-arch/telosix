import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

const nav = [
  { href: "#founder", label: "소개" },
  { href: "#services", label: "하는 일" },
  { href: "#work", label: "만든 것" },
  { href: "#press", label: "언론 보도" },
  { href: "#faq", label: "질문" },
];

export default function Header() {
  return (
    <header className="gnav">
      <div className="inner">
        <a className="logo" href="#top" aria-label="TELOSIX 처음으로">
          <Image src="/logo-wordmark.png" alt="TELOSIX" width={900} height={145} priority />
        </a>
        <nav className="links" aria-label="주요 메뉴">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="ask" href="#contact">
          문의하기
        </a>
        <MobileMenu links={nav} />
      </div>
    </header>
  );
}
