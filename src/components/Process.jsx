import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { StackedChevrons } from './BackgroundDesigns';

const steps = [
  { num: "01", title: "Check Eligibility", text: "Review academic requirements for your program.", color: "#312E81" },
  { num: "02", title: "Entrance Exam", text: "Appear for JEE Main or OJEE.", color: "#0F766E" },
  { num: "03", title: "Merit Evaluation", text: "Your rank and records are evaluated.", color: "#EA580C" },
  { num: "04", title: "Confirmation", text: "Complete documentation and fee payment.", color: "#D97706" },
  { num: "05", title: "Counseling", text: "Get guidance before classes begin.", color: "#312E81" },
];

const Process = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)' }}>
      <StackedChevrons />

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 rounded bg-[#D97706]/10 text-[#D97706] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            Your Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
            Five steps to <span className="display-font italic font-normal text-[#EA580C]">enrollment.</span>
          </h2>
        </motion.div>

        {/* Horizontal stepper — connected dots */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle with number */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl"
                  style={{ backgroundColor: step.color, boxShadow: `0 8px 25px -8px ${step.color}50` }}>
                  <span className="text-white text-lg font-black">{step.num}</span>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"
                    style={{ borderColor: step.color }} />
                </div>

                <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:translate-y-[-2px] transition-transform">{step.title}</h4>
                <p className="text-slate-500 text-[13px] leading-relaxed max-w-[180px]">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
