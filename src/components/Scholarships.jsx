import { motion } from 'framer-motion';
import { Award, HeartHandshake, Trophy, Sparkles } from 'lucide-react';
import { GeoTessellation } from './BackgroundDesigns';

const scholarships = [
  { icon: Trophy, title: "Merit Scholarships", desc: "Awarded to students with outstanding academic performance in qualifying examinations.", color: "#D97706" },
  { icon: HeartHandshake, title: "Need-Based Aid", desc: "Support for students from economically weaker sections to pursue their dreams without burden.", color: "#0F766E" },
  { icon: Award, title: "Special Grants", desc: "Recognizing outstanding achievements in sports, arts, and extracurricular activities.", color: "#312E81" },
];

const Scholarships = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, #312E81 0%, #1E1B4B 100%)' }}>
      <GeoTessellation />
      
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#D4B872] text-[11px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm border border-white/10">
            <Sparkles size={12} /> Financial Support
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-4">
            Scholarship <span className="display-font italic font-normal text-[#D4B872]">support.</span>
          </h2>
          <p className="text-indigo-200/50 max-w-lg mx-auto text-lg">
            Financial constraints should never be a barrier to quality education.
          </p>
        </motion.div>

        {/* Open three-column layout with dividers — no cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
          {scholarships.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === scholarships.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`flex flex-col items-center text-center px-8 py-10 group cursor-default ${!isLast ? 'md:border-r border-white/10 border-b md:border-b-0' : ''}`}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${item.color}25`, color: item.color }}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-indigo-200/40 text-[15px] leading-relaxed max-w-[260px] group-hover:text-indigo-200/60 transition-colors">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Scholarships;
