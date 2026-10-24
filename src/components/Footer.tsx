import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap row">
        <span>
          © {new Date().getFullYear()} TELOSIX(텔로식, 구 {site.formerName}) · 대표 {site.founder.name}
        </span>
        <span>
          <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            인스타그램
          </a>{" "}
          ·{" "}
          <a href={site.founder.portfolio} target="_blank" rel="noopener noreferrer">
            대표 포트폴리오
          </a>
        </span>
      </div>
    </footer>
  );
}
