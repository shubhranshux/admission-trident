import { motion } from 'framer-motion';
import { DiamondFolds } from './BackgroundDesigns';

const Overview = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
      <DiamondFolds />

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left — Large pull quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="inline-block px-3 py-1 rounded bg-[#312E81]/10 text-[#312E81] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              Welcome
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.02] tracking-tight mb-8">
              Where ambition
              <span className="block display-font italic font-normal text-[#0F766E]"> takes shape.</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0F766E] to-[#312E81] rounded-full mb-8" />

            {/* Inline stats with dividers — no cards */}
            <div className="flex items-center gap-6 md:gap-8 mb-10 flex-wrap">
              {[
                { num: "20+", label: "Years", color: "#EA580C" },
                { num: "6", label: "NBA Programmes", color: "#312E81" },
                { num: "NAAC", label: "Accredited", color: "#0F766E" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`group cursor-default ${i > 0 ? 'pl-6 md:pl-8 border-l-2 border-slate-200' : ''}`}
                >
                  <div className="text-3xl font-black group-hover:scale-110 transition-transform origin-left" style={{ color: s.color }}>{s.num}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Flowing text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 lg:pt-8"
          >
            <p className="text-slate-500 text-lg leading-[1.9] mb-8">
              We are excited to guide you through your application at Trident Academy of Technology — where we foster innovation, leadership, and uncompromised academic rigor.
            </p>
            <p className="text-slate-500 text-[15px] leading-[1.9] mb-10">
              Trident Academy of Technology offers various undergraduate and postgraduate programs in Engineering, Management, and Computer Applications. Admission to Undergraduate Programs (B.Tech.) is based on the rank secured in JEE MAIN/OJEE, while admission to Postgraduate Programs is based on the rank secured in GATE/OJEE PGAT/CMAT/MAT/XAT/CAT and/or the percentage secured in the qualifying examination, as per the norms prescribed by the Government and affiliating authorities.
            </p>

            {/* Key points as inline content, no boxes */}
            <div className="space-y-4 pt-8 border-t border-slate-200">
              {[
                { label: "Programs", value: "B.Tech · M.Tech · MCA · MBA · Diploma", color: "#312E81" },
                { label: "Admission Basis", value: "JEE Main / OJEE / GATE / CMAT / MAT / XAT / CAT", color: "#0F766E" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: item.color }} />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 block mb-1">{item.label}</span>
                    <p className="text-slate-700 text-[16px] font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
