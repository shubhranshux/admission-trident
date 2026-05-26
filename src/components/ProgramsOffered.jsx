import { motion } from 'framer-motion';

const programs = [
  {
    title: "B.TECH.",
    items: ["CSE", "ECE", "EEE", "EIE", "VLSI (D & T)"],
    type: "blue"
  },
  {
    title: "M.TECH.",
    items: ["CSE", "ECE", "EEE (PE & ES)"],
    type: "red"
  },
  {
    title: "M.Sc.",
    items: ["DATA SCIENCE", "EE & IIoT", "VLSI", "MOLECULAR MEDICINE", "DHSM"],
    type: "blue"
  },
  {
    title: "MCA",
    items: ["MCA", "Integrated BCA + MCA"],
    type: "red"
  }
];

const ProgramsOffered = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 relative max-w-7xl">
        {/* Title Area */}
        <div className="relative mb-16 inline-block ml-8">
          {/* Light Grey Triangle behind text */}
          <div 
            className="absolute -top-6 -left-8 w-20 h-20 bg-gray-200 -z-10" 
            style={{ clipPath: 'polygon(100% 0, 0 0, 0 100%)', transform: 'rotate(-25deg)' }} 
          />
          <h2 className="text-5xl font-extrabold text-[#333333] leading-none relative z-10 font-sans tracking-tight mb-2">
            Programs
          </h2>
          <h3 className="text-4xl font-medium text-[#444444] ml-10 relative z-10 font-sans tracking-tight">
            Offered
          </h3>
        </div>

        {/* Carousel Area */}
        <div className="flex items-center justify-between gap-2 md:gap-6">
          <button className="w-10 h-10 rounded-full bg-gray-500 hover:bg-gray-700 text-white flex items-center justify-center shrink-0 transition-colors shadow-lg z-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="flex flex-1 gap-2 md:gap-4 overflow-x-auto pb-8 pt-4 snap-x hide-scrollbar">
            {programs.map((prog, idx) => {
              const isBlue = prog.type === 'blue';
              // Alternating slopes
              const clipPath = isBlue 
                ? 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)'
                : 'polygon(0 0, 100% 6%, 100% 100%, 0 94%)';
              
              const bgColor = isBlue ? 'bg-[#1b438b]' : 'bg-[#9a2b2b]';

              return (
                <div key={idx} className="min-w-[260px] md:min-w-[280px] lg:flex-1 snap-center relative group min-h-[380px]">
                  {/* Outer Wrapper to handle corner accents behind the clipPath */}
                  <div className="absolute inset-0 z-0">
                    {/* Yellow accents on bottom left for Red cards */}
                    {!isBlue && (
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#eab308]" />
                    )}
                    {/* Red accents on top left for Blue cards (e.g. Card 3) */}
                    {isBlue && idx === 2 && (
                      <div className="absolute top-0 left-0 w-16 h-16 bg-[#9a2b2b]" />
                    )}
                  </div>

                  <div 
                    className={`w-full h-full ${bgColor} p-8 md:p-10 flex flex-col items-center justify-start relative z-10`}
                    style={{ clipPath }}
                  >
                    {/* Corner Accents inside clipPath */}
                    {isBlue && idx === 0 && (
                       <div className="absolute top-0 right-0 w-12 h-12 bg-[#9a2b2b]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                    )}

                    <h4 className="text-3xl font-bold text-white mb-10 text-center font-sans tracking-wide mt-4">
                      {prog.title}
                    </h4>
                    <ul className="text-white space-y-4 font-semibold tracking-wide text-sm self-start pl-4 md:pl-8">
                      {prog.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="w-10 h-10 rounded-full bg-gray-500 hover:bg-gray-700 text-white flex items-center justify-center shrink-0 transition-colors shadow-lg z-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProgramsOffered;
