import Image from "next/image";

const nav = [
  { href: "#work", label: "만든 것" },
  { href: "#services", label: "하는 일" },
  { href: "#process", label: "진행 방식" },
  { href: "#founder", label: "대표" },
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
        <details className="menu">
          <summary>메뉴</summary>
          <nav aria-label="모바일 메뉴">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a className="ask" href="#contact">
              문의하기
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
