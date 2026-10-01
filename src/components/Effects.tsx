"use client";

import { useEffect } from "react";

/** 스크롤 등장 효과(.rv)와 히어로 카드 틸트. 화면에 그리는 것은 없습니다. */
export default function Effects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = document.querySelectorAll<HTMLElement>(".rv");
    let io: IntersectionObserver | undefined;
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          }),
        { threshold: 0.12 },
      );
      els.forEach((el) => io?.observe(el));
    }

    const card = document.getElementById("bizcard");
    if (!card || reduced || !window.matchMedia("(hover: hover)").matches) {
      return () => io?.disconnect();
    }
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.classList.add("live");
      card.style.setProperty("--ry", `${(x - 0.5) * 22}deg`);
      card.style.setProperty("--rx", `${(0.5 - y) * 18}deg`);
      card.style.setProperty("--gx", `${x * 100}%`);
      card.style.setProperty("--gy", `${y * 100}%`);
    };
    const onLeave = () => {
      card.classList.remove("live");
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      io?.disconnect();
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return null;
}
