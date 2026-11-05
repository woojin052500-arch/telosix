import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="inner" style={{ paddingBlock: "120px" }}>
      <p className="eyebrow">404.</p>
      <h1 className="title">찾으시는 페이지가 없습니다</h1>
      <p className="lead">주소가 바뀌었거나 삭제된 페이지일 수 있습니다.</p>
      <div className="btns" style={{ marginTop: 32 }}>
        <Link className="btn" href="/">
          처음으로 <span className="arr" aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
