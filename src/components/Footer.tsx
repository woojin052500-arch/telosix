import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="rule">
      <div className="wrap flex items-center justify-between py-8 max-md:flex-col max-md:items-start max-md:gap-3 max-md:py-6">
        <p className="mono text-steel">© {new Date().getFullYear()} TELOSIX</p>
        <p className="mono text-steel max-md:flex max-md:flex-wrap max-md:gap-x-2 max-md:leading-relaxed">
          <a href={`mailto:${site.email}`} className="link-u">
            {site.email}
          </a>
          <span className="px-3 max-md:px-0">·</span>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-u"
          >
            @{site.instagram}
          </a>
          <span className="px-3 max-md:px-0">·</span>
          telosix.co.kr
        </p>
      </div>
    </footer>
  );
}
