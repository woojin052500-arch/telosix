import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="rule">
      <div className="wrap flex items-center justify-between py-8">
        <p className="mono text-steel">
          © {new Date().getFullYear()} TELOSIX
        </p>
        <p className="mono text-steel">
          <a href={`mailto:${site.email}`} className="link-u">{site.email}</a>
          <span className="px-3">·</span>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-u"
          >
            @{site.instagram}
          </a>
          <span className="px-3">·</span>
          telosix.co.kr
        </p>
      </div>
    </footer>
  );
}
