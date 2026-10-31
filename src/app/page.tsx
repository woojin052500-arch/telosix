import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import RailDots from "@/components/RailDots";
import Reveal from "@/components/Reveal";
import { credentials, faqs, press, process, services, site, works } from "@/lib/site";

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

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <Reveal />
      <main id="main">
        <Hero />
        <Featured />
        <Grid />
        <Services />
        <Process />
        <Founder />
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
    <section className="tile hero" id="top">
      <div className="inner">
        <h1>
          <span className="sr-only">TELOSIX(텔로식): </span>
          웹사이트와 웹서비스를 만드는 <em>1인 회사.</em>
        </h1>
        <p className="sub">기획부터 개발, 배포, 검색 등록까지. 대표가 처음부터 끝까지 직접 합니다.</p>
        <div className="ctas">
          <a className="pill fill" href="#contact">
            문의하기
          </a>
          <a className="more" href="#work">
            만든 것 보기
          </a>
        </div>
      </div>
      <div className="stage">
        <Image src="/logo-mark.png" alt="TELOSIX 로고" width={512} height={240} priority />
      </div>
      <p className="note">
        {site.foundedMonth} 창업 · 사업자등록 완료 · 구 {site.formerName}
      </p>
    </section>
  );
}

/* ------------------------------------------------------- 대표 서비스: 스코어랩 */

function Featured() {
  const w = byTitle("스코어랩");
  return (
    <section className="tile gray feature" id="work">
      <div className="inner">
        <p className="eyebrow">직접 만들고 운영하는 서비스</p>
        <h2>스코어랩</h2>
        <p className="sub">{w.headline}</p>
        <div className="ctas">
          <a className="more" href={w.url} target="_blank" rel="noopener noreferrer">
            사이트 열기
          </a>
        </div>
      </div>
      <div className="figures" data-reveal>
        <div className="figure">
          <span className="n">
            9,360<small>회</small>
            <Ref n={1} />
          </span>
          <span className="l">구글 검색 클릭</span>
        </div>
        <div className="figure">
          <span className="n">
            75만<small>회</small>
            <Ref n={2} />
          </span>
          <span className="l">홍보 릴스 1개 조회수, 유료 광고 없이</span>
        </div>
        <div className="figure">
          <span className="n">
            51<small>개교</small>
            <Ref n={3} />
          </span>
          <span className="l">등록 학교, 12개교에서 시작</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ 서비스 격자 */

function Grid() {
  const items = [
    { w: byTitle("끌"), name: "끌", tone: "gray", big: "100여 명", ref: 4, label: "출시 2주 만의 설치 수" },
    { w: byTitle("500원"), name: "500원 광고판", tone: "dark", big: "260,000원", ref: 5, label: "출시 4일 매출 · 광고주 12곳 입점" },
    { w: byTitle("Certa"), name: "Certa", tone: "dark", big: "108종", ref: 0, label: "자격증 정보, 문항 300개 이상" },
    { w: byTitle("Grid Shift"), name: "Grid Shift", tone: "gray", big: "베타", ref: 0, label: "구글 플레이 베타 테스트" },
  ];
  return (
    <section className="grid" aria-label="다른 서비스">
      {items.map(({ w, name, tone, big, ref, label }) => (
        <article key={name} className={`tile ${tone}`} data-reveal>
          <p className="kind">{w.kind}</p>
          <h2>{name}</h2>
          <p className="sub">{w.headline}</p>
          {w.url && (
            <div className="ctas">
              <a className="more" href={w.url} target="_blank" rel="noopener noreferrer">
                사이트 열기
              </a>
            </div>
          )}
          <div className="rec">
            <b>
              {big}
              {ref > 0 && <Ref n={ref} />}
            </b>
            <span>{label}</span>
          </div>
        </article>
      ))}
    </section>
  );
}

/* --------------------------------------------------------------- 하는 일 */

function Services() {
  return (
    <section className="band" id="services">
      <div className="inner">
        <div className="head" data-reveal>
          <h2>하는 일</h2>
          <p>외주로 맡을 수 있는 일은 네 가지입니다. 직접 운영하는 서비스와 같은 방식으로 만듭니다.</p>
        </div>
        <div className="cards" id="svc-rail">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="meta">{s.meta}</span>
            </article>
          ))}
        </div>
        <RailDots railId="svc-rail" count={services.length} label="하는 일 카드 위치" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- 진행 방식 */

function Process() {
  return (
    <section className="band gray" id="process">
      <div className="inner">
        <div className="head" data-reveal>
          <h2>진행 방식</h2>
          <p>단계마다 결과물을 하나씩 드립니다. 중간에 방향을 바꾸거나 멈춰도 됩니다.</p>
        </div>
        <ol className="steps" id="step-rail">
          {process.map((p, i) => (
            <li key={p.step}>
              <span className="no">{i + 1}단계</span>
              <h3>{p.title}</h3>
              <p>{p.doing}</p>
              <span className="out">{p.out}</span>
            </li>
          ))}
        </ol>
        <RailDots railId="step-rail" count={process.length} label="진행 단계 카드 위치" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 대표 */

function Founder() {
  return (
    <section className="band" id="founder">
      <div className="inner">
        <div className="head" data-reveal>
          <h2>대표 {site.founder.name}</h2>
          <p>중학교 2학년. 겪은 불편을 서비스로 만듭니다.</p>
        </div>
        <div className="founder" data-reveal>
          <div className="story">
            <p>
              해커톤에 나가려다 디자인을 맡아 줄 팀원을 못 구해 포기한 적이 있습니다. 그 일로 팀원을
              찾는 앱 <b>끌</b>을 만들었고, 고입을 준비하다 내 점수로 갈 수 있는 학교를 알기 어려워{" "}
              <b>스코어랩</b>을 만들었습니다.
            </p>
            <p>
              회사 이름은 광고판에서 시작한 <b>우진애드링크</b>, 교육 쪽으로 넓힌 <b>{site.formerName}</b>
              을 거쳐 지금의 <b>TELOSIX</b>가 됐습니다.
            </p>
            <p>
              <a className="more" href={site.founder.portfolio} target="_blank" rel="noopener noreferrer">
                대표 포트폴리오 보기
              </a>
            </p>
          </div>
          <aside>
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
            <div className="press">
              <h3>언론 보도</h3>
              <ul>
                {press.map((p) => (
                  <li key={p.url}>
                    <span>{p.outlet}</span>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 질문 */

function Questions() {
  return (
    <section className="band gray" id="faq">
      <div className="inner">
        <div className="head" data-reveal>
          <h2>자주 받는 질문</h2>
        </div>
        <div className="faq" data-reveal>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 문의 */

function Contact() {
  return (
    <section className="band contact" id="contact">
      <div className="inner">
        <div className="head" data-reveal>
          <h2>만들고 싶은 게 있으면 한두 줄로 보내 주세요.</h2>
          <p>예산이나 일정은 정해진 것만 적어도 됩니다. 보통 하루 안에 답장합니다.</p>
        </div>
        <div className="ctas">
          <a className="pill fill" href={`mailto:${site.email}?subject=[TELOSIX] 문의`}>
            이메일 보내기
          </a>
          <a className="more" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            인스타그램 DM
          </a>
        </div>
        <p className="hint">
          <span className="mail">{site.email}</span>
        </p>
      </div>
    </section>
  );
}
