import Image from "next/image";

const nav = [
  { href: "#services", label: "하는 일" },
  { href: "#work", label: "만든 것" },
  { href: "#founder", label: "대표" },
  { href: "#faq", label: "질문" },
];

export default function Header() {
  return (
    <header className="hdr">
      <div className="wrap row">
        <a className="logo" href="#top" aria-label="TELOSIX 처음으로">
          <Image src="/logo-wordmark.png" alt="TELOSIX" width={900} height={145} priority />
        </a>
        <nav aria-label="주요 메뉴">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
          <a className="ask" href="#contact">
            문의
          </a>
        </nav>
      </div>
    </header>
  );
}
