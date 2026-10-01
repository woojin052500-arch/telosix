import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div>
        <p className="font-display text-[clamp(96px,22vw,220px)] font-black leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_var(--color-line)]">
          404
        </p>
        <h1 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">
          찾으시는 페이지가 없습니다
        </h1>
        <p className="mt-4 text-sm text-muted">주소가 바뀌었거나 삭제된 페이지일 수 있습니다.</p>
        <Link href="/" className="btn solid mt-8">
          홈으로 돌아가기 <span className="arr">↗</span>
        </Link>
      </div>
    </main>
  );
}
