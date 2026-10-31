"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Link = { href: string; label: string };
type State = "closed" | "open" | "closing";

const CLOSE_MS = 280;

/**
 * 좁은 화면용 메뉴. 열 때는 항목이 차례로 떠오르고, 닫을 때는 거꾸로 사라집니다.
 * 스크립트가 없으면 details 기본 동작으로 열고 닫힙니다.
 */
export default function MobileMenu({ links }: { links: Link[] }) {
  const [state, setState] = useState<State>("closed");
  const timer = useRef<number | undefined>(undefined);

  const close = useCallback(() => {
    setState((s) => (s === "open" ? "closing" : s));
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("closed"), CLOSE_MS);
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (state === "open") close();
    else if (state === "closed") setState("open");
  };

  // 열려 있는 동안 뒤 페이지 스크롤을 막고, Esc나 화면이 넓어지면 닫습니다.
  useEffect(() => {
    if (state !== "open") return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onResize = () => window.innerWidth > 760 && close();
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [state, close]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <details className={`menu ${state}`} open={state !== "closed"}>
      <summary onClick={toggle} aria-label={state === "open" ? "메뉴 닫기" : "메뉴 열기"}>
        <span className="bars" aria-hidden />
      </summary>
      <nav aria-label="모바일 메뉴">
        {links.map((n, i) => (
          <a key={n.href} href={n.href} onClick={close} style={{ "--i": i } as React.CSSProperties}>
            {n.label}
          </a>
        ))}
        <a
          className="ask"
          href="#contact"
          onClick={close}
          style={{ "--i": links.length } as React.CSSProperties}
        >
          문의하기
        </a>
      </nav>
    </details>
  );
}
