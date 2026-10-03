import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import JsonLd from "@/components/JsonLd";
import { credentials, faqs, process, services, site, stats, works } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Effects />
      <Header />
      <main id="main">
        <Hero />
        <Numbers />
        <Services />
        <Process />
        <Work />
        <Founder />
        <Questions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function SecHead({ no, name, title, lede }: { no: string; name: string; title: React.ReactNode; lede?: string }) {
  return (
    <div className="sec-head rv">
      <span className="sec-no">
        <b>{no}</b> / {name}
      </span>
      <h2 className="sec-title">{title}</h2>
      {lede && <p className="sec-lede">{lede}</p>}
    </div>
  );
}

/* ---------------------------------------------------------------- Hero */

const marquee = [...works.map((w) => w.title), "웹사이트 · 웹서비스 · 검색 노출"];

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-top">
        <div>
          <p className="kicker rv">
            <span className="dot" />
            TELOSIX — Web Studio · Since {site.founded}
          </p>
          <h1 className="rv">
            웹사이트를 만들고,
            <br />
            <span className="hl">검색에 올리고,</span>
            <br />
            <span className="acc">숫자를 확인</span>합니다.
          </h1>
          <p className="lede rv">
            <b>TELOSIX(텔로식)</b>는 웹사이트와 웹서비스를 만드는 작은 스튜디오입니다. 기획, 개발,
            배포, 검색 등록까지 <b>한 사람이 처음부터 끝까지</b> 맡습니다. 중간에 담당자가 바뀌지
            않으니 설명을 두 번 할 일도 없습니다.
          </p>
          <div className="actions rv">
            <a className="btn solid" href="#contact">
              프로젝트 문의 <span className="arr">↗</span>
            </a>
            <a className="btn" href="#work">
              만든 것 보기 <span className="arr">↗</span>
            </a>
          </div>
        </div>

        <div className="rv">
          <div className="card-stage">
            <div className="bizcard" id="bizcard" aria-label={`TELOSIX 웹 개발 스튜디오 — ${site.email}`}>
              <div className="top">
                <div>
                  <div className="b">TELOSIX</div>
                  <div className="tag">웹사이트 · 웹서비스 · 검색 노출</div>
                </div>
                <span className="side">STUDIO</span>
              </div>
              <div className="chip" aria-hidden />
              <div className="bottom">
                <div>
                  <div className="role">답장은 보통 24시간 안에</div>
                  <div className="name">{site.email}</div>
                </div>
                <svg
                  className="nfc"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M8.5 7.5a6 6 0 0 1 0 9" />
                  <path d="M12 5a9.5 9.5 0 0 1 0 14" />
                  <path d="M15.5 2.5a13 13 0 0 1 0 19" />
                  <path d="M5 10a2.5 2.5 0 0 1 0 4" />
                </svg>
              </div>
            </div>
          </div>
          <p className="card-cap mono">↖ 카드 위에 마우스를 올려보세요</p>
        </div>
      </div>

      <div className="wordmark" aria-hidden>
        TELOSIX
      </div>
      <div className="marquee" aria-hidden>
        <div className="track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Numbers */

function Numbers() {
  return (
    <section className="sec" aria-label="주요 지표" style={{ paddingTop: "clamp(56px,8vw,96px)" }}>
      <div className="wrap">
        <div className="stats rv">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="n">
                {s.n}
                {s.unit && <small>{s.unit}</small>}
              </div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Services */

function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <SecHead
          no="01"
          name="Services"
          title={
            <>
              <span className="ko">네 가지를</span> <em className="ko">합니다</em>
            </>
          }
        />
        <div className="cells rv">
          {services.map((s) => (
            <article className="cell" key={s.no}>
              <span className="k">
                <span>{s.no}</span>
                <span aria-hidden>✦</span>
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="meta">{s.meta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Process */

function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <SecHead
          no="02"
          name="Process"
          title={
            <>
              How it <em>works</em>
            </>
          }
          lede="단계마다 결과물을 하나씩 드립니다. 중간에 방향을 틀어도 되고, 멈춰도 됩니다."
        />
        <ol className="steps rv" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {process.map((p) => (
            <li className="step" key={p.step}>
              <span className="k" aria-hidden>
                {p.step}
              </span>
              <h3>
                <span className="sr-only">단계 {p.step}. </span>
                {p.title}
              </h3>
              <p>{p.doing}</p>
              <span className="out">{p.out}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Work */

function Work() {
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <SecHead
          no="03"
          name="Work"
          title={
            <>
              Selected <em>Work</em>
            </>
          }
          lede="남의 일만 받아서 한 게 아니라, 스스로 서비스를 내고 트래픽과 매출을 만들어 봤습니다. 아래 숫자는 전부 실제 기록입니다."
        />
        <ol className="work">
          {works.map((w, i) => (
            <li className="item rv" key={w.title}>
              <span className="no">
                {String(i + 1).padStart(2, "0")} · {w.year}
              </span>
              <h3>{w.title}</h3>
              <div className="desc">
                <span className="tag">{w.kind}</span>
                <p>{w.note}</p>
              </div>
              <span className="kpi">{w.result}</span>
            </li>
          ))}
        </ol>
        <div className="note rv">
          <p>
            <b>더 자세한 기록</b> — 서비스별 화면과 수상·자격 내역은 대표 포트폴리오에 정리해
            두었습니다.
          </p>
          <a href={site.founder.portfolio} target="_blank" rel="noopener noreferrer">
            포트폴리오 보기 ↗
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Founder */

function Founder() {
  return (
    <section className="sec" id="founder">
      <div className="wrap">
        <SecHead
          no="04"
          name="Founder"
          title={
            <>
              <span className="ko">{site.founder.name}</span> <em>{site.founder.nameEn}</em>
            </>
          }
        />
        <div className="about">
          <p className="lead rv">
            &lsquo;잘 만든 것&rsquo;과 &lsquo;쓰이는 것&rsquo;은 다릅니다. <span>그래서 검색 유입과
            매출을 먼저 봅니다.</span>
          </p>
          <div className="col rv">
            <h3>대표 — {site.founder.name}</h3>
            <p>
              중학교 2학년입니다. 에듀테크 스타트업 <b>WJedulab</b>을 만들면서 개발을 시작했고,
              만든 것을 실제로 사람들 앞에 내보내는 데 재미를 붙였습니다. 지금까지{" "}
              <b>다섯 개의 서비스</b>를 출시했습니다.
            </p>
            <p>
              첫 서비스는 완성도에 신경 쓰다 아무도 안 썼고, 다음부터는 검색 유입과 매출을 먼저
              봤습니다. 그 뒤로 <b>유료 광고 없이 릴스 조회수 75만 회</b>, <b>검색 클릭 9,360회</b>, <b>광고주 12곳 입점</b> 같은 숫자가
              나왔습니다.
            </p>
            <p>TELOSIX는 그 방식을 그대로 다른 분들의 서비스에 적용하려고 만든 회사입니다.</p>
            <p>
              <a href={site.founder.portfolio} target="_blank" rel="noopener noreferrer">
                포트폴리오 보기 →
              </a>
            </p>
          </div>
          <div className="creds rv">
            {credentials.map((c) => (
              <div key={c.label}>
                <h3>{c.label}</h3>
                <ul>
                  {c.items.map((item) => (
                    <li key={item} className={item.includes("1위") ? "top" : undefined}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Questions */

function Questions() {
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <SecHead
          no="05"
          name="FAQ"
          title={
            <>
              <span className="ko">자주 받는</span> <em className="ko">질문</em>
            </>
          }
        />
        <div className="faq rv">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                <span className="no">Q{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.q}</h3>
                <span className="pm" aria-hidden>
                  +
                </span>
              </summary>
              <p className="a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Contact */

function Contact() {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="contact rv">
          <p className="lbl">06 / 문의 · 협업</p>
          <h2>
            만들고 싶은 게 있으면
            <br />한 줄만 보내주세요.
          </h2>
          <p>
            원하는 것, 예산, 일정 중 <b>아는 것만 적어도 됩니다.</b> 첫 대화에서 무엇을 넣을지
            정리하고, 견적과 일정을 드립니다. 답장은 보통 24시간 안에 드립니다.
          </p>
          <p>
            인스타그램 DM도 괜찮습니다 — <b>@{site.instagram}</b>
          </p>
          <div className="svc">
            {services.map((s) => (
              <span key={s.no}>{s.title}</span>
            ))}
          </div>
          <div className="actions">
            <a className="btn solid" href={`mailto:${site.email}?subject=[TELOSIX] 문의`}>
              {site.email} <span className="arr">↗</span>
            </a>
            <a className="btn" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              인스타그램 DM <span className="arr">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
