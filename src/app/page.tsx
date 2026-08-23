import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { credentials, faqs, process, services, site, works } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main">
        <Intro />
        <Work />
        <Process />
        <Index />
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
    <section id="top" className="wrap pt-28 pb-24 max-md:pt-14 max-md:pb-16">
      <p className="mono text-steel">
        서울 · 원격 진행 &nbsp;/&nbsp; {site.founded}년 시작
      </p>

      <h1 className="mt-8 text-[clamp(32px,7.4vw,62px)] font-extrabold leading-[1.16] tracking-[-0.025em] max-md:mt-6">
        웹사이트를 만들고,
        <br />
        검색에 올리고,
        <br />
        <span className="text-brand">숫자를 확인</span>합니다.
      </h1>

      <div className="rule mt-16 grid grid-cols-[1fr_360px] gap-16 pt-10 max-lg:grid-cols-1 max-lg:gap-10 max-md:mt-10">
        <p className="max-w-[46ch] text-[17px] leading-[1.9] text-muted">
          TELOSIX는 웹사이트와 웹서비스를 만드는 작은 스튜디오입니다. 기획,
          개발, 배포, 검색 등록까지 한 사람이 처음부터 끝까지 맡습니다. 중간에
          담당자가 바뀌지 않으니 설명을 두 번 할 일도 없습니다.
        </p>

        <dl className="mono space-y-3 text-muted">
          <div className="flex justify-between border-b border-line-soft pb-3">
            <dt className="text-steel">이메일</dt>
            <dd>
              <a href={`mailto:${site.email}`} className="link-u text-ink">
                {site.email}
              </a>
            </dd>
          </div>
          <div className="flex justify-between border-b border-line-soft pb-3">
            <dt className="text-steel">인스타그램</dt>
            <dd>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-u text-ink"
              >
                @{site.instagram}
              </a>
            </dd>
          </div>
          <div className="flex justify-between border-b border-line-soft pb-3">
            <dt className="text-steel">대표</dt>
            <dd className="text-ink">{site.founder.name}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-steel">답장</dt>
            <dd className="text-ink">보통 24시간 안에</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Work */

function Work() {
  return (
    <section id="work" className="rule bg-paper">
      <div className="wrap split py-24 max-md:py-16">
        <p className="label">01 — 하는 일</p>

        <div>
          <h2 className="text-[clamp(24px,4.6vw,34px)] font-bold leading-tight tracking-[-0.02em]">
            네 가지를 합니다
          </h2>

          <div className="mt-12">
            {services.map((s) => (
              <article
                key={s.no}
                className="grid grid-cols-[120px_1fr] gap-12 border-t border-line py-9 max-md:grid-cols-1 max-md:gap-3 max-md:py-7"
              >
                <div>
                  <span className="mono text-steel">{s.no}</span>
                  <h3 className="mt-2 text-[19px] font-bold">{s.title}</h3>
                </div>
                <div>
                  <p className="max-w-[58ch] text-[15.5px] leading-[1.9] text-muted">
                    {s.desc}
                  </p>
                  <p className="mono mt-4 text-steel">{s.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Process */

function Process() {
  return (
    <section id="process" className="rule">
      <div className="wrap split py-24 max-md:py-16">
        <p className="label">02 — 진행</p>

        <div>
          <h2 className="text-[clamp(24px,4.6vw,34px)] font-bold leading-tight tracking-[-0.02em]">
            어떻게 굴러가는지
          </h2>
          <p className="mt-5 max-w-[52ch] text-[15.5px] leading-[1.9] text-muted">
            단계마다 결과물을 하나씩 드립니다. 중간에 방향을 틀어도 되고,
            멈춰도 됩니다.
          </p>

          <table className="stack-table mt-12 w-full border-collapse text-left max-md:mt-8">
            <thead>
              <tr className="border-y border-line">
                <th scope="col" className="mono w-24 py-3 font-normal text-steel">
                  단계
                </th>
                <th scope="col" className="mono w-40 py-3 font-normal text-steel">
                  이름
                </th>
                <th scope="col" className="mono py-3 font-normal text-steel">
                  하는 일
                </th>
                <th scope="col" className="mono w-48 py-3 font-normal text-steel">
                  나오는 것
                </th>
              </tr>
            </thead>
            <tbody>
              {process.map((p) => (
                <tr
                  key={p.step}
                  className="border-b border-line-soft align-top"
                >
                  <td data-mobile-hidden className="mono py-5 text-steel">
                    {p.step}
                  </td>
                  <td
                    data-label={`단계 ${p.step}`}
                    className="py-5 text-[15.5px] font-bold"
                  >
                    {p.title}
                  </td>
                  <td
                    data-label="하는 일"
                    className="py-5 pr-10 text-[15.5px] text-muted max-md:pr-0"
                  >
                    {p.doing}
                  </td>
                  <td data-label="나오는 것" className="py-5 text-[15.5px] text-ink">
                    {p.out}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Index */

function Index() {
  return (
    <section id="index" className="rule bg-paper">
      <div className="wrap split py-24 max-md:py-16">
        <p className="label">03 — 만든 것</p>

        <div>
          <h2 className="text-[clamp(24px,4.6vw,34px)] font-bold leading-tight tracking-[-0.02em]">
            직접 만들고 직접 운영한 것들
          </h2>
          <p className="mt-5 max-w-[54ch] text-[15.5px] leading-[1.9] text-muted">
            남의 일만 받아서 한 게 아니라, 스스로 서비스를 내고 트래픽과 매출을
            만들어 봤습니다. 아래 숫자는 전부 실제 기록입니다.
          </p>

          <ol className="mt-12">
            {works.map((w) => (
              <li
                key={w.title}
                className="grid grid-cols-[68px_1fr_210px] gap-10 border-t border-line py-7 max-md:grid-cols-1 max-md:gap-2"
              >
                <span className="mono pt-1 text-steel">{w.year}</span>
                <div>
                  <h3 className="text-[18px] font-bold">
                    {w.title}
                    <span className="mono ml-3 font-normal text-steel">{w.kind}</span>
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-[15px] text-muted">{w.note}</p>
                </div>
                <span className="pt-1 text-right text-[14px] font-bold text-brand max-md:pt-1 max-md:text-left">
                  {w.result}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-8 border-t border-line pt-8 text-[15px] text-muted">
            더 자세한 기록은{" "}
            <a
              href={site.founder.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="link-u font-bold text-ink"
            >
              대표 포트폴리오
            </a>
            에 정리해 두었습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Founder */

function Founder() {
  return (
    <section id="founder" className="rule">
      <div className="wrap split py-24 max-md:py-16">
        <p className="label">04 — 대표</p>

        <div>
          <div className="flex items-baseline gap-4">
            <h2 className="text-[clamp(24px,4.6vw,34px)] font-bold tracking-[-0.02em]">
              {site.founder.name}
            </h2>
            <span className="mono text-steel">
              {site.founder.role} · {site.founder.nameEn}
            </span>
          </div>

          <div className="mt-8 grid grid-cols-[1fr_300px] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <div className="max-w-[54ch] space-y-5 text-[15.5px] leading-[1.95] text-muted">
              <p>
                중학교 2학년입니다. 에듀테크 스타트업 WJedulab을 만들면서 개발을
                시작했고, 만든 것을 실제로 사람들 앞에 내보내는 데 재미를
                붙였습니다. 지금까지 다섯 개의 서비스를 출시했습니다.
              </p>
              <p>
                가장 많이 배운 건 &lsquo;잘 만든 것&rsquo;과 &lsquo;쓰이는 것&rsquo;이
                다르다는 점이었습니다. 첫 서비스는 완성도에 신경 쓰다 아무도 안
                썼고, 다음부터는 검색 유입과 매출을 먼저 봤습니다. 그 뒤로
                한 달에 2만 조회, 나흘 만에 첫 매출 같은 숫자가 나왔습니다.
              </p>
              <p>
                TELOSIX는 그 방식을 그대로 다른 분들의 서비스에 적용하려고
                만든 회사입니다.
              </p>
              <p className="pt-2">
                <a
                  href={site.founder.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-u font-bold text-ink"
                >
                  포트폴리오 보기 →
                </a>
              </p>
            </div>

            <div className="space-y-8">
              {credentials.map((c) => (
                <div key={c.label}>
                  <h3 className="mono border-b border-line pb-2 text-steel">
                    {c.label}
                  </h3>
                  <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-muted">
                    {c.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Questions */

function Questions() {
  return (
    <section id="questions" className="rule bg-paper">
      <div className="wrap split py-24 max-md:py-16">
        <p className="label">05 — 질문</p>

        <div>
          <h2 className="text-[clamp(24px,4.6vw,34px)] font-bold leading-tight tracking-[-0.02em]">
            자주 받는 질문
          </h2>

          <dl className="mt-12">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="grid grid-cols-[300px_1fr] gap-12 border-t border-line py-8 max-md:grid-cols-1 max-md:gap-2.5 max-md:py-6"
              >
                <dt className="text-[16px] font-bold leading-relaxed">{f.q}</dt>
                <dd className="max-w-[56ch] text-[15.5px] leading-[1.9] text-muted">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Contact */

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy text-white">
      <Image
        src="/logo-mark.png"
        alt=""
        width={512}
        height={240}
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 w-[420px] -translate-y-1/2 opacity-[0.07] brightness-0 invert max-md:hidden"
      />
      <div className="wrap relative py-28 max-md:py-16">
        <p className="mono text-white/40">연락</p>
        <p className="mt-8 max-w-[40ch] text-[clamp(19px,3.4vw,26px)] font-bold leading-[1.5] tracking-[-0.01em] max-md:mt-6">
          만들고 싶은 게 있으면 한 줄만 보내주세요. 원하는 것, 예산, 일정 중
          아는 것만 적어도 됩니다.
        </p>
        <p className="mt-12 max-md:mt-8">
          <a
            href={`mailto:${site.email}?subject=[TELOSIX] 문의`}
            className="link-u text-[clamp(19px,5vw,38px)] font-extrabold tracking-[-0.02em]"
          >
            {site.email}
          </a>
        </p>
        <p className="mono mt-6 text-white/50">
          인스타그램 DM도 괜찮습니다 —{" "}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-u text-white"
          >
            @{site.instagram}
          </a>
        </p>
      </div>
    </section>
  );
}
