import { useState, useEffect } from "react";
import { FadeInUp } from "../../utils/animations";
import SectionDivider from "../../components/SectionDivider";
import {
  ArrowRight, GraduationCap, ClipboardCheck, FileText,
  CalendarCheck, CheckCircle2, Send, Phone, Clock, Landmark,
  ShieldCheck, BookOpen, Award, ChevronDown, Star, Users, Zap,
  Quote,
} from "lucide-react";

import imgHeroApply from "../../assets/indian_hero_graduation.png";
import imgLab from "../../assets/indian_engineering_lab.png";
import imgLife from "../../assets/indian_campus_quad.png";
import imgIndustry from "../../assets/indian_business_presentation.png";

/* ─── Decorative Background Components ─── */

/* Soft overlapping circles — pastel bubbles */
const BubblesBg = ({ colors = ["#2C3A8C", "#E5AA3E", "#8B6E66"], opacity = 0.06 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <circle cx="200" cy="150" r="280" fill={colors[0]} opacity={opacity} />
      <circle cx="450" cy="350" r="220" fill={colors[1]} opacity={opacity * 0.8} />
      <circle cx="900" cy="100" r="320" fill={colors[2]} opacity={opacity * 0.6} />
      <circle cx="1200" cy="400" r="260" fill={colors[0]} opacity={opacity * 0.5} />
      <circle cx="700" cy="600" r="350" fill={colors[1]} opacity={opacity * 0.4} />
      <circle cx="1350" cy="200" r="180" fill={colors[2]} opacity={opacity * 0.7} />
      <circle cx="100" cy="700" r="200" fill={colors[0]} opacity={opacity * 0.3} />
    </svg>
  </div>
);

/* Flowing wave curves at bottom */
const WavesBg = ({ color = "#2C3A8C", opacity = 0.06 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 400" preserveAspectRatio="none" style={{ height: "60%" }}>
      <path d="M0,300 Q200,100 400,250 T800,180 T1200,280 T1440,200 L1440,400 L0,400 Z" fill={color} opacity={opacity} />
      <path d="M0,320 Q300,150 500,280 T900,200 T1300,300 T1440,220 L1440,400 L0,400 Z" fill={color} opacity={opacity * 0.7} />
      <path d="M0,350 Q250,200 600,300 T1000,230 T1440,280 L1440,400 L0,400 Z" fill={color} opacity={opacity * 0.4} />
    </svg>
    {/* Thin flowing accent lines */}
    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 400" preserveAspectRatio="none" style={{ height: "55%" }}>
      <path d="M0,310 Q350,120 700,260 T1440,210" fill="none" stroke={color} strokeWidth="2" opacity={opacity * 3} />
      <path d="M0,340 Q400,180 800,290 T1440,240" fill="none" stroke={color} strokeWidth="1.5" opacity={opacity * 2} />
    </svg>
  </div>
);

/* Geometric corner accents with dot grids */
const GeometricBg = ({ color = "#2C3A8C", opacity = 0.08 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Top-left chevrons */}
    <svg className="absolute top-0 left-0" width="200" height="200" viewBox="0 0 200 200">
      <path d="M0,0 L80,0 L0,80 Z" fill={color} opacity={opacity} />
      <path d="M0,30 L110,0 L0,110 Z" fill={color} opacity={opacity * 0.6} />
      <path d="M0,60 L140,0 L0,140 Z" fill="none" stroke={color} strokeWidth="2" opacity={opacity * 1.5} />
    </svg>
    {/* Bottom-right chevrons */}
    <svg className="absolute bottom-0 right-0" width="200" height="200" viewBox="0 0 200 200">
      <path d="M200,200 L120,200 L200,120 Z" fill={color} opacity={opacity} />
      <path d="M200,170 L90,200 L200,90 Z" fill={color} opacity={opacity * 0.6} />
      <path d="M200,140 L60,200 L200,60 Z" fill="none" stroke={color} strokeWidth="2" opacity={opacity * 1.5} />
    </svg>
    {/* Dot grid top-right */}
    <svg className="absolute top-4 right-4" width="120" height="120" viewBox="0 0 120 120">
      {Array.from({ length: 36 }, (_, i) => (
        <circle key={i} cx={(i % 6) * 20 + 10} cy={Math.floor(i / 6) * 20 + 10} r="3" fill={color} opacity={opacity * 1.2} />
      ))}
    </svg>
    {/* Dot grid bottom-left */}
    <svg className="absolute bottom-4 left-4" width="100" height="100" viewBox="0 0 100 100">
      {Array.from({ length: 25 }, (_, i) => (
        <circle key={i} cx={(i % 5) * 20 + 10} cy={Math.floor(i / 5) * 20 + 10} r="2.5" fill={color} opacity={opacity} />
      ))}
    </svg>
    {/* Diagonal lines */}
    <svg className="absolute inset-0 w-full h-full">
      <line x1="0" y1="100%" x2="100%" y2="0" stroke={color} strokeWidth="1" opacity={opacity * 0.3} />
      <line x1="5%" y1="100%" x2="100%" y2="5%" stroke={color} strokeWidth="0.5" opacity={opacity * 0.2} />
    </svg>
  </div>
);

/* Concentric arcs — modern radiating circles */
const ArcsBg = ({ color = "#2C3A8C", opacity = 0.05 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg className="absolute -right-40 -top-40" width="800" height="800" viewBox="0 0 800 800">
      {[200, 280, 360, 440].map((r, i) => (
        <circle key={i} cx="400" cy="400" r={r} fill="none" stroke={color} strokeWidth={2 - i * 0.3} opacity={opacity * (1 - i * 0.15)} />
      ))}
    </svg>
    <svg className="absolute -left-32 -bottom-32" width="600" height="600" viewBox="0 0 600 600">
      {[150, 220, 290].map((r, i) => (
        <circle key={i} cx="300" cy="300" r={r} fill="none" stroke={color} strokeWidth={1.5 - i * 0.3} opacity={opacity * (0.8 - i * 0.2)} />
      ))}
    </svg>
  </div>
);

/* Cross-hatch pattern with gradient fade */
const CrossHatchBg = ({ color = "#E5AA3E", opacity = 0.04 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <pattern id="crosshatch" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke={color} strokeWidth="1" opacity={opacity * 4} />
        </pattern>
        <linearGradient id="fadeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="30%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="fadeMask"><rect width="100%" height="100%" fill="url(#fadeGrad)" /></mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#crosshatch)" mask="url(#fadeMask)" />
    </svg>
    {/* Accent floating shapes */}
    <div className="absolute top-[15%] right-[10%] w-24 h-24 border-2 rotate-45 opacity-[0.06]" style={{ borderColor: color }}></div>
    <div className="absolute bottom-[20%] left-[8%] w-16 h-16 rounded-full opacity-[0.05]" style={{ backgroundColor: color }}></div>
  </div>
);

/* Flowing ribbon strands */
const RibbonBg = ({ color = "#2C3A8C", opacity = 0.06 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
      <path d="M-100,400 C200,100 400,600 700,300 S1100,500 1540,200" fill="none" stroke={color} strokeWidth="80" opacity={opacity * 0.5} strokeLinecap="round" />
      <path d="M-100,500 C300,200 500,700 800,350 S1200,550 1540,300" fill="none" stroke={color} strokeWidth="40" opacity={opacity * 0.3} strokeLinecap="round" />
      <path d="M-100,450 C250,150 450,650 750,320 S1150,520 1540,250" fill="none" stroke={color} strokeWidth="2" opacity={opacity * 2} strokeLinecap="round" />
    </svg>
  </div>
);

/* ─── Data ─── */
const programs = [
  { name: "Computer Science & Engineering", degree: "B.Tech", duration: "4 Years", seats: 180, fee: "₹85,000 / Year", color: "#E5AA3E" },
  { name: "CSE (AI & Machine Learning)", degree: "B.Tech", duration: "4 Years", seats: 60, fee: "₹85,000 / Year", color: "#283B91" },
  { name: "Electronics & Telecom Engineering", degree: "B.Tech", duration: "4 Years", seats: 120, fee: "₹85,000 / Year", color: "#8B6E66" },
  { name: "Electrical & Electronics Engg.", degree: "B.Tech", duration: "4 Years", seats: 60, fee: "₹85,000 / Year", color: "#283B91" },
  { name: "Mechanical Engineering", degree: "B.Tech", duration: "4 Years", seats: 120, fee: "₹85,000 / Year", color: "#E5AA3E" },
  { name: "Civil Engineering", degree: "B.Tech", duration: "4 Years", seats: 60, fee: "₹85,000 / Year", color: "#8B6E66" },
  { name: "Computer Science & Engineering", degree: "M.Tech", duration: "2 Years", seats: 30, fee: "₹72,000 / Year", color: "#283B91" },
  { name: "Master of Business Administration", degree: "MBA", duration: "2 Years", seats: 60, fee: "₹1,06,000 / Year", color: "#E5AA3E" },
  { name: "Master of Computer Applications", degree: "MCA", duration: "2 Years", seats: 60, fee: "₹74,000 / Year", color: "#8B6E66" },
];

const steps = [
  { num: "01", title: "Appear for Entrance Exam", desc: "Write JEE Main (B.Tech), OJEE (PG/MBA/MCA), or GATE (M.Tech) based on your chosen program.", icon: <FileText size={22} />, accent: "#E5AA3E" },
  { num: "02", title: "Register for Counseling", desc: "After results, register on the OJEE / JoSAA counseling portal. Keep documents and rank card ready.", icon: <ClipboardCheck size={22} />, accent: "#283B91" },
  { num: "03", title: "Select Trident Academy", desc: "During choice filling, select Trident Academy of Technology as your preferred institution.", icon: <GraduationCap size={22} />, accent: "#8B6E66" },
  { num: "04", title: "Report to Campus", desc: "Download allotment letter, pay acceptance fee, and report to campus with original documents for verification.", icon: <CalendarCheck size={22} />, accent: "#E5AA3E" },
];

const eligibility = [
  { program: "B.Tech", requirement: "10+2 with PCM, minimum 45% aggregate. Valid JEE Main score required.", icon: <BookOpen size={20} /> },
  { program: "M.Tech", requirement: "B.Tech/B.E. with minimum 50% marks. Valid GATE or OJEE (PG) score.", icon: <Award size={20} /> },
  { program: "MBA", requirement: "Graduation (3 years) with minimum 50% aggregate. Valid OJEE/CAT/CMAT score.", icon: <Landmark size={20} /> },
  { program: "MCA", requirement: "Graduation with Mathematics at 10+2 or grad level. Minimum 50%. Valid OJEE score.", icon: <ShieldCheck size={20} /> },
];

const whyApply = [
  { stat: "NAAC 'A'", label: "Grade Accredited", accent: "#E5AA3E" },
  { stat: "320+", label: "Recruiting Companies", accent: "#283B91" },
  { stat: "₹48 LPA", label: "Highest Package", accent: "#8B6E66" },
  { stat: "94%", label: "Placement Rate", accent: "#E5AA3E" },
];

const campusHighlights = [
  { title: "World-Class Labs", desc: "GPU-powered AI research labs, IoT labs, and advanced engineering workshops equipped with the latest industry-standard tools and technologies.", image: imgLab, accent: "#E5AA3E" },
  { title: "Vibrant Campus Life", desc: "Cultural fests, sports competitions, clubs, and a thriving student community that makes every day an adventure.", image: imgLife, accent: "#283B91" },
  { title: "Industry Connect", desc: "Regular industry visits, guest lectures from Fortune 500 leaders, and internship programs with top companies.", image: imgIndustry, accent: "#8B6E66" },
];

const successStories = [
  { name: "Rahul Sharma", package: "₹12 LPA", company: "TCS Digital", year: "2024", quote: "Trident's placement cell prepared me exceptionally well. The mock interviews and resume workshops were game-changers." },
  { name: "Sneha Das", package: "₹18 LPA", company: "Capgemini", year: "2024", quote: "The industry exposure and hands-on project experience at Trident gave me a competitive edge in placements." },
  { name: "Vikram Patra", package: "₹15 LPA", company: "Infosys", year: "2023", quote: "From hackathons to campus drives, every experience at Trident shaped my career trajectory." },
];

const scholarships = [
  { title: "Merit Scholarship", target: "JEE Main Top Rankers", discount: "Up to 100% Tuition Fee Waiver", icon: <Award size={22}/>, accent: "#E5AA3E" },
  { title: "Women in Tech", target: "Female Candidates", discount: "Special 25% Grant", icon: <Users size={22}/>, accent: "#8B6E66" },
  { title: "EWS Grant", target: "Economically Weaker Section", discount: "50% Fee Assistance", icon: <Landmark size={22}/>, accent: "#283B91" },
];

/* ═══════════════════════════════════════════════════════ */
export default function ApplyPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", program: "", entranceExam: "", rank: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { setIsVisible(true); window.scrollTo(0, 0); }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); setFormData({ name: "", email: "", phone: "", program: "", entranceExam: "", rank: "", message: "" }); };

  const inputClass = (field) => {
    const base = "w-full bg-white/50 backdrop-blur-md border border-[#EFE7DF] text-[#212529] placeholder-[#3E3A36]/30 px-5 py-4 rounded-2xl outline-none transition-all duration-500 font-medium text-[16px] shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]";
    return base + (focusedField === field ? " border-[#E5AA3E] shadow-[0_0_0_4px_rgba(229,170,62,0.15),inset_0_2px_10px_rgba(0,0,0,0.02)] bg-white" : " hover:border-[#8B6E66]/40 hover:bg-white/80");
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ══════ HERO — FULL BLEED ══════ */}
      <section className="relative w-full min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={imgHeroApply} alt="Students at Trident" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full pb-24 pt-40">
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[2px] bg-[#E5AA3E]"></div>
              <span className="text-[11px] font-black text-[#E5AA3E] uppercase tracking-[.5em]">Admissions 2026–27</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black text-white leading-[0.95] tracking-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Begin Your <br /><span className="italic text-[#E5AA3E]">Journey.</span>
            </h1>
            <p className={`text-[17px] md:text-lg text-white/70 max-w-xl mb-12 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Join Odisha's premier technical institution. Applications are now open for B.Tech, M.Tech, MBA & MCA programs across all branches.
            </p>
            <div className={`flex flex-wrap items-center gap-5 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a href="#apply-form" className="bg-[#E5AA3E] text-[#1A1817] px-10 py-5 rounded-full font-black text-[12px] uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-1">
                Start Application <ArrowRight size={18} />
              </a>
              <a href="https://contactus-tat.tekkzy.com" className="text-white font-bold text-[12px] uppercase tracking-widest border-b-2 border-white/30 hover:border-[#E5AA3E] transition-colors pb-1">Contact Us</a>
            </div>
          </div>

          <div className={`mt-20 flex flex-wrap gap-12 md:gap-20 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {whyApply.map((s) => (
              <div key={s.label} className="relative">
                <div className="text-4xl md:text-5xl font-black text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{s.stat}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[.3em]">Scroll</span>
          <ChevronDown size={20} className="text-white/40 animate-bounce" />
        </div>
      </section>

      <SectionDivider type="wave" topColor="#111" bottomColor="#ffffff" height={70} />

      {/* ══════ HOW TO APPLY — TIMELINE + BUBBLES BG ══════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <BubblesBg colors={["#2C3A8C", "#E5AA3E", "#8B6E66"]} opacity={0.05} />

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="max-w-3xl mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#8B6E66]"></div>
                <span className="text-[11px] font-black text-[#8B6E66] uppercase tracking-[.4em]">Process</span>
              </div>
              <h2 className="text-[44px] md:text-[64px] font-black text-[#212529] leading-[1.05] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                How to <span className="italic text-[#8B6E66]">Apply.</span>
              </h2>
              <p className="text-[#5c5855] text-[17px] font-medium leading-relaxed mt-6 max-w-2xl">A simple 4-step process to secure your seat at Trident Academy of Technology.</p>
            </div>
          </FadeInUp>

          <div className="relative">
            <div className="absolute left-[28px] md:left-[40px] top-0 bottom-0 w-[2px] bg-[#EFE7DF] hidden md:block"></div>
            {steps.map((step, i) => (
              <FadeInUp key={step.num} delay={100 + i * 120}>
                <div className="flex gap-8 md:gap-16 mb-16 last:mb-0 group">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: step.accent }}>
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1 pb-16 border-b border-[#EFE7DF] group-last:border-b-0">
                    <div className="flex items-center gap-3 mb-3 text-[#8B6E66]/30 group-hover:text-[#8B6E66] transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#212529] mb-4 group-hover:text-[#8B6E66] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {step.title}
                    </h3>
                    <p className="text-[#5c5855] text-[15px] md:text-[16px] font-medium leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider type="tilt" topColor="#ffffff" bottomColor="#212529" height={80} />

      {/* ══════ CAMPUS HIGHLIGHTS — ARCS BG ══════ */}
      <section className="bg-[#212529] relative overflow-hidden">
        <ArcsBg color="#E5AA3E" opacity={0.06} />

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-28 relative z-10">
          <FadeInUp>
            <div className="max-w-3xl mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#E5AA3E]"></div>
                <span className="text-[11px] font-black text-[#E5AA3E] uppercase tracking-[.4em]">Campus</span>
              </div>
              <h2 className="text-[44px] md:text-[64px] font-black text-white leading-[1.05] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Choose <span className="italic text-[#E5AA3E]">Trident?</span>
              </h2>
            </div>
          </FadeInUp>

          {campusHighlights.map((item, i) => (
            <FadeInUp key={item.title} delay={100 + i * 100}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-0 mb-20 last:mb-0 group`}>
                <div className="lg:w-[55%] relative overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1500ms]" />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 group-hover:bg-[#E5AA3E] transition-colors duration-500"></div>
                </div>
                <div className={`lg:w-[45%] flex flex-col justify-center ${i % 2 === 0 ? 'lg:pl-16 xl:pl-24' : 'lg:pr-16 xl:pr-24'}`}>
                  <div className="text-[80px] md:text-[120px] font-black text-white/[0.04] leading-none absolute -z-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                    0{i + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="w-8 h-[2px] mb-6" style={{ backgroundColor: item.accent }}></div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-5 group-hover:text-[#E5AA3E] transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-[15px] md:text-[16px] font-medium leading-[1.8] max-w-md">{item.desc}</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <SectionDivider type="curve" topColor="#212529" bottomColor="#F0BB51" height={70} />

      {/* ══════ ELIGIBILITY — CROSSHATCH BG ══════ */}
      <section className="relative py-24 overflow-hidden bg-[#F0BB51]">
        <CrossHatchBg color="#212529" opacity={0.03} />
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#E5AA3E] transform origin-top-right -skew-x-12 opacity-50 z-0"></div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/3">
              <FadeInUp>
                <div className="lg:sticky lg:top-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[2px] bg-[#212529]"></div>
                    <span className="text-[11px] font-black text-[#212529]/60 uppercase tracking-[.4em]">Requirements</span>
                  </div>
                  <h2 className="text-[44px] md:text-[56px] font-black text-[#212529] leading-[1.05] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Eligibility<br />Criteria
                  </h2>
                </div>
              </FadeInUp>
            </div>
            <div className="w-full lg:w-2/3">
              {eligibility.map((e, i) => (
                <FadeInUp key={e.program} delay={100 + i * 100}>
                  <div className="flex gap-6 md:gap-10 py-8 border-b-2 border-[#212529]/10 last:border-b-0 group">
                    <div className="flex-shrink-0 text-[#212529]/20 group-hover:text-[#212529] transition-colors duration-300">{e.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black text-[#212529] mb-3 group-hover:translate-x-2 transition-transform duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {e.program}
                      </h3>
                      <p className="text-[#212529]/70 text-[15px] font-medium leading-relaxed max-w-lg">{e.requirement}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider type="wave" topColor="#F0BB51" bottomColor="#FAF9F7" height={60} />

      {/* ══════ SCHOLARSHIPS — WAVES BG ══════ */}
      <section className="py-28 bg-[#FAF9F7] relative overflow-hidden">
        <WavesBg color="#2C3A8C" opacity={0.04} />

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="max-w-3xl mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#E5AA3E]"></div>
                <span className="text-[11px] font-black text-[#E5AA3E] uppercase tracking-[.4em]">Financial Aid</span>
              </div>
              <h2 className="text-[44px] md:text-[64px] font-black text-[#212529] leading-[1.05] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Scholarships & <span className="italic text-[#8B6E66]">Grants.</span>
              </h2>
              <p className="text-[#5c5855] text-[17px] font-medium leading-relaxed mt-6 max-w-2xl">
                We believe finances should never be a barrier to world-class education.
              </p>
            </div>
          </FadeInUp>

          {scholarships.map((s, i) => (
            <FadeInUp key={s.title} delay={100 + i * 100}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-b border-[#212529]/10 last:border-b-0 group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: s.accent }}>{s.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl md:text-3xl font-black text-[#212529] mb-1 group-hover:text-[#8B6E66] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {s.title}
                  </h3>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8B6E66]/50">{s.target}</span>
                </div>
                <div className="text-right">
                  <div className="text-[18px] md:text-[20px] font-black text-[#212529]">{s.discount}</div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <SectionDivider type="gradient" topColor="#FAF9F7" bottomColor="#ffffff" accentColor="#E8BD63" accentHeight={8} height={50} />

      {/* ══════ SUCCESS STORIES — RIBBON BG ══════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <RibbonBg color="#8B6E66" opacity={0.04} />

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="max-w-3xl mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#283B91]"></div>
                <span className="text-[11px] font-black text-[#283B91] uppercase tracking-[.4em]">Testimonials</span>
              </div>
              <h2 className="text-[44px] md:text-[64px] font-black text-[#212529] leading-[1.05] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Success <span className="italic text-[#8B6E66]">Stories.</span>
              </h2>
            </div>
          </FadeInUp>

          {successStories.map((s, i) => (
            <FadeInUp key={s.name} delay={100 + i * 120}>
              <div className="py-12 border-b border-[#EFE7DF] last:border-b-0 group">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                  <div className="flex-1">
                    <Quote size={36} className="text-[#E5AA3E]/20 mb-6" />
                    <p className="text-[22px] md:text-[28px] font-bold text-[#212529] leading-[1.5] tracking-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                      "{s.quote}"
                    </p>
                  </div>
                  <div className="lg:w-[240px] flex-shrink-0 lg:text-right">
                    <div className="text-[18px] font-black text-[#212529]">{s.name}</div>
                    <div className="text-[12px] font-bold text-[#8B6E66] uppercase tracking-widest mt-1">{s.company} · {s.year}</div>
                    <div className="inline-block mt-4 px-5 py-2 bg-[#283B91] text-white text-[13px] font-black rounded-full">
                      {s.package}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <SectionDivider type="curve" topColor="#ffffff" bottomColor="#FAF9F7" height={50} />

      {/* ══════ APPLICATION FORM — BUBBLES BG (SOFT) ══════ */}
      <section id="apply-form" className="py-28 bg-[#FAF9F7] relative overflow-hidden">
        <BubblesBg colors={["#8B6E66", "#2C3A8C", "#E5AA3E"]} opacity={0.03} />

        <div className="max-w-[900px] mx-auto px-6 xl:px-12 relative z-10">
          <FadeInUp>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#8B6E66]"></div>
                <span className="text-[11px] font-black text-[#8B6E66] uppercase tracking-[.4em]">Application</span>
              </div>
              <h2 className="text-[44px] md:text-[64px] font-black text-[#212529] leading-[1.05] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Apply <span className="italic text-[#8B6E66]">Now.</span>
              </h2>
              <p className="text-[#5c5855] text-[17px] font-medium leading-relaxed mt-6">Fill in your details and our admissions team will guide you through the next steps.</p>
            </div>
          </FadeInUp>

          <FadeInUp delay={150}>
            <div className="relative">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#E5AA3E] via-[#8B6E66] to-[#283B91] hidden md:block"></div>
              <div className="md:pl-12">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-24 text-center">
                    <CheckCircle2 size={56} className="text-[#8B6E66] mb-8" />
                    <h4 className="text-3xl font-black text-[#212529] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Application Received!</h4>
                    <p className="text-[#5c5855] text-[16px] font-medium max-w-sm">Thank you for applying. Our admissions team will contact you within 48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/70 mb-2 ml-1">Full Name <span className="text-[#E5AA3E]">*</span></label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} className={inputClass("name")} placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/70 mb-2 ml-1">Email Address <span className="text-[#E5AA3E]">*</span></label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} className={inputClass("email")} placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/70 mb-2 ml-1">Phone Number <span className="text-[#E5AA3E]">*</span></label>
                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} className={inputClass("phone")} placeholder="+91 98XXX XXXXX" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/70 mb-2 ml-1">Program <span className="text-[#E5AA3E]">*</span></label>
                        <select name="program" required value={formData.program} onChange={handleChange} onFocus={() => setFocusedField("program")} onBlur={() => setFocusedField(null)} className={inputClass("program") + " appearance-none cursor-pointer"} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(139,110,102,0.6)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 20px center" }}>
                          <option value="">Select a program</option>
                          {programs.map((p) => (<option key={p.name + p.degree} value={`${p.degree} - ${p.name}`}>{p.degree} — {p.name}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/70 mb-2 ml-1">Entrance Exam</label>
                        <select name="entranceExam" value={formData.entranceExam} onChange={handleChange} onFocus={() => setFocusedField("entranceExam")} onBlur={() => setFocusedField(null)} className={inputClass("entranceExam") + " appearance-none cursor-pointer"} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(139,110,102,0.6)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 20px center" }}>
                          <option value="">Select exam</option><option value="JEE Main">JEE Main</option><option value="OJEE">OJEE</option><option value="GATE">GATE</option><option value="CAT">CAT</option><option value="CMAT">CMAT</option><option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/70 mb-2 ml-1">Rank / Score</label>
                        <input type="text" name="rank" value={formData.rank} onChange={handleChange} onFocus={() => setFocusedField("rank")} onBlur={() => setFocusedField(null)} className={inputClass("rank")} placeholder="e.g. 45000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-[#8B6E66]/70 mb-2 ml-1">Additional Message</label>
                      <textarea name="message" rows={4} value={formData.message} onChange={handleChange} onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)} className={inputClass("message") + " resize-none"} placeholder="Any additional questions or information..." />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-[#8B6E66]/30 text-[10px] font-bold uppercase tracking-widest hidden sm:block"><span className="text-[#E5AA3E]">*</span> Required fields</p>
                      <button type="submit" className="group inline-flex items-center gap-3 bg-[#E5AA3E] hover:bg-[#c99535] text-[#1A1817] px-10 py-5 rounded-2xl font-black text-[12px] uppercase tracking-widest transition-all duration-500 shadow-xl hover:-translate-y-1 hover:shadow-2xl">
                        Submit Application <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-center border-t border-[#212529]/10 pt-10">
              <div className="flex items-center gap-3 text-[#5c5855] text-[13px] font-bold">
                <Phone size={16} className="text-[#8B6E66]" />
                <span>Helpline: <a href="tel:+919861191195" className="text-[#283B91] hover:underline">+91 98611 91195</a>, <a href="tel:+917008443255" className="text-[#283B91] hover:underline">+91 70084 43255</a></span>
              </div>
              <span className="text-[#EFE7DF] hidden sm:block">|</span>
              <div className="flex items-center gap-3 text-[#5c5855] text-[13px] font-bold">
                <Clock size={16} className="text-[#E5AA3E]" /> <span>Mon – Sat: 9 AM – 5 PM</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <SectionDivider type="wave" topColor="#FAF9F7" bottomColor="#1A1817" height={70} />

      {/* ══════ CTA — GEOMETRIC CORNER BG ══════ */}
      <section className="relative overflow-hidden bg-[#1A1817]">
        {/* CTA geometric accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <svg className="absolute top-0 left-0" width="160" height="160" viewBox="0 0 160 160">
            <path d="M0,0 L60,0 L0,60 Z" fill="#E5AA3E" opacity="0.08" />
            <path d="M0,20 L90,0 L0,90 Z" fill="#E5AA3E" opacity="0.04" />
          </svg>
          <svg className="absolute bottom-0 right-0" width="160" height="160" viewBox="0 0 160 160">
            <path d="M160,160 L100,160 L160,100 Z" fill="#E5AA3E" opacity="0.08" />
            <path d="M160,140 L70,160 L160,70 Z" fill="#E5AA3E" opacity="0.04" />
          </svg>
          {/* Dot grid */}
          <svg className="absolute top-6 right-6" width="80" height="80" viewBox="0 0 80 80">
            {Array.from({ length: 16 }, (_, i) => (
              <circle key={i} cx={(i % 4) * 20 + 10} cy={Math.floor(i / 4) * 20 + 10} r="2" fill="#E5AA3E" opacity="0.12" />
            ))}
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-24 relative z-10">
          <FadeInUp>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h4 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Have <span className="italic text-[#E5AA3E]">questions?</span>
                </h4>
                <p className="text-[#A59381] text-[16px] font-medium max-w-lg">Our admissions counselors are ready to help you through every step of the application process.</p>
              </div>
              <a href="https://contactus-tat.tekkzy.com" className="group inline-flex items-center gap-3 bg-[#E5AA3E] hover:bg-white text-[#1A1817] px-10 py-5 rounded-full font-black text-[12px] uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all duration-500 whitespace-nowrap">
                Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
