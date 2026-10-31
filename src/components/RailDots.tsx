"use client";

import { useEffect, useState } from "react";

/** 옆으로 넘기는 카드 줄(railId) 아래에 지금 위치를 점으로 보여줍니다. 넓은 화면에서는 CSS로 숨깁니다. */
export default function RailDots({ railId, count, label }: { railId: string; count: number; label: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rail = document.getElementById(railId);
    if (!rail) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const items = Array.from(rail.children) as HTMLElement[];
        const left = rail.getBoundingClientRect().left;
        let best = 0;
        let bestDist = Infinity;
        items.forEach((el, i) => {
          const d = Math.abs(el.getBoundingClientRect().left - left);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        // 끝까지 넘기면 마지막 점을 켭니다(마지막 카드는 왼쪽 끝에 붙지 않으므로).
        if (rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4) best = items.length - 1;
        setActive(best);
      });
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      rail.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [railId]);

  const go = (i: number) => {
    const rail = document.getElementById(railId);
    const el = rail?.children[i] as HTMLElement | undefined;
    if (!rail || !el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollTo({ left: el.offsetLeft - rail.offsetLeft - parseFloat(getComputedStyle(rail).scrollPaddingLeft || "0"), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="dots" role="group" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={i === active ? "on" : undefined}
          aria-label={`${i + 1}번째로 이동`}
          aria-current={i === active ? "true" : undefined}
          onClick={() => go(i)}
        />
      ))}
    </div>
  );
}
