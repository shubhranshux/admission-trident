import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Clock, Users, Wifi, Monitor, BookMarked, Search, Globe, Bookmark } from 'lucide-react';
import { FadeInUp } from '../utils/animations';

const FACILITIES = [
  { icon: BookMarked, title: "Vast Collection", desc: "Over 50,000+ books, journals, and periodicals across engineering and science disciplines.", stat: "50,000+" },
  { icon: Monitor, title: "Digital Library", desc: "Access to e-journals, e-books, and online databases including IEEE, Springer, and Elsevier.", stat: "10,000+" },
  { icon: Wifi, title: "Wi-Fi Enabled", desc: "High-speed internet connectivity throughout the library for seamless digital access.", stat: "24/7" },
  { icon: Users, title: "Reading Hall", desc: "Spacious air-conditioned reading hall with seating capacity for 300+ students simultaneously.", stat: "300+" },
  { icon: Globe, title: "DELNET Member", desc: "Member of Developing Library Network for inter-library loan and resource sharing.", stat: "Active" },
  { icon: Search, title: "OPAC System", desc: "Online Public Access Catalogue for easy search and discovery of library resources.", stat: "Digital" },
];

const TIMINGS = [
  { day: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Exam Period", time: "7:00 AM – 10:00 PM" },
  { day: "Sunday / Holidays", time: "Closed" },
];

const E_RESOURCES = [
  "IEEE Xplore Digital Library", "Springer Nature Journals", "Elsevier ScienceDirect", "NPTEL Video Lectures",
  "National Digital Library (NDL)", "DELNET Resources", "Shodhganga (PhD Theses)", "J-Gate Plus",
];

export default function LibraryPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero — Teal Split Layout with floating shapes */}
      <div className="relative w-full min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/indian_students_hero.png" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#134E4A]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#042F2E]/80 via-[#134E4A]/50 to-transparent" />
        </div>
        {/* Decorative floating shapes */}
        <div className="absolute top-12 right-[8%] w-48 h-48 border border-[#5EEAD4]/15 rounded-3xl rotate-12" />
        <div className="absolute top-32 right-[15%] w-24 h-24 border border-[#5EEAD4]/10 rounded-2xl -rotate-6" />
        <div className="absolute bottom-20 right-[5%] w-36 h-36 bg-[#5EEAD4]/5 rounded-full blur-sm" />
        <div className="absolute top-20 left-[5%] w-20 h-20 bg-[#2DD4BF]/8 rounded-full" />
        <div className="absolute bottom-16 left-[12%] w-32 h-32 border border-[#99F6E4]/10 rounded-full" />
        {/* Gradient mesh overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0D9488]/20 to-transparent" />
        {/* Bottom diagonal cut */}
        <div className="absolute bottom-0 left-0 w-full h-24">
          <svg viewBox="0 0 1440 96" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0 96L1440 96L1440 0C1200 80 720 96 0 40L0 96Z" fill="#F0F4F8"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 pt-40 pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[#5EEAD4]/10 border border-[#5EEAD4]/20 rounded-full px-4 py-1.5 mb-6">
                <BookOpen size={14} className="text-[#5EEAD4]" />
                <span className="text-[11px] font-bold text-[#5EEAD4] uppercase tracking-widest">Knowledge Hub</span>
              </div>
              <h1 className="font-serif text-[52px] md:text-[76px] font-black text-white leading-[1.05] mb-6 tracking-tight">
                Central<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EEAD4] to-[#99F6E4]">Library</span>
              </h1>
              <p className="text-white/70 text-[17px] max-w-lg leading-relaxed font-light mb-8">
                A modern knowledge ecosystem empowering academic excellence with vast physical and digital collections.
              </p>
              <div className="flex flex-wrap gap-6">
                {[{ n: "50K+", l: "Books" }, { n: "10K+", l: "E-Resources" }, { n: "300+", l: "Seats" }].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[28px] font-black text-[#5EEAD4]">{s.n}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex w-[300px] h-[300px] items-center justify-center">
              <div className="relative">
                <div className="w-52 h-52 rounded-3xl bg-gradient-to-br from-[#5EEAD4]/20 to-[#0D9488]/10 backdrop-blur-sm border border-[#5EEAD4]/20 flex items-center justify-center rotate-6">
                  <BookOpen size={72} className="text-[#5EEAD4]/60" strokeWidth={1} />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[#14B8A6] flex items-center justify-center shadow-lg shadow-[#14B8A6]/30 -rotate-12">
                  <Search size={28} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-4">
        <nav className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-[#78716C] uppercase tracking-[0.2em] mb-12">
          <Link to="/" className="hover:text-[#134E4A] transition-colors flex items-center gap-1"><Home size={12} /> Home</Link>
          <ChevronRight size={10} />
          <span className="text-[#134E4A] font-bold">Library</span>
        </nav>

        {/* Facilities */}
        <FadeInUp>
          <h2 className="font-serif text-[32px] font-bold text-[#134E4A] mb-2">Facilities & Resources</h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl">Our state-of-the-art library provides everything students need for academic research and learning.</p>
        </FadeInUp>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {FACILITIES.map((f, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0F766E]/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#0F766E]/10 flex items-center justify-center group-hover:bg-[#0F766E] transition-colors">
                  <f.icon size={22} className="text-[#0F766E] group-hover:text-white transition-colors" />
                </div>
                <span className="text-[#0D9488] text-[13px] font-black bg-[#0D9488]/8 px-3 py-1 rounded-full">{f.stat}</span>
              </div>
              <h3 className="font-sans text-[20px] font-bold text-[#134E4A] mb-2">{f.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <FadeInUp>
            <div className="py-12 border-b border-gray-100 last:border-0 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 flex items-center justify-center">
                  <Clock size={20} className="text-[#0F766E]" />
                </div>
                <h3 className="font-serif text-[24px] font-bold text-[#134E4A]">Library Timings</h3>
              </div>
              <div className="space-y-4">
                {TIMINGS.map((t,i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-dashed border-gray-100 last:border-0">
                    <span className="text-[15px] font-medium text-gray-700">{t.day}</span>
                    <span className="text-[14px] font-bold text-[#0F766E] bg-[#0F766E]/5 px-4 py-1.5 rounded-full">{t.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={150}>
            <div className="py-12 px-6 lg:px-12 bg-[#134E4A] rounded-3xl shadow-xl h-full text-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Globe size={20} className="text-[#5EEAD4]" />
                </div>
                <h3 className="font-serif text-[24px] font-bold">E-Resources</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {E_RESOURCES.map((r,i) => (
                  <div key={i} className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Bookmark size={14} className="text-[#5EEAD4] flex-shrink-0" />
                    <span className="text-[14px] font-medium text-white/80">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
