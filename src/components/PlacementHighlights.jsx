import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TopoContours, SubtleBands } from './BackgroundDesigns';

function useCountUp(target, duration = 2200) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const start = Date.now();
        const timer = setInterval(() => {
          const p = Math.min((Date.now() - start) / duration, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
          if (p >= 1) { setCount(target); clearInterval(timer); }
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

const placementData = [
  { year: "2023-24", placed: "450+", companies: "120+", highest: "18 LPA", average: "5.5 LPA" },
  { year: "2022-23", placed: "500+", companies: "150+", highest: "22 LPA", average: "6.0 LPA" },
  { year: "2021-22", placed: "420+", companies: "110+", highest: "15 LPA", average: "4.8 LPA" },
];

const PlacementHighlights = () => {
  const stats = [
    { val: 5000, suffix: "+", label: "Placed", color: "#0F766E" },
    { val: 120, suffix: "+", label: "Companies", color: "#312E81" },
    { val: 94, suffix: "%", label: "Rate", color: "#EA580C" },
    { val: 22, suffix: " LPA", label: "Highest", color: "#D97706" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* ═══ Full-width stats strip ═══ */}
      <div className="relative py-20 md:py-24" style={{ background: 'linear-gradient(135deg, #0F766E 0%, #065F46 100%)' }}>
        <TopoContours />

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Placement <span className="display-font italic font-normal text-emerald-200">highlights.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, idx) => {
              const { count, ref } = useCountUp(s.val);
              return (
                <motion.div key={idx} ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-5xl md:text-7xl font-black text-white leading-none mb-3 tracking-tight group-hover:scale-110 transition-transform origin-bottom">
                    {count.toLocaleString()}<span className="text-emerald-200">{s.suffix}</span>
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ Data table ═══ */}
      <div className="py-20 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <SubtleBands />
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="inline-block px-3 py-1 rounded bg-[#0F766E]/10 text-[#0F766E] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              B.Tech. Placements
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">Year-wise performance</h3>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr>
                  {["Year", "Students Placed", "Companies", "Highest Package", "Average Package"].map((h, i) => (
                    <th key={i} className="py-4 px-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b-2 border-slate-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {placementData.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                    <td className="py-5 px-6 text-lg font-black text-slate-900">{row.year}</td>
                    <td className="py-5 px-6 text-slate-600 font-semibold">{row.placed}</td>
                    <td className="py-5 px-6 text-slate-600 font-semibold">{row.companies}</td>
                    <td className="py-5 px-6 font-bold" style={{ color: '#D97706' }}>{row.highest}</td>
                    <td className="py-5 px-6 font-bold" style={{ color: '#0F766E' }}>{row.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlacementHighlights;
