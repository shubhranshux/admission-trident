import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

const SLIDES = [
  {
    image: "/hero_campus.png",
    heading: "Begin your journey at Trident",
    subtext: "Trident Academy of Technology offers world-class undergraduate and postgraduate programs in Engineering, Management, and Computer Applications.",
    accent: "#0F766E",
  },
  {
    image: "/hero_students_lab.png",
    heading: "Innovation starts in the lab",
    subtext: "State-of-the-art facilities, expert faculty, and hands-on learning prepare you for the challenges of tomorrow.",
    accent: "#EA580C",
  },
  {
    image: "/hero_graduation.png",
    heading: "Your future starts here",
    subtext: "Join 20+ years of academic excellence. B.Tech, M.Tech, MCA, MBA — find the program that fits your ambition.",
    accent: "#D97706",
  },
  {
    image: "/hero_placements.png",
    heading: "Careers that matter, since 2005",
    subtext: "120+ recruiting companies, 94% placement rate, and packages up to 22 LPA. Where ambition meets opportunity.",
    accent: "#312E81",
  },
];

const INTERVAL = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [animState, setAnimState] = useState('visible');
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const transition = useCallback((nextIdx) => {
    setAnimState('exiting');
    setTimeout(() => {
      setActive(typeof nextIdx === 'function' ? nextIdx : () => nextIdx);
      setAnimState('entering');
      setTimeout(() => setAnimState('visible'), 60);
    }, 500);
  }, []);

  const goTo = useCallback((idx) => {
    if (idx === active || animState !== 'visible') return;
    transition(idx);
  }, [active, animState, transition]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      transition(p => (p + 1) % SLIDES.length);
    }, INTERVAL);
  }, [transition]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const handleNav = useCallback((idx) => {
    goTo(idx);
    startTimer();
  }, [goTo, startTimer]);

  const slide = SLIDES[active];
  const isOut = animState === 'exiting';
  const isEntering = animState === 'entering';

  return (
    <section className="relative w-full h-screen min-h-[650px] max-h-[1080px] overflow-hidden bg-[#0F172A]">

      {/* ═══ Background images ═══ */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: i === active ? 1 : 0,
              transition: 'opacity 1000ms ease-in-out',
              zIndex: i === active ? 1 : 0,
            }}
          >
            <img
              src={s.image}
              alt=""
              className="w-full h-full object-cover"
              style={{
                transform: i === active ? 'scale(1.05)' : 'scale(1.1)',
                transition: 'transform 8s ease-out',
                filter: 'brightness(0.4) saturate(1.2)',
              }}
              loading={i < 2 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* ═══ Dark base overlay for text readability ═══ */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/10" />

      {/* ═══ Unique dynamic designs per slide ═══ */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {/* Slide 0: Subtle glowing teal arcs */}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full border-[1px] border-[#0F766E]/20"
          style={{ opacity: active === 0 ? 1 : 0, transform: active === 0 ? 'scale(1)' : 'scale(1.1)', transition: 'all 1.5s ease-out' }} />
        <div className="absolute top-[5%] right-[2%] w-[40vw] h-[40vw] rounded-full border-[2px] border-[#0F766E]/10 bg-[#0F766E]/5 blur-3xl"
          style={{ opacity: active === 0 ? 1 : 0, transition: 'all 1s' }} />

        {/* Slide 1: Soft orange geometric polygon */}
        <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] rotate-45 bg-gradient-to-tr from-[#EA580C]/5 to-transparent blur-2xl"
          style={{ opacity: active === 1 ? 1 : 0, transform: active === 1 ? 'translateY(0)' : 'translateY(50px)', transition: 'all 1.5s ease-out' }} />
        
        {/* Slide 2: Amber floating elements */}
        <div className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-[#D97706]/10 blur-[80px]"
          style={{ opacity: active === 2 ? 1 : 0, transform: active === 2 ? 'translateX(0)' : 'translateX(30px)', transition: 'all 1.5s ease-out' }} />
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-[#D97706]/5 blur-[100px]"
          style={{ opacity: active === 2 ? 1 : 0, transition: 'all 1s' }} />

        {/* Slide 3: Indigo diagonal streaks */}
        <div className="absolute top-0 right-0 w-[40vw] h-[150vh] bg-gradient-to-l from-[#312E81]/20 to-transparent blur-xl"
          style={{ opacity: active === 3 ? 1 : 0, transform: active === 3 ? 'skewX(-20deg) translateX(10%)' : 'skewX(-20deg) translateX(30%)', transition: 'all 1.5s ease-out' }} />
      </div>

      {/* ═══ Content ═══ */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-14 w-full">
          <div className="max-w-[750px] lg:ml-[10%]">

            {/* Slide counter badge */}
            <div className="mb-6" style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ backgroundColor: `${slide.accent}25`, color: slide.accent, border: `1px solid ${slide.accent}40`, transition: 'all 0.8s' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: slide.accent }} />
                Admissions 2026-27
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-white leading-[1.08] mb-6"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                opacity: isOut ? 0 : (loaded ? 1 : 0),
                transform: isOut ? 'translateY(20px)' : (loaded ? 'translateY(0)' : 'translateY(40px)'),
                filter: isOut ? 'blur(4px)' : 'blur(0)',
                transition: isOut ? 'all 500ms ease-out' : 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
              }}
            >
              {slide.heading}
            </h1>

            {/* Subtext */}
            <p
              className="text-slate-300 mb-8"
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                lineHeight: 1.7,
                maxWidth: '520px',
                fontWeight: 400,
                opacity: isOut ? 0 : (loaded ? 1 : 0),
                transform: isOut ? 'translateY(16px)' : (loaded ? 'translateY(0)' : 'translateY(30px)'),
                transition: isOut ? 'all 400ms ease-out 50ms' : 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s',
              }}
            >
              {slide.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4" style={{
              opacity: isOut ? 0 : (loaded ? 1 : 0),
              transform: isOut ? 'translateY(12px)' : (loaded ? 'translateY(0)' : 'translateY(20px)'),
              transition: isOut ? 'all 400ms ease-out 100ms' : 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s',
            }}>
              <a href="https://apply-now.tekkzy.com/" className="group inline-flex items-center gap-2 text-[13px] font-bold px-8 py-4 rounded-lg uppercase tracking-[0.1em] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl text-decoration-none"
                style={{ backgroundColor: slide.accent, color: '#fff', boxShadow: `0 10px 30px -8px ${slide.accent}80`, transition: 'all 0.8s' }}>
                Apply Now
                <ArrowDown size={14} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#downloads" className="inline-flex items-center gap-2 text-[13px] font-bold px-8 py-4 rounded-lg uppercase tracking-[0.1em] border-2 border-white/25 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 text-decoration-none">
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Bottom bar ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-14 pb-10">
          <div className="flex items-end justify-end">
            {/* Nav arrows */}
            <div className="flex items-center gap-2">
              {[
                { icon: <ChevronLeft size={16} />, idx: (active - 1 + SLIDES.length) % SLIDES.length },
                { icon: <ChevronRight size={16} />, idx: (active + 1) % SLIDES.length },
              ].map((btn, i) => (
                <button key={i} onClick={() => handleNav(btn.idx)}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}>
                  {btn.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideProgress { 0% { width: 0%; } 100% { width: 100%; } }
      `}</style>
    </section>
  );
}
