import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import RailDots from "@/components/RailDots";
import Reveal from "@/components/Reveal";
import {
  advantages,
  credentials,
  faqs,
  press,
  process,
  services,
  site,
  works,
} from "@/lib/site";

/** 숫자 옆 각주 번호. 푸터의 출처 목록으로 이어집니다. */
function Ref({ n }: { n: number }) {
  return (
    <sup className="ref">
      <a href={`#fn-${n}`} aria-label={`출처 ${n}`}>
        {n}
      </a>
    </sup>
  );
}

const byTitle = (t: string) => {
  const w = works.find((x) => x.title.startsWith(t));
  if (!w) throw new Error(`works에 ${t}가 없습니다`);
  return w;
};

const Arrow = () => (
  <span className="arr" aria-hidden>
    →
  </span>
);

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <Reveal />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Work />
        <Press />
        <Process />
        <Questions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------------------------------------- 첫 화면 */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="bg" aria-hidden>
        <Image src="/logo-mark.png" alt="" width={512} height={240} priority />
      </div>
      <div className="inner">
        <div className="stats">
          <div className="stat">
            <b>
              75만<Ref n={2} />
            </b>
            <span>홍보 릴스 1개 조회수</span>
          </div>
          <div className="stat">
            <b>
              9,360<Ref n={1} />
            </b>
            <span>구글 검색 클릭</span>
          </div>
        </div>
        <p className="intro">
          유행보다 쓰이는 것을 만듭니다. 웹사이트와 웹서비스의 기획부터 배포, 검색 등록까지 대표 한
          사람이 처음부터 끝까지 맡습니다.
        </p>
        <h1>
          <span className="sr-only">TELOSIX(텔로식): </span>
          웹사이트와 웹서비스를 만드는 <span className="hl">1인 회사</span>
        </h1>
        <div className="btns">
          <a className="btn" href="#contact">
            프로젝트 문의 <Arrow />
          </a>
        </div>
        <p className="foot">
          <span>
            {site.foundedMonth} 창업 · 구 {site.formerName}
          </span>
          <span>telosix.co.kr</span>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 소개 */

function About() {
  return (
    <section className="sec" id="founder">
      <div className="inner">
        <p className="eyebrow" data-reveal>
          About.
        </p>
        <div className="about">
          <div className="side" data-reveal>
            <div className="mark">
              <Image src="/logo-mark.png" alt="" width={512} height={240} />
            </div>
            <p className="tag">
              대표 <b>{site.founder.name}</b> · 중학교 2학년
              <br />
              {site.foundedMonth} 창업, 사업자등록 완료
            </p>
          </div>
          <div className="story" data-reveal>
            <p>
              해커톤에 나가려다 디자인을 맡아 줄 팀원을 못 구해 포기한 적이 있습니다. 그 일로 팀원을
              찾는 앱 <span className="hl">끌</span>을 만들었고, 고입을 준비하다 내 점수로 갈 수
              있는 학교를 알기 어려워 <span className="hl">스코어랩</span>을 만들었습니다.
            </p>
            <p className="small">
              회사 이름은 광고판에서 시작한 우진애드링크, 교육 쪽으로 넓힌 {site.formerName}을 거쳐
              지금의 TELOSIX가 됐습니다. 겪은 불편을 서비스로 만들던 방식을 이제 다른 분들의 사이트에
              씁니다.
            </p>
            <div className="more">
              <hr />
              <a className="btn" href={site.founder.portfolio} target="_blank" rel="noopener noreferrer">
                대표 포트폴리오 <Arrow />
              </a>
            </div>
          </div>
        </div>
        <div className="creds" data-reveal>
          {credentials.map((c) => (
            <div key={c.label}>
              <h3>{c.label}</h3>
              <ul>
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 하는 일 */

function Services() {
  return (
    <section className="sec" id="services">
      <div className="inner">
        <p className="eyebrow" data-reveal>
          Our Service.
        </p>
        <div className="services">
          <div data-reveal>
            <h2 className="title">기획부터 운영까지, 맡을 수 있는 네 가지 일</h2>
            <p className="lead">직접 운영하는 서비스와 같은 방식으로 만듭니다.</p>
          </div>
          <div className="svc" data-reveal>
            {services.map((s, i) => (
              <details key={s.title} open={i === 0}>
                <summary>
                  <span className="no">{String(i + 1).padStart(2, "0")}.</span>
                  <span className="name">
                    {s.title}
                    <small>{s.en}</small>
                  </span>
                </summary>
                <div className="body">
                  <span className="label">쓰는 도구</span>
                  <div className="tags">
                    {s.meta.split(" · ").map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <p>{s.desc}</p>
                  <a className="btn" href="#contact">
                    견적 문의 <Arrow />
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 강점 */

function Advantages() {
  return (
    <section className="sec" id="advantage">
      <div className="inner">
        <p className="eyebrow" data-reveal>
          Our Advantage.
        </p>
        <div className="adv">
          <h2 className="title" data-reveal>
            텔로식에 맡기면 다른 점
          </h2>
          <ul>
            {advantages.map((a, i) => (
              <li key={a.title} data-reveal>
                <h3>{a.title}</h3>
                <span className="what">{a.what}</span>
                <p>
                  {a.desc}
                  {i === 2 && <Ref n={1} />}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 만든 것 */

function Work() {
  const items = [
    { w: byTitle("스코어랩"), name: "스코어랩", big: "51개교", ref: 3, label: "등록 학교, 12개교에서 시작", glow: "rgba(40,83,168,.26)", gx: "75%", gy: "25%" },
    { w: byTitle("끌"), name: "끌", big: "100여 명", ref: 4, label: "출시 2주 만의 설치 수", glow: "rgba(180,191,211,.7)", gx: "25%", gy: "20%" },
    { w: byTitle("500원"), name: "500원 광고판", big: "260,000원", ref: 5, label: "출시 4일 매출 · 광고주 12곳", glow: "rgba(40,83,168,.2)", gx: "20%", gy: "80%" },
    { w: byTitle("Certa"), name: "Certa", big: "108종", ref: 0, label: "자격증 정보, 문항 300개 이상", glow: "rgba(143,176,239,.4)", gx: "80%", gy: "70%" },
    { w: byTitle("Grid Shift"), name: "Grid Shift", big: "베타", ref: 0, label: "구글 플레이 베타 테스트", glow: "rgba(58,61,69,.16)", gx: "50%", gy: "10%" },
  ];
  return (
    <section className="sec" id="work">
      <div className="inner">
        <p className="eyebrow" data-reveal>
          Selected Work.
        </p>
        <div className="work-head" data-reveal>
          <h2 className="title">직접 만들고 운영한 서비스</h2>
          <p>
            2026년에 내놓은 서비스 {items.length}개
            <br />
            숫자는 실제 기록입니다
          </p>
        </div>
        <div className="works" id="work-rail">
          {items.map(({ w, name, big, ref, label, glow, gx, gy }) => (
            <article className="wk" key={name} data-reveal>
              <div
                className="pic"
                style={{ "--glow": glow, "--gx": gx, "--gy": gy } as React.CSSProperties}
              >
                <b>
                  {big}
                  {ref > 0 && <Ref n={ref} />}
                </b>
                <span>{label}</span>
              </div>
              <div className="cap">
                <h3>
                  {name}
                  {w.url && (
                    <span className="go" aria-hidden>
                      ↗
                    </span>
                  )}
                </h3>
                <small>
                  {w.kind} · {w.year}
                </small>
              </div>
              <p className="line">{w.headline}</p>
              {w.url && (
                <a href={w.url} target="_blank" rel="noopener noreferrer" aria-label={`${name} 사이트 열기`} />
              )}
            </article>
          ))}
        </div>
        <RailDots railId="work-rail" count={items.length} label="서비스 카드 위치" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- 언론 보도 */

const dot = (d: string) => d.replaceAll("-", ".");

function Press() {
  return (
    <section className="sec" id="press">
      <div className="inner">
        <p className="eyebrow" data-reveal>
          In the Press.
        </p>
        <h2 className="title" data-reveal>
          언론에 소개된 TELOSIX
        </h2>
        <div className="press" id="press-rail">
          {press.map((p) => (
            <article className="article" key={p.url} data-reveal>
              <p className="src">
                <b>{p.outlet}</b>
                <span>{p.kind}</span>
                <time dateTime={p.date}>{dot(p.date)}</time>
              </p>
              <blockquote>
                <p>{p.quote}</p>
                <footer>{site.founder.name} 대표</footer>
              </blockquote>
              <h3>{p.title}</h3>
              <a className="read" href={p.url} target="_blank" rel="noopener noreferrer">
                기사 읽기 <Arrow />
                <span className="sr-only">: {p.title}</span>
              </a>
            </article>
          ))}
        </div>
        <RailDots railId="press-rail" count={press.length} label="기사 카드 위치" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- 진행 방식 */

function Process() {
  return (
    <section className="sec" id="process">
      <div className="inner">
        <p className="eyebrow" data-reveal>
          Process.
        </p>
        <h2 className="title" data-reveal>
          단계마다 결과물을 하나씩 드립니다
        </h2>
        <p className="lead" data-reveal>
          중간에 방향을 바꾸거나 멈춰도 됩니다.
        </p>
        <ol className="steps" data-reveal>
          {process.map((p, i) => (
            <li key={p.step}>
              <span className="no">{String(i + 1).padStart(2, "0")}.</span>
              <h3>{p.title}</h3>
              <p>{p.doing}</p>
              <span className="out">{p.out}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 질문 */

function Questions() {
  return (
    <section className="sec" id="faq">
      <div className="inner">
        <p className="eyebrow" data-reveal>
          FAQ.
        </p>
        <div className="faqs">
          <h2 className="title" data-reveal>
            자주 받는 질문
          </h2>
          <div className="faq" data-reveal>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 문의 */

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="glow" aria-hidden />
      <div className="halo" aria-hidden />
      <div className="inner">
        <p className="eyebrow" data-reveal>
          Contact.
        </p>
        <h2 className="title" data-reveal>
          만들고 싶은 게 있다면, 한두 줄이면 됩니다
        </h2>
        <p className="lead" data-reveal>
          예산이나 일정은 정해진 것만 적어도 됩니다. 보통 하루 안에 답장합니다.
        </p>
        <div className="btns" data-reveal>
          <a className="btn" href={`mailto:${site.email}?subject=[TELOSIX] 문의`}>
            프로젝트 문의 <Arrow />
          </a>
          <a className="btn" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            인스타그램 DM
          </a>
        </div>
        <p className="mail" data-reveal>
          이메일 <span>{site.email}</span>
        </p>
      </div>
    </section>
  );
}
