import Image from "next/image";
import { notes, site, works } from "@/lib/site";

export default function Footer() {
  const linked = works.filter((w) => w.url);
  return (
    <footer className="gfoot">
      <div className="inner">
        <div className="top">
          <div className="brand">
            <Image src="/logo-wordmark.png" alt="TELOSIX" width={900} height={145} />
            <p>
              웹사이트와 웹서비스를 만드는 1인 회사
              <br />
              {site.email} · @{site.instagram}
            </p>
          </div>
          <div className="cols">
            <div>
              <h3>회사</h3>
              <ul>
                <li><a href="#founder">소개</a></li>
                <li><a href="#services">하는 일</a></li>
                <li><a href="#process">진행 방식</a></li>
                <li><a href="#faq">자주 받는 질문</a></li>
              </ul>
            </div>
            <div>
              <h3>만든 것</h3>
              <ul>
                {linked.map((w) => (
                  <li key={w.title}>
                    <a href={w.url} target="_blank" rel="noopener noreferrer">
                      {w.title}
                    </a>
                  </li>
                ))}
                <li><a href="#press">언론 보도</a></li>
              </ul>
            </div>
            <div>
              <h3>연락</h3>
              <ul>
                <li><a href={`mailto:${site.email}`}>이메일</a></li>
                <li>
                  <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                    인스타그램
                  </a>
                </li>
                <li>
                  <a href={site.founder.portfolio} target="_blank" rel="noopener noreferrer">
                    대표 포트폴리오
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ol className="fn">
          {notes.map((n, i) => (
            <li key={i} id={`fn-${i + 1}`}>
              {n}
            </li>
          ))}
        </ol>

        <div className="legal">
          <span>
            © {new Date().getFullYear()} TELOSIX(텔로식, 구 {site.formerName}) · 대표 {site.founder.name}
          </span>
          <span>telosix.co.kr</span>
        </div>
      </div>
    </footer>
  );
}
