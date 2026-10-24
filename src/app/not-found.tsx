import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="wrap tx" style={{ padding: "96px 24px" }}>
      <p style={{ color: "var(--color-faint)", margin: 0 }}>404</p>
      <h1 style={{ fontSize: 26, margin: "8px 0 12px" }}>찾으시는 페이지가 없습니다</h1>
      <p style={{ color: "var(--color-muted)", margin: "0 0 20px" }}>
        주소가 바뀌었거나 삭제된 페이지일 수 있습니다.
      </p>
      <Link href="/">처음으로 돌아가기</Link>
    </main>
  );
}
