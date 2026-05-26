import React from 'react';
import { ArrowRight } from 'lucide-react';

const links = [
  { text: "Admission Calendar 2026-27", href: "#" },
  { text: "Admission Brochure", href: "#" },
  { text: "Registration for Admission 2026", href: "#" },
  { text: "TAT 2025 Brochure", href: "#" },
  { text: "Registration for TAT 2025", href: "#" },
];

const AdmissionLinks = () => {
  return (
    <section className="relative bg-[#0F172A] py-4 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar py-1">
          {links.map((link, idx) => (
            <a key={idx} href={link.href}
              className="flex items-center gap-2 text-[11px] font-bold text-white/60 uppercase tracking-[0.12em] whitespace-nowrap px-5 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300 text-decoration-none flex-shrink-0 group border border-transparent hover:border-white/10">
              {link.text}
              <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
      <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </section>
  );
};

export default AdmissionLinks;
