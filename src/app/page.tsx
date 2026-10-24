import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { credentials, faqs, press, process, services, site, works } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main" className="wrap">
        <Intro />
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

/* --------------------------------------------------------------- Intro */

function Intro() {
  return (
    <section className="intro" id="top">
      <div className="tx">
        <h1>텔로식은 웹사이트와 웹서비스를 만드는 1인 회사입니다.</h1>
        <p>
          대표 <b>{site.founder.name}</b>이 기획, 개발, 배포, 검색 등록까지 직접 합니다. 스코어랩, 끌,
          500원 광고판을 만들어 운영하고 있고, 같은 방식으로 다른 분들의 사이트도 만듭니다.
        </p>
        <p>
          {site.foundedMonth}에 창업했고 사업자등록을 마쳤습니다. 이전 이름은 {site.formerName}
          입니다.
        </p>
        <p className="reach">
          문의는 <a href={`mailto:${site.email}`}>{site.email}</a> 또는{" "}
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            인스타그램 @{site.instagram}
          </a>
          로 보내 주세요.
        </p>
      </div>
      <Image
        className="mark"
        src="/logo-mark.png"
        alt=""
        width={512}
        height={240}
        priority
      />
    </section>
  );
}

/* ------------------------------------------------------------ Services */

function Services() {
  return (
    <section className="sec" id="services">
      <h2>하는 일</h2>
      <p className="sub">외주로 맡을 수 있는 일은 아래 네 가지입니다.</p>
      <dl className="defs">
        {services.map((s) => (
          <div key={s.title}>
            <dt>
              <h3>{s.title}</h3>
            </dt>
            <dd>
              {s.desc}
              <span className="stack">{s.meta}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ------------------------------------------------------------- Process */

function Process() {
  return (
    <section className="sec" id="process">
      <h2>진행 방식</h2>
      <p className="sub">
        단계마다 결과물을 하나씩 드립니다. 중간에 방향을 바꾸거나 멈춰도 됩니다.
      </p>
      <ol className="steps">
        {process.map((p) => (
          <li key={p.step}>
            <b>{p.title}</b>
            <span>{p.doing}</span>
            <em>{p.out}</em>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------------------------------------------------------------- Work */

function Work() {
  return (
    <section className="sec" id="work">
      <h2>만든 것</h2>
      <p className="sub">외주가 아니라 직접 내놓고 운영한 서비스입니다. 숫자는 실제 기록입니다.</p>
      <table className="works tx">
        <thead>
          <tr>
            <th scope="col">서비스</th>
            <th scope="col">내용</th>
            <th scope="col">기록</th>
            <th scope="col">출시</th>
          </tr>
        </thead>
        <tbody>
          {works.map((w) => (
            <tr key={w.title}>
              <td className="name">
                {w.url ? (
                  <a href={w.url} target="_blank" rel="noopener noreferrer">
                    {w.title}
                  </a>
                ) : (
                  w.title
                )}
                <small>{w.kind}</small>
              </td>
              <td className="what">{w.note}</td>
              <td className="rec">{w.result}</td>
              <td className="when">{w.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ margin: "36px 0 10px" }}>언론 보도</h3>
      <ul className="press tx">
        {press.map((p) => (
          <li key={p.url}>
            <span className="src">{p.outlet}</span>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------- Founder */

function Founder() {
  return (
    <section className="sec" id="founder">
      <h2>대표 {site.founder.name}</h2>
      <p className="sub">{site.founder.nameEn} · 중학교 2학년</p>
      <div className="founder">
        <div className="body tx">
          <p>
            해커톤에 나가려다 디자인을 맡아 줄 팀원을 못 구해 포기한 적이 있습니다. 그때 팀원을 찾는
            앱 <b>끌</b>을 만들었고, 고입 준비를 하다 내 점수로 갈 수 있는 학교를 보여주는{" "}
            <b>스코어랩</b>을 만들었습니다. 제가 겪은 불편이 그대로 서비스가 됐습니다.
          </p>
          <p>
            스코어랩은 유료 광고 없이 올린 릴스 영상 하나가 <b>약 75만 회</b> 재생되면서 알려졌고,
            구글 검색 클릭은 9월 말까지 <b>9,360회</b>입니다. 처음 12개교로 시작한 학교 목록은
            이용자 요청을 받아 51개교가 됐습니다.
          </p>
          <p>
            회사 이름은 광고판에서 시작한 우진애드링크, 교육 쪽으로 넓힌 WJedulab을 거쳐 지금의
            TELOSIX가 됐습니다.
          </p>
          <p>
            더 자세한 기록은{" "}
            <a href={site.founder.portfolio} target="_blank" rel="noopener noreferrer">
              대표 포트폴리오
            </a>
            에 있습니다.
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
        </aside>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Questions */

function Questions() {
  return (
    <section className="sec" id="faq">
      <h2>자주 받는 질문</h2>
      <p className="sub">상담 전에 많이 물어보시는 것들입니다.</p>
      <dl className="qa">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt>{f.q}</dt>
            <dd>{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ------------------------------------------------------------- Contact */

function Contact() {
  return (
    <section className="sec contact tx" id="contact">
      <h2>문의</h2>
      <p>
        만들고 싶은 것을 한두 줄로 보내 주세요. 예산이나 일정은 정해진 것만 적으셔도 됩니다. 보통
        하루 안에 답장합니다.
      </p>
      <a className="mail" href={`mailto:${site.email}?subject=[TELOSIX] 문의`}>
        {site.email}
      </a>
      <p>
        인스타그램 DM(
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
          @{site.instagram}
        </a>
        )도 받습니다.
      </p>
    </section>
  );
}
