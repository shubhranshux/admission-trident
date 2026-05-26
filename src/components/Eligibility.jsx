import { motion } from 'framer-motion';
import { ConcentricArcs } from './BackgroundDesigns';

const sections = [
  {
    num: "01",
    title: "B.Tech & Integrated M.Tech",
    color: "#312E81",
    items: [
      "Passed 10+2 Science with Physics and Mathematics as compulsory subjects.",
      "Chemistry/Biotechnology/Biology/Technical Vocational as optional.",
      "*For Biotechnology: Mathematics is optional; Biology/Biotechnology required.",
      "Minimum 45% marks (40% for reserved category).",
      "Must appear for JEE-Main conducted by CBSE."
    ]
  },
  {
    num: "02",
    title: "Lateral Entry (2nd Year)",
    color: "#EA580C",
    items: [
      "Diploma Holders: 3-year diploma in Engineering/Technology with min 45% (40% SC/ST).",
      "B.Sc / +3 Sc Students: 3-year Bachelor's in Science with min 45%, XII with Maths.",
      "Must appear for O-JEE."
    ]
  },
  {
    num: "03",
    title: "PG Programs (M.Tech, MCA, MBA)",
    color: "#0F766E",
    items: [
      "M.Tech: B.Tech/M.Sc in relevant field with min 50% (45% for SC/ST).",
      "MCA/MBA: Bachelor's Degree (min 3 years) with min 50% (45% SC/ST).",
      "MCA requires Mathematics at 10+2 or Graduate level.",
      "No age limit for MCA or MBA admission.",
      "Must appear for O-JEE."
    ]
  }
];

const Eligibility = () => {
  return (
    <section className="relative py-28 md:py-36 bg-[#F1F5F9] overflow-hidden">
      <ConcentricArcs />

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-block px-3 py-1 rounded bg-[#EA580C]/10 text-[#EA580C] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            Requirements
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
            Eligibility <span className="display-font italic font-normal text-[#0F766E]">criteria.</span>
          </h2>
        </motion.div>

        {/* Open stacked layout — no cards, just content rows with left color accents */}
        <div className="max-w-4xl">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className={`relative pl-8 md:pl-12 ${idx > 0 ? 'mt-16 pt-16 border-t border-slate-200' : ''}`}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 w-1 h-full rounded-full" style={{ backgroundColor: `${section.color}30` }}>
                <div className="w-full rounded-full" style={{ backgroundColor: section.color, height: '40%' }} />
              </div>

              {/* Number + Title row */}
              <div className="flex items-baseline gap-5 mb-6">
                <span className="text-7xl font-black leading-none opacity-[0.08]" style={{ color: section.color }}>{section.num}</span>
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight -ml-16 md:-ml-20 relative z-10">{section.title}</h4>
              </div>

              {/* Requirement items */}
              <div className="space-y-3 ml-0 md:ml-2">
                {section.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-transform group-hover:scale-150" style={{ backgroundColor: section.color }} />
                    <p className="text-slate-600 text-[15px] leading-relaxed group-hover:text-slate-800 transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
