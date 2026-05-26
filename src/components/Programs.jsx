import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Cpu, FlaskConical, BookOpen, Cog, Briefcase } from 'lucide-react';
import { FlowingWaves } from './BackgroundDesigns';

const programData = [
  {
    id: "btech",
    title: "B.Tech",
    subtitle: "4-Year Undergraduate",
    tags: ["Biotechnology", "Civil", "CSE", "CSE (AI & ML)", "CSE (Data Science)", "ETC", "EE (VLSI)", "EEE", "Mechanical"],
    icon: Cpu,
    color: "#312E81",
    desc: "Our flagship engineering program, building the next generation of technical leaders through rigorous coursework and hands-on industry experience."
  },
  {
    id: "imtech",
    title: "Integrated M.Tech",
    subtitle: "5-Year Dual Degree",
    tags: ["Biotechnology", "Computer Science & Engineering"],
    icon: FlaskConical,
    color: "#0F766E",
    desc: "An accelerated pathway combining undergraduate and postgraduate studies, designed for students aiming for advanced specialization."
  },
  {
    id: "mtech",
    title: "M.Tech",
    subtitle: "Postgraduate Engineering",
    tags: ["CSE", "ETC", "CSE (AI & ML)", "Data Science", "EE (VLSI)", "EV Technology", "Energy & Env.", "Structural"],
    icon: Cog,
    color: "#EA580C",
    desc: "Advanced engineering programs for professionals and researchers seeking deep specialization and cutting-edge expertise."
  },
  {
    id: "mca",
    title: "MCA",
    subtitle: "Master of Computer Applications",
    tags: ["MCA"],
    icon: BookOpen,
    color: "#D97706",
    desc: "A comprehensive program blending software engineering, data science, and IT management for the digital economy."
  },
  {
    id: "mba",
    title: "MBA",
    subtitle: "Master of Business Administration",
    tags: ["MBA"],
    icon: Briefcase,
    color: "#0F766E",
    desc: "Develop strategic thinking, leadership, and business acumen through case studies, live projects, and industry mentorship."
  },
  {
    id: "diploma",
    title: "Diploma",
    subtitle: "Diploma in Engineering",
    tags: ["Civil", "Electrical", "Mechanical"],
    icon: GraduationCap,
    color: "#312E81",
    desc: "Foundational engineering programs providing practical skills and a direct pathway to lateral entry in B.Tech."
  }
];

const Programs = () => {
  const [activeTab, setActiveTab] = useState("btech");
  const activeProgram = programData.find(p => p.id === activeTab);
  const Icon = activeProgram.icon;

  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
      <FlowingWaves colors={['#1E2D4A', '#1A2640', '#162038']} />

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-block px-3 py-1 rounded bg-white/10 text-[#67E8F9] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            Academics
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Choose your <span className="display-font italic font-normal text-[#67E8F9]">path.</span>
          </h2>
        </motion.div>

        {/* Tab selector — horizontal scrollable pills */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2 hide-scrollbar">
          {programData.map(p => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className="flex-shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap"
              style={{
                backgroundColor: activeTab === p.id ? p.color : 'rgba(255,255,255,0.06)',
                color: activeTab === p.id ? '#fff' : 'rgba(255,255,255,0.5)',
                border: activeTab === p.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Active program detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            {/* Left — large icon + info */}
            <div className="lg:col-span-4">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: activeProgram.color, boxShadow: `0 15px 40px -10px ${activeProgram.color}60` }}>
                <Icon size={32} color="#fff" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-black text-white mb-2">{activeProgram.title}</h3>
              <p className="text-white/40 text-sm font-bold uppercase tracking-[0.15em] mb-5">{activeProgram.subtitle}</p>
              <p className="text-slate-400 text-[15px] leading-relaxed">{activeProgram.desc}</p>
            </div>

            {/* Right — specialization tags cloud */}
            <div className="lg:col-span-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 block mb-5">Available Specializations</span>
              <div className="flex flex-wrap gap-3">
                {activeProgram.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-[14px] font-semibold px-5 py-3 rounded-xl border transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      borderColor: `${activeProgram.color}40`,
                      color: '#fff',
                      backgroundColor: `${activeProgram.color}15`,
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <a href="https://apply-now.tekkzy.com/" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] px-7 py-3.5 rounded-lg transition-all hover:scale-[1.03] text-decoration-none"
                  style={{ backgroundColor: activeProgram.color, color: '#fff', boxShadow: `0 8px 25px -8px ${activeProgram.color}50` }}>
                  Apply for {activeProgram.title} →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </section>
  );
};

export default Programs;
