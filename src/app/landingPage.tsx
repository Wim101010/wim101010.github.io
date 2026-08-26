'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight, Users, Target, Zap, Heart } from "lucide-react";

const SIGNUP_URL = "https://d5a0gq2daer.typeform.com/to/IO2UUuCT";
const WHATSAPP_URL = "https://chat.whatsapp.com/HtnrgFwcNvxEBk4bbJy4vq";

const THEME = {
  white: "#ffffff",
  pageLight: "#EFF8FF",   // off-white tint — replaces pure white sections
  navy: "#143C5A",
  navyLight: "#1E4E72",
  accent: "#328CBE",
  accentLight: "#56B0E0",
  gray: "#4b5563",
  beige: "#C8E6F7",       // more saturated
  beigeDeep: "#9ACEED",   // more saturated
  dark: "#0D2030",
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
    color: "#143C5A",
  },
  {
    number: "02",
    title: "Form",
    desc: "We explore together how you want to create impact — volunteering, research, activism, or career choices.",
    icon: Zap,
    color: "#1A5F8A",
  },
  {
    number: "03",
    title: "Network",
    desc: "We map out which organisation or group of people is the best fit for you to work with.",
    icon: Users,
    color: "#328CBE",
  },
  {
    number: "04",
    title: "Action",
    desc: "You leave with a concrete, immediately executable action plan. Not someday — now.",
    icon: Heart,
    color: "#56B0E0",
  },
];

const STORIES = [
  {
    quote: "I launched an endometriosis awareness campaign that reached thousands of people.",
    tag: "Round 1",
    color: "#143C5A",
    bg: "#D6EEFA",
  },
  {
    quote: "I found my place at Buddy-to-Buddy and now volunteer every week. Impact Makers gave me the push I needed.",
    tag: "Round 2",
    color: "#328CBE",
    bg: "#C2E4F5",
  },
  {
    quote: "Through the fellowship I figured out exactly where I wanted to go — I ended up doing international volunteer work.",
    tag: "Round 3",
    color: "#1A5F8A",
    bg: "#CBE8F6",
  },
];

const TEAM = [
  {
    name: "Wim",
    photo: "/Wim.png",
    bio: "Hi, I am Wim. I am living in Utrecht on the IBB and do a research master in Economics. I do research on how to decrease world-wide inequality. In my free time I love to boulder and party with friends.",
    cardBg: "linear-gradient(160deg, #C8E6F7 0%, #A8D4EE 100%)",
    borderColor: "#143C5A",
  },
  {
    name: "Jeroen",
    photo: "/Jeroen.png",
    bio: "Utrecht University student",
    cardBg: "linear-gradient(160deg, #B8DCF5 0%, #9ACEED 100%)",
    borderColor: "#1A5F8A",
  },
  {
    name: "Tuana",
    photo: "/Tuana.png",
    bio: "Utrecht University student",
    cardBg: "linear-gradient(160deg, #C8E6F7 0%, #A8D4EE 100%)",
    borderColor: "#328CBE",
  },
  {
    name: "Hugo",
    photo: "/Hugo.png",
    bio: "Utrecht University student",
    cardBg: "linear-gradient(160deg, #B8DCF5 0%, #9ACEED 100%)",
    borderColor: "#56B0E0",
  },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── NAVBAR ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50, width: '100%',
        borderBottom: `1px solid ${THEME.beigeDeep}`,
        background: 'rgba(255,255,255,.95)', backdropFilter: 'blur(10px)'
      }}>
        <div className="section-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.7rem 1.5rem' }}>
          <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/zoomed_trans_bg.png" alt="Impact Makers Utrecht" width={44} height={44} style={{ objectFit: 'contain' }} />
            <span style={{ fontWeight: 800, color: THEME.navy, fontSize: '0.95rem', lineHeight: 1.2 }}>Impact Makers<br />Utrecht</span>
          </Link>

          <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
            {NAV.map(n => (
              <Link key={n.label} href={n.href}
                style={{ color: THEME.gray, fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = THEME.navy)}
                onMouseLeave={e => (e.currentTarget.style.color = THEME.gray)}>
                {n.label}
              </Link>
            ))}
          </nav>

          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary desktop-nav" style={{ fontSize: '0.85rem', padding: '0.55rem 1.2rem' }}>
            Apply now <ArrowRight size={14} />
          </a>

          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: THEME.navy }}
            className="mobile-menu-btn">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div style={{ background: '#fff', borderTop: `1px solid ${THEME.beigeDeep}`, padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 12 }}>
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
      </header>

      {/* ── HERO ── */}
      <section id="home" style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/droneshot.jpg" alt="Impact Makers Utrecht community" fill sizes="100vw" priority
            style={{ objectFit: 'cover', filter: 'brightness(0.38)' }} />
        </div>
        {/* navy-tinted gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(20,60,90,0.35) 0%, rgba(0,0,0,0.05) 50%, rgba(13,32,48,0.65) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, padding: '0 1.5rem', maxWidth: 860 }}>
          {/* Logo prominent in hero */}
          <div className="fade-up" style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
            <Image src="/logo-white.png" alt="Impact Makers Utrecht" width={100} height={100} style={{ objectFit: 'contain', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }} />
          </div>
          <div className="fade-up">
            <span className="tag" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', backdropFilter: 'blur(4px)', marginBottom: 20, display: 'inline-block' }}>
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
      <section style={{ background: 'linear-gradient(135deg, #0D2030 0%, #143C5A 50%, #1A5F8A 100%)', color: '#fff', padding: '1.5rem 0' }}>
        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 16, textAlign: 'center' }}>
          {[
            { num: '3',   label: 'years running' },
            { num: '4+',  label: 'fellowship rounds' },
            { num: '50+', label: 'students joined the programme' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 900, lineHeight: 1, color: THEME.accent }}>{stat.num}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '5rem 0', background: 'linear-gradient(160deg, #EFF8FF 0%, #D6EEFA 100%)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="tag" style={{ background: THEME.beigeDeep, color: THEME.navy, marginBottom: 16, display: 'inline-block' }}>Who we are</span>
              <h2 className="section-title" style={{ color: THEME.dark }}>
                A student movement<br />that gets things done.
              </h2>
              <p style={{ marginTop: 20, color: THEME.gray, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Impact Makers Utrecht is a youth-led student movement with a clear mission: to activate and guide socially engaged students. For three years we&apos;ve been running fellowship cycles with over 50 participants in total, led by a core team of dedicated volunteers from Utrecht University.
              </p>
              <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem', lineHeight: 1.7 }}>
                We see it everywhere: students genuinely want to make a difference, but feel overwhelmed by the size and complexity of today&apos;s problems — climate change, social inequality, global health. That feeling can lead to paralysis.
              </p>
              <p style={{ marginTop: 16, color: THEME.navy, fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.7 }}>
                We break through that barrier.
              </p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #B8DCF5 0%, #9ACEED 100%)', borderRadius: 20, padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              {/* Faint logo watermark */}
              <div style={{ position: 'absolute', bottom: -20, right: -20, width: 140, height: 140, opacity: 0.12 }}>
                <Image src="/zoomed_trans_bg.png" alt="" fill style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1.2rem', color: THEME.navy, marginBottom: 20 }}>Our approach in one sentence:</h3>
              <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 700, lineHeight: 1.5, color: THEME.dark }}>
                &ldquo;We transform <em style={{ color: THEME.accent, fontStyle: 'normal' }}>&lsquo;it&apos;s too complex&rsquo;</em> into <em style={{ color: THEME.accent, fontStyle: 'normal' }}>&lsquo;where&apos;s the best place to start?&rsquo;</em>&rdquo;
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
      <section id="programme" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #C8E6F7 0%, #B0D8F2 100%)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 3.5rem' }}>
            <span className="tag" style={{ background: THEME.navy, color: '#fff', marginBottom: 16, display: 'inline-block' }}>The Fellowship Programme</span>
            <h2 className="section-title" style={{ color: THEME.dark }}>Four sessions. Eight weeks. One action plan.</h2>
            <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem', lineHeight: 1.7 }}>
              In small groups of 4–8 students, guided by two trained facilitators, you work through a funnel that takes you from &ldquo;I want to do something good&rdquo; to a concrete, real-world action plan.
            </p>
            <p style={{ marginTop: 8, color: THEME.gray, fontSize: '0.95rem' }}>Each session: 1.5 hrs prep reading + 1.5 hrs on location · Fully free · In Utrecht</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} style={{
                  background: `linear-gradient(160deg, #fff 60%, ${step.color}18 100%)`,
                  borderRadius: 16, padding: '2rem',
                  boxShadow: '0 4px 20px rgba(20,60,90,.10)',
                  borderTop: `4px solid ${step.color}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: step.color, opacity: 0.25, lineHeight: 1 }}>{step.number}</span>
                    <div style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}bb)`, borderRadius: 10, padding: 8 }}>
                      <Icon size={18} color="#fff" />
                    </div>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: THEME.dark, marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ color: THEME.gray, fontSize: '0.92rem', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Syllabus callout */}
          <div style={{
            margin: '3rem auto 0', maxWidth: 680,
            background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)',
            borderRadius: 16, padding: '1.5rem 2rem',
            border: `1.5px solid ${THEME.accentLight}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '1.5rem', flexWrap: 'wrap',
            boxShadow: '0 2px 16px rgba(20,60,90,.08)',
          }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: THEME.navy, marginBottom: 4 }}>
                📄 Full syllabus
              </div>
              <div style={{ fontSize: '0.9rem', color: THEME.gray, lineHeight: 1.5 }}>
                Curious about every topic we cover across the four sessions? Read the complete syllabus.
              </div>
            </div>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSmyDLhElRh2edxmzdHPDWDvc4DuhpA_rn9-QPoJ4rq_utCaBMhSVkFaKmnmBXW23GLmIIbvvfqYKW0/pub"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ borderColor: THEME.navy, color: THEME.navy, whiteSpace: 'nowrap', flexShrink: 0 }}>
              Read the syllabus <ArrowRight size={14} />
            </a>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Join the next round <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── VIDEO ── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(160deg, #EFF8FF 0%, #C8E6F7 100%)' }}>
        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span className="tag" style={{ background: THEME.beigeDeep, color: THEME.navy, marginBottom: 16, display: 'inline-block' }}>See it in action</span>
            <h2 className="section-title" style={{ color: THEME.dark }}>What does making impact actually look like?</h2>
            <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem', lineHeight: 1.7 }}>
              Watch this short video to understand what drives us — and why this moment matters for students who want to do more than just talk about change.
            </p>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(20,60,90,.15)', aspectRatio: '16/9', position: 'relative' }}>
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
      <section id="stories" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #9ACEED 0%, #B8DCF5 100%)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3.5rem' }}>
            <span className="tag" style={{ background: THEME.beigeDeep, color: THEME.navy, marginBottom: 16, display: 'inline-block' }}>It works</span>
            <h2 className="section-title" style={{ color: THEME.dark }}>Real students. Real impact.</h2>
            <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem' }}>
              After four successful rounds, here&apos;s what our alumni have gone on to do.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {STORIES.map((s, i) => (
              <div key={i} style={{ background: s.bg, borderRadius: 16, padding: '2rem', boxShadow: '0 4px 20px rgba(20,60,90,.12)', borderLeft: `5px solid ${s.color}` }}>
                <div style={{ color: s.color, fontSize: '3rem', lineHeight: 0.9, fontFamily: 'Georgia, serif', marginBottom: 16, fontWeight: 700 }}>&ldquo;</div>
                <p style={{ color: THEME.dark, fontSize: '1rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 20 }}>{s.quote}</p>
                <span className="tag" style={{ background: s.color, color: '#fff', fontSize: '0.7rem' }}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── TEAM ── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(160deg, #EFF8FF 0%, #D6EEFA 100%)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3.5rem' }}>
            <span className="tag" style={{ background: THEME.beigeDeep, color: THEME.navy, marginBottom: 16, display: 'inline-block' }}>The people behind it</span>
            <h2 className="section-title" style={{ color: THEME.dark }}>Meet the organisers</h2>
            <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem', lineHeight: 1.7 }}>
              We&apos;re four students at Utrecht University who believe that every student has the potential to create real-world impact — and decided to build something to prove it.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
            {TEAM.map((member) => (
              <div key={member.name} style={{
                background: member.cardBg, borderRadius: 20, padding: '2rem 1.5rem',
                textAlign: 'center', boxShadow: '0 4px 24px rgba(20,60,90,.12)',
                borderTop: `4px solid ${member.borderColor}`,
              }}>
                <div style={{
                  width: 100, height: 100, borderRadius: '50%',
                  overflow: 'hidden', margin: '0 auto 16px',
                  border: `3px solid ${member.borderColor}`,
                  boxShadow: `0 4px 20px ${member.borderColor}44`,
                  position: 'relative',
                }}>
                  <Image src={member.photo} alt={member.name} fill sizes="100px" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: THEME.dark, marginBottom: 4 }}>{member.name}</div>
                <div style={{ fontSize: '0.85rem', color: member.borderColor, fontWeight: 600, marginBottom: 10 }}>Utrecht University</div>
                <p style={{ fontSize: '0.875rem', color: THEME.dark, lineHeight: 1.6, opacity: 0.8 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── NGOs ── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #B0D8F2 0%, #9ACEED 100%)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3.5rem' }}>
            <span className="tag" style={{ background: THEME.navy, color: '#fff', marginBottom: 16, display: 'inline-block' }}>Where alumni ended up</span>
            <h2 className="section-title" style={{ color: THEME.dark }}>Organisations you could join</h2>
            <p style={{ marginTop: 16, color: THEME.gray, fontSize: '1.05rem' }}>
              These are just some of the impactful organisations our alumni have connected with through the fellowship.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
            {NGOS.map((ngo, i) => (
              <a key={i} href={ngo.href} target="_blank" rel="noopener noreferrer"
                style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '1', display: 'block', boxShadow: '0 2px 12px rgba(20,60,90,.1)', transition: 'transform .2s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
                <Image src={ngo.src} alt={ngo.name} fill sizes="(max-width: 768px) 33vw, 18vw" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,32,48,.65) 0%, transparent 55%)', display: 'flex', alignItems: 'flex-end', padding: 12 }}>
                  <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700, lineHeight: 1.2 }}>{ngo.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section id="join" style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #0A1E2E 0%, #143C5A 45%, #1A5F8A 100%)', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Faint logo watermark in CTA */}
        <div style={{ position: 'absolute', right: -60, bottom: -60, width: 360, height: 360, opacity: 0.06, pointerEvents: 'none' }}>
          <Image src="/logo-white.png" alt="" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <Image src="/logo-white.png" alt="Impact Makers Utrecht" width={72} height={72}
            style={{ objectFit: 'contain', margin: '0 auto 20px', display: 'block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }} />
          <span className="tag" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', backdropFilter: 'blur(4px)', marginBottom: 20, display: 'inline-block' }}>
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
          <p style={{ marginTop: 24, opacity: 0.6, fontSize: '0.85rem' }}>
            Questions? Reach out at <a href="mailto:wimtenberge1@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>wimtenberge1@gmail.com</a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: 'linear-gradient(to bottom, #0D2030, #050D18)', color: '#fff', padding: '2.5rem 0' }}>
        <div className="section-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Image src="/logo-white.png" alt="Impact Makers Utrecht" width={48} height={48} style={{ objectFit: 'contain', opacity: 0.9 }} />
            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#fff', lineHeight: 1.3 }}>Impact Makers<br />Utrecht</span>
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
          <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Impact Makers Utrecht · All volunteers · Utrecht, Netherlands
          </p>
        </div>
      </footer>
    </>
  );
}
