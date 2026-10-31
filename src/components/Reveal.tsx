"use client";

import { useEffect } from "react";

/**
 * data-reveal 요소를 스크롤해서 보일 때 떠오르게 합니다.
 * 처음 화면에 이미 보이는 요소는 건드리지 않아 깜빡이지 않고,
 * 스크립트가 없거나 실패하면 모든 내용이 그대로 보입니다.
 */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = els.filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    below.forEach((el) => el.classList.add("pre"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          e.target.classList.remove("pre");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    below.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
