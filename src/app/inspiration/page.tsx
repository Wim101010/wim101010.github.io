import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, ArrowLeft } from "lucide-react";

const SIGNUP_URL = "https://d5a0gq2daer.typeform.com/to/IO2UUuCT";

const THEME = {
  white: "#ffffff",
  pageLight: "#EFF8FF",
  navy: "#143C5A",
  accent: "#328CBE",
  gray: "#4b5563",
  beigeDeep: "#9ACEED",
  dark: "#0D2030",
};

// 💡 HIER BEHEER JE AL JE INSPIRATIE-CONTENT:
const CONTENT_ITEMS = [
  // 1. YOUTUBE VIDEO
  {
    type: "youtube",
    title: "Beyond Zero",
    desc: "A documentary about a CEO who realizes how much damage he has done to our planet. From that moment on, he wants his business to make a radical turn towards sustainability.",
    youtubeId: "1ivr_YVHT6g",
  },
  // 2. ONLINE ARTIKEL / LEESVOER
  {
    type: "article",
    title: "Pandemic prevention as fire-fighting",
    desc: "Fire used to burn down whole cities, and now it barely kills anyone. This article asks: what if we did the same thing with pandemics?",
    url: "https://worksinprogress.co/issue/pandemic-prevention-as-fire-fighting/", // Plak hier de echte link van het artikel
    source: "Works in Progress",
    imageUrl: "artikel.png", // Eventueel een eigen banner/afbeelding
  },
  // 3. FILM / DOCUMENTARY (BIJV. NETFLIX OF NPO START)
  {
    type: "external_movie",
    title: "Breaking Boundaries: The Science of Our Planet",
    desc: "David Attenborough and scientist Johan Rockström examine Earth's biodiversity collapse and how this crisis can still be averted.",
    url: "https://www.netflix.com/title/81336476", // Link naar de film
    platform: "Watch on Netflix",
    imageUrl: "netflix.png", // Eventueel een eigen banner/afbeelding
  },
    {
    type: "external_movie",
    title: "Well Fed",
    desc: "In this documentary, director Karsten de Vreugd and molecular biologist Hidde Boersma investigate in the documentary whether genetically modified food is a solution to world hunger.",
    url: "https://npo.nl/start/afspelen/groen-licht-presenteert-well-fed", // Link naar de film
    platform: "Watch on NPO Start",
    imageUrl: "npo.png", // Eventueel een eigen banner/afbeelding
  },
];

export default function InspirationPage() {
  return (
    <div>
      {/* ── HERO BANNER ── */}
      <section style={{ 
        position: 'relative', 
        minHeight: '92vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        color: '#fff', 
        overflow: 'hidden' 
      }}>
        {/* ── TERUG KNOP (HIER PLAATS JE HEM) ── */}
        <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 10 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', backdropFilter: 'blur(4px)' }}>
            <ArrowLeft size={16} /> Terug naar overzicht
          </Link>
        </div>

        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/droneshot.jpg" alt="Impact Makers Utrecht community" fill sizes="100vw" priority
            style={{ objectFit: 'cover', filter: 'brightness(0.38)' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(20,60,90,0.35) 0%, rgba(0,0,0,0.05) 50%, rgba(13,32,48,0.65) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, padding: '0 1.5rem', maxWidth: 860 }}>
          <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
            <Image src="/logo-white.png" alt="Impact Makers Utrecht" width={100} height={100} style={{ objectFit: 'contain', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }} />
          </div>

          <div>
            <span style={{ background: 'rgba(255,255,255,.15)', color: '#fff', backdropFilter: 'blur(4px)', padding: '0.35rem 0.85rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, display: 'inline-block', marginBottom: 20 }}>
              Utrecht · Inspiration & Documentaries
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 12 }}>
            Inspiration & Documentaries
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', opacity: 0.92, maxWidth: 720, margin: '24px auto 0', lineHeight: 1.65 }}>
            On this page you can find some inspirational content our co-organisers and fellow followers have inspired. Do you have something that you think should be added to this list? Excellent! Sign up for the next fellowship and ask one of our organisers to add it to this page. Let&apos;s inspire each other!
          </p>

          <div style={{ marginTop: 36, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Apply for the fellowship <ArrowRight size={18} />
            </a>
          </div>

          <p style={{ marginTop: 20, fontSize: '0.85rem', opacity: 0.7 }}>Free · 4 sessions · Join the movement</p>
        </div>
      </section>

      {/* ── CONTENT SECTIE ── */}
      <section style={{ background: 'linear-gradient(160deg, #EFF8FF 0%, #D6EEFA 100%)', padding: '5rem 1.5rem', minHeight: '50vh' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 8px 32px rgba(20,60,90,.1)', borderTop: `4px solid ${THEME.navy}` }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: THEME.navy, marginBottom: '2rem' }}>
              Inspirational Content
            </h3>

            {CONTENT_ITEMS.map((item, index) => (
              <div key={index} style={{ marginTop: index > 0 ? "2.5rem" : "0", paddingTop: index > 0 ? "2.5rem" : "0", borderTop: index > 0 ? "1px solid #e5e7eb" : "none" }}>
                
                {/* TITEL (Mooi Impact Makers blauw) */}
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: THEME.navy, marginBottom: "0.5rem" }}>
                  {item.title}
                </h4>

                {/* BESCHRIJVING */}
                <p style={{ fontSize: "0.95rem", color: THEME.gray, marginBottom: "1.2rem", lineHeight: 1.6 }}>
                  {item.desc}
                </p>

                {/* TYPE 1: YOUTUBE VIDEO */}
                {item.type === "youtube" && (
                  <div style={{ position: "relative", aspectRatio: "16/9", width: "100%", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(20,60,90,.12)" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                    />
                  </div>
                )}

           {/* TYPE 2: ARTIKEL */}
                {item.type === "article" && (
                  <div style={{ background: THEME.pageLight, padding: "1.25rem", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      {item.imageUrl ? (
                        <div style={{ position: "relative", width: "36px", height: "36px", borderRadius: "6px", overflow: "hidden", flexShrink: 0 }}>
                          <Image src={`/${item.imageUrl}`} alt={item.source || "Artikel"} fill style={{ objectFit: "cover" }} />
                        </div>
                      ) : (
                        <span style={{ fontSize: "1.4rem" }}>📰</span>
                      )}
                      <div>
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: THEME.accent, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Article · {item.source}
                        </span>
                      </div>
                    </div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: THEME.navy, color: "#fff", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
                      Lees artikel <ExternalLink size={14} />
                    </a>
                  </div>
                )}

                {/* TYPE 3: EXTERNE FILM / DOCUMENTAIRE */}
                {item.type === "external_movie" && (
                  <div style={{ background: THEME.dark, color: "#fff", borderRadius: "12px", padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      {item.imageUrl ? (
                        <div style={{ position: "relative", width: "36px", height: "36px", borderRadius: "6px", overflow: "hidden", flexShrink: 0 }}>
                          <Image src={`/${item.imageUrl}`} alt={item.platform || "Film"} fill style={{ objectFit: "cover" }} />
                        </div>
                      ) : (
                        <span style={{ fontSize: "1.4rem" }}>🎬</span>
                      )}
                      <div>
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: THEME.beigeDeep, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Documentary / Film
                        </span>
                        <p style={{ margin: "2px 0 0", fontSize: "0.85rem", opacity: 0.8 }}>
                          {item.platform}
                        </p>
                      </div>
                    </div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#fff", color: THEME.dark, padding: "0.6rem 1.2rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}>
                      Bekijk film <ExternalLink size={14} />
                    </a>
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}