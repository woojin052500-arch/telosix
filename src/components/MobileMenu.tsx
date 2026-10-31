"use client";

import { useRef } from "react";

type Link = { href: string; label: string };

/** 좁은 화면용 메뉴. 링크를 누르면 닫힙니다. JS가 없어도 details로 열고 닫을 수 있습니다. */
export default function MobileMenu({ links }: { links: Link[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (ref.current) ref.current.open = false;
  };
  return (
    <details className="menu" ref={ref} onKeyDown={(e) => e.key === "Escape" && close()}>
      <summary aria-label="메뉴 열기">
        <span className="bars" aria-hidden />
      </summary>
      <nav aria-label="모바일 메뉴">
        {links.map((n) => (
          <a key={n.href} href={n.href} onClick={close}>
            {n.label}
          </a>
        ))}
        <a className="ask" href="#contact" onClick={close}>
          문의하기
        </a>
      </nav>
    </details>
  );
}
