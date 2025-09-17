'use client';

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
// Icons are optional; if you don't use lucide-react, replace with plain text
import { Menu, X } from "lucide-react";

/**
 * Impact Makers Utrecht — Utrecht theme (white, bordeaux red, gray, beige support)
 * Single-file Next.js page with no external UI lib dependencies.
 * Fixes:
 *  - Added "use client" so hooks work in App Router.
 *  - Removed shadcn/ui imports that may be undefined in your project.
 *  - Defensive mapping for nav/updates so a null/undefined value never throws.
 *  - Local CSS for theme tokens (text-bordeaux, bg-beige, etc.).
 */

// Theme colors
const THEME = {
    white: "#ffffff",
    bordeaux: "#800020",
    gray: "#4b4b4b",
    beige: "#f5f4ef", // soft supportive background
};

// Navigation items (defensive: keep this a plain array of {label, href})
const NAV: Array<{ label: string; href: string }> = [
    { label: "Home", href: "#home" },
    { label: "About Impact Makers Utrecht", href: "#about" },
    { label: "Effective Altruism", href: "#ea" },
    { label: "Events", href: "#events" },
];

// Placeholder updates (replace with actual image paths or remote loader config)
const UPDATES: string[] = [
    "/Leuk Kaartje 3 gebroeders.png",
    "/Leuk Kaartje 3 gebroeders.png",
    "/Leuk Kaartje 3 gebroeders.png",
    "/Leuk Kaartje 3 gebroeders.png",
    "/Leuk Kaartje 3 gebroeders.png",
    "/Leuk Kaartje 3 gebroeders.png",
];

// ---- Dev-time sanity tests (won't break production) ------------------------
if (process.env.NODE_ENV !== "production") {
    console.assert(Array.isArray(NAV), "NAV must be an array");
    console.assert(NAV.every((n) => n && typeof n.label === "string" && typeof n.href === "string"),
        "Each NAV item must have label and href strings");
    console.assert(Array.isArray(UPDATES), "UPDATES must be an array");
}
// ----------------------------------------------------------------------------

export default function HomePage() {
    const [open, setOpen] = useState(false);

    // Defensive: never iterate over a null/undefined value
    const navItems = useMemo(() => (Array.isArray(NAV) ? NAV : []), []);
    const updateItems = useMemo(() => (Array.isArray(UPDATES) ? UPDATES : []), []);

    return (
        <>
            <Head>
                <title>Impact Makers Utrecht — Doing Good Better</title>
                <meta
                    name="description"
                    content="Impact Makers Utrecht is a community for people who want to do the most good they can, using evidence and careful reasoning."
                />
            </Head>

            {/* Global theme styles (scoped) */}
            <style jsx global>{`
        :root {
          --white: ${THEME.white};
          --bordeaux: ${THEME.bordeaux};
          --gray: ${THEME.gray};
          --beige: ${THEME.beige};
        }
        .text-bordeaux { color: var(--bordeaux); }
        .bg-bordeaux { background-color: var(--bordeaux); }
        .bg-beige { background-color: var(--beige); }
        .border-gray-200 { border-color: #e5e7eb; }
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.6rem 1rem; border-radius: 0.75rem; font-weight: 600;
          border: 1px solid transparent; transition: filter .2s ease;
        }
        .btn-primary { background: var(--bordeaux); color: var(--white); }
        .btn-primary:hover { filter: brightness(0.95); }
        .btn-outline {
          background: transparent; color: var(--bordeaux); border-color: var(--bordeaux);
        }
        .btn-outline:hover { filter: brightness(0.95); }
        .input {
          border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 0.6rem 0.8rem;
          outline: none; width: 100%;
        }
        .input:focus { border-color: var(--bordeaux); box-shadow: 0 0 0 3px rgba(128,0,32,0.12); }
      `}</style>

            {/* Navbar */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-200" style={{ background: "rgba(255,255,255,.9)", backdropFilter: "blur(8px)" }}>
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4" style={{ display: 'flex' }}>
                    <Link href="#home" className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Image src="/droneshot.jpg" alt="Impact Makers Utrecht Logo" width={30} height={30} />
                        <span className="font-semibold text-bordeaux">Impact Makers Utrecht</span>
                    </Link>

                    <nav className="hidden md:flex" style={{ gap: 24 }}>
                        {navItems.map((n) => (
                            <Link key={n.label} href={n.href} className="text-sm" style={{ color: '#4b4b4b' }}>
                                {n.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <button className="btn btn-outline" onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}>Stay in the loop</button>
                    </div>

                    <button
                        aria-label="Toggle menu"
                        className="md:hidden"
                        style={{ borderRadius: 12, padding: 8 }}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                {open && (
                    <div className="md:hidden border-t border-gray-200" style={{ background: '#fff' }}>
                        <div className="mx-auto max-w-8xl px-4 py-3" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {navItems.map((n) => (
                                <Link key={n.label} href={n.href} className="py-2" style={{ color: '#111827' }}>
                                    {n.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section id="home" className="relative" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            src="/droneshot.jpg"
                            alt="Impact Makers Utrecht Group"
                            fill
                            sizes="100vw"
                            className="object-cover"
                            style={{ objectFit: 'cover', filter: 'brightness(0.5)' }}
                        />
                    </div>
                </div>
                <div className="relative" style={{ zIndex: 1, padding: '0 1rem' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 800 }}>Doing Good Better</h1>
                    <p className="mx-auto" style={{ marginTop: 16, maxWidth: 720, fontSize: 18 }}>
                        Impact Makers Utrecht is a community for people who want to do the most good they can, using evidence and careful reasoning.
                    </p>
                </div>
            </section>

            {/* About Effective Altruism */}
            <section id="ea" className="bg-beige border-t border-gray-200">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
                    <div className="aspect-video w-full overflow-hidden rounded-lg" style={{ boxShadow: '0 6px 20px rgba(0,0,0,.08)' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/diDvxeia2cY"
                            title="Effective Altruism Talk"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div>
                        <h2 className="text-bordeaux" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700 }}>
                            Effective altruism is about using evidence and reason.
                        </h2>
                        <p className="mt-4" style={{ color: THEME.gray, marginTop: 16 }}>
                            Effective altruism takes the well-being of others as a guiding principle, using the best available evidence to guide our actions. These principles are applied by a global network of over 200 student organisations.
                        </p>
                    </div>
                </div>
            </section>

            {/* What we do */}
            <section id="about" className="border-t border-gray-200" style={{ background: THEME.white }}>
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <h2 className="text-center text-bordeaux" style={{ fontSize: 'clamp(1.75rem,4vw,2.25rem)', fontWeight: 700 }}>
                        What we do
                    </h2>
                    <p className="mt-4 text-center mx-auto" style={{ color: THEME.gray, marginTop: 16, maxWidth: 780 }}>
                        Impact Makers Utrecht is a student organisation helping students influence the world in the most positive way. We run programs, discussions, and social events to connect like-minded people and explore impactful ideas.
                    </p>
                    <div className="mt-10" style={{ display: 'grid', gap: 32, marginTop: 40, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
                        {[
                            { title: 'Investigate ideas', body: 'Learn about global challenges and explore which causes matter most.' },
                            { title: 'Community', body: 'Join a group of like-minded people and collaborate to create change.' },
                            { title: 'Taking action', body: 'Apply EA principles in your career, research, or projects for impact.' },
                        ].map((item) => (
                            <div key={item.title}>
                                <h3 style={{ fontWeight: 700, color: '#111827' }}>{item.title}</h3>
                                <p style={{ marginTop: 8, color: THEME.gray, fontSize: 14 }}>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Updates */}
            <section id="events" className="bg-beige border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-16 justify-center">
                    <h2 className="text-center text-bordeaux text-3xl font-bold">Our latest updates</h2>
                    <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-4">
                        {updateItems.map((src, i) => (
                            <a
                                key={i}
                                href="https://www.instagram.com/mimi_moto_ccfa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative overflow-hidden rounded-lg aspect-square block"
                            >
                                <Image
                                    src={src}
                                    alt={`Update ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 16vw"
                                    className="object-cover"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            {/* Newsletter */}
            <section id="newsletter" className="border-t border-gray-200" style={{ background: THEME.white }}>
                <div className="mx-auto max-w-7xl px-4 py-16" style={{ display: 'grid', gap: 40, gridTemplateColumns: '1fr', alignItems: 'start' }}>
                    {/* <div>
                        <h2 className="text-bordeaux" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Stay in the loop</h2>
                        <p className="mt-2" style={{ color: THEME.gray, fontSize: 14 }}>
                            Sign up with your email address to receive news and updates about Impact Makers Utrecht.
                        </p>
                        <form className="mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12 }} onSubmit={(e) => e.preventDefault()}>
                            <input className="input" type="text" placeholder="First Name" required />
                            <input className="input" type="text" placeholder="Last Name" required />
                            <input className="input" type="email" placeholder="Email Address" required />
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                    </div> */}

                    <div>
                        <h2 className="text-bordeaux" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                            Join our WhatsApp
                        </h2>
                        <p className="mt-2" style={{ color: THEME.gray, fontSize: 14 }}>
                            Or directly join our WhatsApp community with the link below!
                        </p>
                        <a
                            href="https://chat.whatsapp.com/HtnrgFwcNvxEBk4bbJy4vq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ marginTop: 16, display: "inline-block" }}
                        >
                            Join our WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-beige border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-10" style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: THEME.gray, fontSize: 14 }}>© {new Date().getFullYear()} Impact Makers Utrecht — Doing Good Better</span>
                    <div style={{ display: 'flex', gap: 16 }}>
                        <Link href="#" aria-label="Instagram" className="btn btn-outline">Instagram</Link>
                        <Link href="#" aria-label="LinkedIn" className="btn btn-outline">LinkedIn</Link>
                        <Link href="#" aria-label="Email" className="btn btn-outline">Email</Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
