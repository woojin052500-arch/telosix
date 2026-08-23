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
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-ink md:text-4xl">
          찾으시는 페이지가 없습니다
        </h1>
        <p className="mt-4 text-sm text-muted">
          주소가 바뀌었거나 삭제된 페이지일 수 있습니다.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
