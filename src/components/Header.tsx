import Image from "next/image";
import { site } from "@/lib/site";

const nav = [
  { href: "#work", label: "하는 일" },
  { href: "#index", label: "만든 것" },
  { href: "#founder", label: "대표" },
  { href: "#questions", label: "질문" },
];

export default function Header() {
  return (
    <header className="rule border-t-0">
      <div className="wrap flex items-center justify-between py-6 max-md:flex-col max-md:items-start max-md:gap-4 max-md:py-5">
        <div className="flex items-center justify-between max-md:w-full">
          <a href="#top" className="flex items-baseline gap-3" aria-label="TELOSIX 홈">
            <Image
              src="/logo-mark.png"
              alt=""
              width={512}
              height={240}
              priority
              className="w-7 translate-y-1"
            />
            <span className="text-[17px] font-extrabold tracking-[0.2em]">TELOSIX</span>
            <span className="mono text-steel max-md:hidden">웹 개발 스튜디오</span>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="mono border border-ink px-4 py-2 text-ink hover:bg-ink hover:text-white md:hidden"
          >
            문의
          </a>
        </div>

        <nav
          aria-label="주요 메뉴"
          className="flex items-center gap-9 max-md:w-full max-md:justify-between max-md:gap-0"
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="whitespace-nowrap text-[14px] text-muted hover:text-ink max-md:text-[13px]"
            >
              {n.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="mono whitespace-nowrap border border-ink px-4 py-2 text-ink hover:bg-ink hover:text-white max-md:hidden"
          >
            문의 보내기
          </a>
        </nav>
      </div>
    </header>
  );
}
