'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight, Users, Target, Zap, Heart } from "lucide-react";

const SIGNUP_URL = "https://forms.gle/cHvxNimUb4H7zkov6";
const WHATSAPP_URL = "https://chat.whatsapp.com/HtnrgFwcNvxEBk4bbJy4vq";

const THEME = {
  white: "#ffffff",
  bordeaux: "#800020",
  bordeauxLight: "#a00028",
  gray: "#4b4b4b",
  beige: "#f5f4ef",
  beigeDeep: "#ede9e0",
  dark: "#1a1a1a",
};

const NAV = [
  { label: "About", href: "#about" },
  { label: "The Programme", href: "#programme" },
  { label: "Stories", href: "#stories" },
  { label: "Get Involved", href: "#join" },
];

const NGOS = [
  { src: "/AIM Charity Entrepreneurship.jpg", href: "https://www.charityentrepreneurship.com/", name: "AIM Charity Entrepreneurship" },
  { src: "/Endiomitrose Stichting.jpg", href: "https://www.endometriose.nl/", name: "Endiomitrose Stichting" },
  { src: "/Lafiya Nigeria.jpg", href: "https://lafiyanigeria.org/", name: "Lafiya Nigeria" },
  { src: "/Wakker Dier.jpg", href: "https://www.wakkerdier.nl/", name: "Wakker Dier" },
  { src: "/Unicef.jpg", href: "https://www.unicef.nl/", name: "Unicef" },
  { src: "/Milieudefensie.png", href: "https://milieudefensie.nl/", name: "Milieudefensie" },
];

const STEPS = [
  {
    number: "01",
    title: "Theme",
    desc: "You start with a broad ambition and narrow it down to a specific societal theme that fires you up.",
    icon: Target,
  },
  {
    number: "02",
    title: "Form",
    desc: "We explore together how you want to create impact — volunteering, research, activism, or career choices.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Network",
    desc: "We map out which organisation or group of people is the best fit for you to work with.",
    icon: Users,
  },
  {
    number: "04",
    title: "Action",
    desc: "You leave with a concrete, immediately executable action plan. Not someday — now.",
    icon: Heart,
  },
];

const STORIES = [
  {
    quote: "I launched an endometriosis awareness campaign that reached thousands of people.",
    name: "Former participant",
    tag: "Round 1",
  },
  {
    quote: "I found my place at Buddy-to-Buddy and now volunteer every week. Impact Makers gave me the push I needed.",
    name: "Former participant",
    tag: "Round 2",
  },
  {
    quote: "Through the fellowship I figured out exactly where I wanted to go — I ended up doing international volunteer work.",
    name: "Former participant",
    tag: "Round 3",
  },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bordeaux: ${THEME.bordeaux};
          --bordeaux-light: ${THEME.bordeauxLight};
          --gray: ${THEME.gray};
          --beige: ${THEME.beige};
          --beige-deep: ${THEME.beigeDeep};
          --white: ${THEME.white};
          --dark: ${THEME.dark};
        }
        html { scroll-behavior: smooth; }
        body { font-family: var(--font-geist-sans, 'Inter', Arial, sans-serif); color: var(--dark); background: var(--white); }
        .btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 0.75rem 1.5rem; border-radius: 2rem; font-weight: 700; font-size: 0.95rem;
          border: 2px solid transparent; transition: all .2s ease; cursor: pointer; text-decoration: none;
          white-space: nowrap;
        }
        .btn-primary { background: var(--bordeaux); color: #fff; border-color: var(--bordeaux); }
        .btn-primary:hover { background: var(--bordeaux-light); border-color: var(--bordeaux-light); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(128,0,32,.35); }
        .btn-outline { background: transparent; color: var(--bordeaux); border-color: var(--bordeaux); }
        .btn-outline:hover { background: var(--bordeaux); color: #fff; transform: translateY(-1px); }
        .btn-white { background: #fff; color: var(--bordeaux); border-color: #fff; }
        .btn-white:hover { background: var(--beige); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,.15); }
        .btn-lg { padding: 1rem 2rem; font-size: 1.05rem; border-radius: 2.5rem; }
        .section-inner { max-width: 1120px; margin: 0 auto; padding: 0 1.5rem; }
        .section-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800; line-height: 1.15; }
        .tag { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .divider { height: 1px; background: #e5e7eb; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp .7s ease both; }
        .fade-up-1 { animation-delay: .1s; }
        .fade-up-2 { animation-delay: .25s; }
        .fade-up-3 { animation-delay: .4s; }
      `}</style>

      {/* ── NAVBAR ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50, width: '100%',
        borderBottom: '1px solid #e5e7eb',
        background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(10px)'
      }}>
        <div className="section-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
          <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/favicon.png" alt="Impact Makers Utrecht" width={32} height={32} style={{ borderRadius: 6 }} />
            <span style={{ fontWeight: 800, color: THEME.bordeaux, fontSize: '0.95rem' }}>Impact Makers Utrecht</span>
          </Link>

          <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
            {NAV.map(n => (
              <Link key={n.label} href={n.href} style={{ color: THEME.gray, fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = THEME.bordeaux)}
                onMouseLeave={e => (e.currentTarget.style.color = THEME.gray)}>
                {n.label}
              </Link>
            ))}
          </nav>

          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary desktop-nav" style={{ fontSize: '0.85rem', padding: '0.55rem 1.2rem' }}>
            Apply now <ArrowRight size={14} />
          </a>

          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
            className="mobile-menu-btn">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NAV.map(n => (
              <Link key={n.label} href={n.href} onClick={() => setOpen(false)}
                style={{ color: THEME.dark, fontWeight: 600, textDecoration: 'none', fontSize: '1rem', padding: '0.4rem 0' }}>
                {n.label}
              </Link>
            ))}
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 8 }}>
              Apply now <ArrowRight size={14} />
            </a>
          </div>
        )}

        <style jsx>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: block !important; }
          }
        `}</style>
      </header>

      {/* ── HERO ── */}
      <section id="home" style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/droneshot.jpg" alt="Impact Makers Utrecht community" fill sizes="100vw" priority
            style={{ objectFit: 'cover', filter: 'brightness(0.42)' }} />
        </div>
        {/* gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(128,0,32,0.25) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.55) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, padding: '0 1.5rem', maxWidth: 860 }}>
          <div className="fade-up">
            <span className="tag" style={{ background: 'rgba(255,255,255,.18)', color: '#fff', backdropFilter: 'blur(4px)', marginBottom: 20, display: 'inline-block' }}>
              Utrecht · Student movement · 3 years strong
            </span>
          </div>
          <h1 className="fade-up fade-up-1" style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 12 }}>
            Your ambition.<br />Real impact.
          </h1>
          <p className="fade-up fade-up-2" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', opacity: 0.92, maxWidth: 660, margin: '24px auto 0' }}>
            You want to change the world — but where do you start? Impact Makers Utrecht guides students through a proven 4-step fellowship to turn big ideas into concrete action.
          </p>
          <div className="fade-up fade-up-3" style={{ marginTop: 36, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
              Apply for the fellowship <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-lg" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', border: '2px solid rgba(255,255,255,.5)', backdropFilter: 'blur(4px)' }}>
              Learn more
            </a>
          </div>
          <p style={{ marginTop: 20, fontSize: '0.85rem', opacity: 0.7 }}>Free · 4 sessions · Applications open now</p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: THEME.bordeaux, color: '#fff', padding: '1.5rem 0' }}>
        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 16, textAlign: 'center' }}>
          {[
            { num: '3', label: 'years running' },
            { num: '4+', label: 'fellowship rounds' },
            { num: '18–30', label: 'year olds, all volunteers' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 900, lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '5rem 0', background: THEME.white }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="tag" style={{ background: THEME.beigeDeep, color: THEME.bordeaux, marginBottom: 16, display: 'inline-block' }}>Who we are</span>
              <h2 className="section-title" style={{ color: THEME.dark }}>
                A student movement<br />that gets things done.
              </h2>
              <p style={{ marginTop: 20, color: THEME.gray, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Impact Makers Utrecht is a youth-led student movement with a clear mission: to activate and guide socially engaged students. For three years we've been running cycles of 10–50 participants, led by a core team of five dedicated volunteers aged 18–30.
              </p>
              <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem', lineHeight: 1.7 }}>
                We see it everywhere: students genuinely want to make a difference, but feel overwhelmed by the size and complexity of today's problems — climate change, social inequality, global health. That feeling can lead to paralysis.
              </p>
              <p style={{ marginTop: 16, color: THEME.bordeaux, fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.7 }}>
                We break through that barrier.
              </p>
            </div>
            <div style={{ background: THEME.beige, borderRadius: 20, padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: THEME.bordeaux, opacity: 0.08, borderRadius: '0 20px 0 100%' }} />
              <h3 style={{ fontWeight: 800, fontSize: '1.2rem', color: THEME.bordeaux, marginBottom: 20 }}>Our approach in one sentence:</h3>
              <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 700, lineHeight: 1.5, color: THEME.dark }}>
                "We transform <em style={{ color: THEME.bordeaux, fontStyle: 'normal' }}>'it's too complex'</em> into <em style={{ color: THEME.bordeaux, fontStyle: 'normal' }}>'where's the best place to start?'</em>"
              </p>
              <p style={{ marginTop: 20, color: THEME.gray, fontSize: '0.95rem', lineHeight: 1.6 }}>
                We help you narrow down your broad ambitions, connect you with existing initiatives, or guide you in launching your own project. Inaction becomes participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── THE FELLOWSHIP ── */}
      <section id="programme" style={{ padding: '5rem 0', background: THEME.beige }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 3.5rem' }}>
            <span className="tag" style={{ background: THEME.bordeaux, color: '#fff', marginBottom: 16, display: 'inline-block' }}>The Fellowship Programme</span>
            <h2 className="section-title" style={{ color: THEME.dark }}>Four sessions. Eight weeks. One action plan.</h2>
            <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem', lineHeight: 1.7 }}>
              In small groups of 4–8 students, guided by two trained facilitators, you work through a funnel that takes you from "I want to do something good" to a concrete, real-world action plan.
            </p>
            <p style={{ marginTop: 8, color: THEME.gray, fontSize: '0.95rem' }}>Each session: 1.5 hrs prep reading + 1.5 hrs on location · Fully free · In Utrecht</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} style={{
                  background: '#fff', borderRadius: 16, padding: '2rem',
                  boxShadow: '0 2px 16px rgba(0,0,0,.06)',
                  borderTop: `4px solid ${THEME.bordeaux}`,
                  position: 'relative',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: THEME.beigeDeep, lineHeight: 1 }}>{step.number}</span>
                    <div style={{ background: THEME.bordeaux, borderRadius: 10, padding: 8 }}>
                      <Icon size={18} color="#fff" />
                    </div>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: THEME.dark, marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ color: THEME.gray, fontSize: '0.92rem', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Join the next round <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── VIDEO ── */}
      <section style={{ padding: '5rem 0', background: THEME.white }}>
        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span className="tag" style={{ background: THEME.beigeDeep, color: THEME.bordeaux, marginBottom: 16, display: 'inline-block' }}>See it in action</span>
            <h2 className="section-title" style={{ color: THEME.dark }}>What does making impact actually look like?</h2>
            <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem', lineHeight: 1.7 }}>
              Watch this short video to understand what drives us — and why this moment matters for students who want to do more than just talk about change.
            </p>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.12)', aspectRatio: '16/9', position: 'relative' }}>
            <iframe
              width="100%" height="100%"
              src="https://www.youtube.com/embed/yKcU7GTqxps"
              title="What do we do?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── STORIES ── */}
      <section id="stories" style={{ padding: '5rem 0', background: THEME.beige }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3.5rem' }}>
            <span className="tag" style={{ background: THEME.beigeDeep, color: THEME.bordeaux, marginBottom: 16, display: 'inline-block' }}>It works</span>
            <h2 className="section-title" style={{ color: THEME.dark }}>Real students. Real impact.</h2>
            <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem' }}>
              After four successful rounds, here's what our alumni have gone on to do.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {STORIES.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
                <div style={{ color: THEME.bordeaux, fontSize: '2.5rem', lineHeight: 1, fontFamily: 'Georgia, serif', marginBottom: 12 }}>"</div>
                <p style={{ color: THEME.dark, fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 20 }}>{s.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: THEME.bordeaux, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>IM</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: THEME.dark }}>{s.name}</div>
                    <div style={{ fontSize: '0.75rem', color: THEME.gray }}>{s.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── NGOs ── */}
      <section style={{ padding: '5rem 0', background: THEME.white }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3.5rem' }}>
            <span className="tag" style={{ background: THEME.beigeDeep, color: THEME.bordeaux, marginBottom: 16, display: 'inline-block' }}>Where alumni ended up</span>
            <h2 className="section-title" style={{ color: THEME.dark }}>Organisations you could join</h2>
            <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem' }}>
              These are just some of the impactful organisations our alumni have connected with through the fellowship.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
            {NGOS.map((ngo, i) => (
              <a key={i} href={ngo.href} target="_blank" rel="noopener noreferrer"
                style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '1', display: 'block', boxShadow: '0 2px 12px rgba(0,0,0,.08)', transition: 'transform .2s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
                <Image src={ngo.src} alt={ngo.name} fill sizes="(max-width: 768px) 33vw, 18vw" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.55) 0%, transparent 50%)', display: 'flex', alignItems: 'flex-end', padding: 12 }}>
                  <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700, lineHeight: 1.2 }}>{ngo.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section id="join" style={{ padding: '6rem 0', background: THEME.bordeaux, color: '#fff', textAlign: 'center' }}>
        <div className="section-inner">
          <span className="tag" style={{ background: 'rgba(255,255,255,.18)', color: '#fff', backdropFilter: 'blur(4px)', marginBottom: 20, display: 'inline-block' }}>
            Applications open now
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, maxWidth: 760, margin: '0 auto' }}>
            Ready to stop wondering and start acting?
          </h2>
          <p style={{ marginTop: 20, fontSize: 'clamp(1rem, 2vw, 1.2rem)', opacity: 0.88, maxWidth: 580, margin: '20px auto 0' }}>
            Apply for the next fellowship round. Four sessions. Small group. Big shift. Completely free.
          </p>
          <div style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
              Apply for the fellowship <ArrowRight size={18} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg"
              style={{ background: 'rgba(255,255,255,.15)', color: '#fff', border: '2px solid rgba(255,255,255,.4)', backdropFilter: 'blur(4px)' }}>
              Join our WhatsApp
            </a>
          </div>
          <p style={{ marginTop: 20, opacity: 0.65, fontSize: '0.85rem' }}>
            Questions? Reach out at <a href="mailto:wimtenberge1@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>wimtenberge1@gmail.com</a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: THEME.dark, color: '#fff', padding: '2.5rem 0' }}>
        <div className="section-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/favicon.png" alt="Impact Makers Utrecht" width={28} height={28} style={{ borderRadius: 6, opacity: 0.9 }} />
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>Impact Makers Utrecht</span>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/impactmakersutrecht/" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = THEME.dark; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}>
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/impact-makers-utrecht" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = THEME.dark; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}>
              LinkedIn
            </a>
            <a href="mailto:wimtenberge1@gmail.com"
              className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = THEME.dark; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}>
              Email
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,.45)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Impact Makers Utrecht · All volunteers · Utrecht, Netherlands
          </p>
        </div>
      </footer>
    </>
  );
}
