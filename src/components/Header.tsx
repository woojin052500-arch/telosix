"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "#services", label: "하는 일" },
  { href: "#process", label: "진행" },
  { href: "#work", label: "만든 것" },
  { href: "#founder", label: "대표" },
  { href: "#faq", label: "질문" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    // 화면 가운데에 걸린 섹션을 메뉴에 표시합니다.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) io.observe(el);
    });

    return () => {
      document.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <header className={`hdr${scrolled || open ? " scrolled" : ""}`}>
        <div className="wrap row">
          <a className="brand" href="#top" aria-label="TELOSIX 홈">
            <span className="mark" aria-hidden>
              T
            </span>
            TELOSIX
            <small>웹 개발 스튜디오</small>
          </a>
          <nav className="nav" aria-label="주요 메뉴">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className={active === n.href ? "active" : undefined}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="cta-pill" href="#contact">
            문의하기 <span aria-hidden>↗</span>
          </a>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="drawer"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`drawer${open ? " open" : ""}`} id="drawer">
        <nav aria-label="모바일 메뉴">
          {nav.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label} <small>{String(i + 1).padStart(2, "0")}</small>
            </a>
          ))}
          <a className="cta-pill" href={`mailto:${site.email}`} onClick={() => setOpen(false)}>
            메일로 문의하기 ↗
          </a>
        </nav>
      </div>
    </>
  );
}
