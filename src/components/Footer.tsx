import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p className="big" aria-hidden>
          TELOSIX
        </p>
        <div className="bar">
          <span>
            © {new Date().getFullYear()} TELOSIX (텔로식) · 대표 {site.founder.name}
          </span>
          <span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {" · "}
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              @{site.instagram}
            </a>
            {" · "}
            telosix.co.kr
          </span>
        </div>
      </div>
    </footer>
  );
}
