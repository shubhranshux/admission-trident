import { useState, useEffect } from "react";
import { Users, Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NAV_LINKS } from "../data/constants";
import logo from "../assets/logo.png";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[1050]">
      {/* 1. UTILITY BAR */}
      <div className={cn(
        "hidden lg:block bg-[#253386] border-b border-white/10 transition-all duration-500 overflow-hidden",
        scrolled ? "max-h-0 py-0 opacity-0" : "max-h-20 py-2.5 opacity-100"
      )}>
        <div className="max-w-7xl mx-auto px-6 xl:px-12 flex justify-between items-center text-[11px] font-semibold text-white/80 tracking-widest uppercase">
          <span>
            Affiliated to BPUT <span className="mx-2 text-brand-yellow">|</span> NAAC 'A' Accredited
          </span>
          <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Users size={12} />
            Alumni
          </a>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className={cn("bg-white transition-all duration-500", scrolled ? "py-3 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.12)]" : "py-5")}>
        <div className="mx-auto px-6 xl:px-12 flex items-center justify-between">
          
          {/* Logo Lockup */}
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3.5 group cursor-pointer">
            <img src={logo} alt="TAT Logo" className="w-[52px] h-[52px] object-contain flex-shrink-0 drop-shadow-sm" />
            <div className="hidden sm:flex flex-col justify-center">
              <div className="serif text-[24px] font-black text-[#3E3A36] leading-none tracking-wider uppercase">Trident</div>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#1B4D8E] to-transparent my-1"></div>
              <div className="text-[10px] font-semibold text-[#1B4D8E] tracking-[0.22em] uppercase leading-none">Academy of Technology</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map(item => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={cn(
                      "text-sm font-extrabold uppercase tracking-[0.14em] py-1 transition-all whitespace-nowrap",
                      item.label === 'Admissions' 
                        ? "text-[#253386] border-b-2 border-[#253386]" 
                        : "text-[#3E3A36] hover:text-[#253386]"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Elements */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="https://apply-now.tekkzy.com/" className="bg-[#E63946] hover:bg-[#c92f3a] text-white text-[12px] font-bold px-7 py-3 rounded uppercase transition-colors whitespace-nowrap shadow-sm">
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-[#253386] p-2 bg-soft rounded-lg hover:bg-primary/10 transition-colors active:scale-95 z-50 relative" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div 
          className={cn(
            "lg:hidden absolute top-full left-0 w-full bg-white shadow-[0_30px_60px_-15px_rgba(15,23,42,0.2)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top overflow-hidden border-t border-primary/10",
            mobileOpen ? "max-h-[85vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
          )}
        >
          <div className="px-6 flex flex-col h-full overflow-y-auto pb-4">
            {NAV_LINKS.map((item, i) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block py-3.5 text-[15px] font-extrabold text-[#3E3A36] uppercase tracking-[0.14em] hover:text-[#253386] hover:bg-soft/50 rounded-lg px-3 transition-all duration-500 transform",
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                )}
                style={{ 
                  transitionDelay: `${mobileOpen ? i * 40 + 100 : 0}ms`, 
                  borderBottom: i !== NAV_LINKS.length - 1 ? "1px solid rgba(27,77,142,0.1)" : "none" 
                }}
              >
                {item.label}
              </a>
            ))}
            <div 
              className={cn(
                "pt-8 px-2 transition-all duration-700 transform",
                mobileOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              )} 
              style={{ transitionDelay: `${mobileOpen ? NAV_LINKS.length * 40 + 150 : 0}ms` }}
            >
              <a href="https://apply-now.tekkzy.com/" className="bg-[#E63946] block text-center text-[13px] tracking-widest font-extrabold px-6 py-4 rounded-xl text-white shadow-[0_10px_30px_-10px_rgba(230,57,70,0.5)]">
                START APPLICATION
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

