import { motion } from 'framer-motion';
import { FileText, GraduationCap } from 'lucide-react';
import { SplitDiagonals } from './BackgroundDesigns';

const Exams = () => {
  const exams = [
    {
      icon: FileText,
      title: "JEE Main",
      color: "#312E81",
      tagline: "National Level · Conducted by NTA",
      items: ["1st Year B.Tech", "1st Year Integrated 5 Years M.Tech"],
    },
    {
      icon: GraduationCap,
      title: "OJEE",
      color: "#EA580C",
      tagline: "State Level · Odisha JEE",
      items: ["Lateral Entry B.Tech", "M.Tech", "MCA", "MBA"],
    }
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#F8FAFC] overflow-hidden">
      <SplitDiagonals />

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block px-3 py-1 rounded bg-[#312E81]/10 text-[#312E81] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            Important
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
            Mandatory <span className="display-font italic font-normal text-[#D97706]">examinations.</span>
          </h2>
        </motion.div>

        {/* Two-column open layout with center divider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl">
          {exams.map((exam, idx) => {
            const Icon = exam.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`group py-6 ${idx === 0 ? 'md:pr-16 md:border-r border-slate-200' : 'md:pl-16'}`}
              >
                {/* Tagline */}
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 block mb-4">{exam.tagline}</span>
                
                {/* Icon + Title */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${exam.color}12`, color: exam.color }}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: exam.color }}>{exam.title}</h3>
                </div>

                {/* Programs list */}
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 block mb-4">Mandatory for admission into:</span>
                <div className="space-y-3 ml-1">
                  {exam.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform group-hover/item:scale-150" style={{ backgroundColor: exam.color }} />
                      <span className="text-slate-700 text-[16px] font-semibold group-hover/item:text-slate-900 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exams;
