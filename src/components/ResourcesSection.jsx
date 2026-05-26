import { motion } from 'framer-motion';
import { Download, Send, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section id="downloads" className="relative py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)' }}>
      {/* Accent glow */}
      <div className="absolute top-0 left-[30%] w-[500px] h-[500px] rounded-full bg-[#312E81]/20 blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded bg-white/10 text-[#67E8F9] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            Resources & Contact
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Get started <span className="display-font italic font-normal text-[#D4B872]">today.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Downloads — left column */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 flex flex-col gap-5">
            {[
              { title: "Admission Brochure 2024", size: "PDF · 2.4 MB", color: "#0F766E" },
              { title: "Admission Guidelines", size: "PDF · 1.1 MB", color: "#312E81" },
              { title: "Fee Structure", size: "PDF · 800 KB", color: "#D97706" },
            ].map((item, idx) => (
              <a key={idx} href="#" className="group flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 text-decoration-none">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}25`, color: item.color }}>
                  <Download size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-bold text-[15px] mb-0.5">{item.title}</h4>
                  <span className="text-white/30 text-[11px] font-semibold uppercase tracking-wider">{item.size}</span>
                </div>
                <ArrowRight size={16} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
              </a>
            ))}

            {/* Quick contacts */}
            <div className="mt-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 block mb-4">Quick Contact</span>
              <div className="space-y-3">
                {[
                  { icon: Phone, text: "+91 98611 91195", href: "tel:+919861191195" },
                  { icon: Mail, text: "info@trident.ac.in", href: "mailto:info@trident.ac.in" },
                  { icon: MapPin, text: "Chandaka, Bhubaneswar", href: "#" },
                ].map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <a key={i} href={c.href} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm text-decoration-none">
                      <Icon size={14} /> {c.text}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Inquiry form — right column */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(49,46,129,0.4) 0%, rgba(15,118,110,0.3) 100%)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}>
              
              <h3 className="text-3xl font-black text-white mb-2">Admission Inquiry</h3>
              <p className="text-white/40 text-[14px] mb-8">Fill out the form for immediate assistance from our admissions team.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 focus:border-[#67E8F9] outline-none transition-all text-[14px]" required />
                  <input type="tel" placeholder="Mobile *" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 focus:border-[#67E8F9] outline-none transition-all text-[14px]" required />
                </div>
                <input type="email" placeholder="Email Address *" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 focus:border-[#67E8F9] outline-none transition-all text-[14px]" required />
                <select className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white/50 focus:border-[#67E8F9] outline-none transition-all text-[14px] appearance-none">
                  <option value="">Select Program</option>
                  <option value="btech">B.Tech</option>
                  <option value="mtech">M.Tech</option>
                  <option value="mca">MCA</option>
                  <option value="mba">MBA</option>
                </select>
                <textarea placeholder="Your query (optional)" rows="3" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 focus:border-[#67E8F9] outline-none transition-all text-[14px]"></textarea>
                <button type="submit" className="w-full py-4 rounded-xl font-bold text-[13px] uppercase tracking-[0.15em] flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:shadow-xl text-decoration-none"
                  style={{ background: 'linear-gradient(135deg, #0F766E 0%, #065F46 100%)', color: '#fff', boxShadow: '0 10px 30px -8px rgba(15,118,110,0.5)' }}>
                  Submit Inquiry <Send size={16} />
                </button>
              </form>

              {/* Admission officers */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Mr. Tushar R. Panda", role: "Head of Admissions" },
                  { name: "Mr. Rudra P. Mohanty", role: "Admissions (Jharkhand)" }
                ].map((agent, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[12px] font-bold text-white" style={{ backgroundColor: i === 0 ? '#312E81' : '#0F766E' }}>
                      {agent.name.charAt(0)}
                    </div>
                    <div>
                      <span className="block text-[12px] font-bold text-white">{agent.name}</span>
                      <span className="text-[10px] text-white/30 uppercase tracking-wider">{agent.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
