import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const CONTACTS = [
  {
    program: "Diploma",
    people: [
      { name: "Prof. A.K. Sahoo", phone: "+91-9437800855" }
    ]
  },
  {
    program: "B. Tech",
    people: [
      { name: "Dr. Ch. Biswaranjan Nanda", phone: "9861191195" }
    ]
  },
  {
    program: "B.Tech (Lateral Entry)",
    people: [
      { name: "Sanjaya Ku Behera", subtitle: "HoD Civil", phone: "9861447306" }
    ]
  },
  {
    program: "M. Tech",
    people: [
      { name: "Mr. Sibananda Behera", phone: "9439854324" },
      { name: "Prof. P.K. Sahoo", phone: "6372486351" },
      { name: "Prof. Millee Panigrahi", phone: "9861384420" }
    ]
  },
  {
    program: "MCA",
    people: [
      { name: "Prof. Kaustuva Ch. Dev", phone: "9437229863 / 9861191195" }
    ]
  },
  {
    program: "MBA",
    people: [
      { name: "Tushar Ranjan Panda", phone: "9437603536 / 9439513539" }
    ]
  }
];

export default function ContactDetails() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="contact-details" className="py-24 bg-[#0F172A] relative text-white">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-14">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Admission Helpdesk
          </h2>
          <p className="text-slate-400 max-w-xl text-lg">
            Select a program below to instantly connect with our course coordinators.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Programs (Tabs) */}
          <div className="lg:w-1/3 flex flex-col gap-2 relative">
            {/* Subtle line indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-800 rounded-full" />
            
            {CONTACTS.map((contact, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative text-left pl-8 pr-6 py-4 rounded-r-xl font-bold text-lg transition-all duration-300 flex items-center justify-between group ${
                  activeTab === idx 
                    ? 'text-white bg-slate-800/50' 
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/20'
                }`}
              >
                {/* Active Line indicator */}
                {activeTab === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                )}
                {contact.program}
                <ArrowRight 
                  size={18} 
                  className={`transition-all duration-300 ${activeTab === idx ? 'opacity-100 translate-x-0 text-indigo-400' : 'opacity-0 -translate-x-4 group-hover:opacity-50'}`} 
                />
              </button>
            ))}
          </div>
          
          {/* Right Column: Contact Details (Active Tab Content) */}
          <div className="lg:w-2/3 flex items-start pt-2">
            <div className="w-full" key={activeTab}>
              <h3 className="text-2xl font-bold text-indigo-400 mb-10 inline-block animate-fade-in-up" style={{ animationDuration: '0.4s' }}>
                {CONTACTS[activeTab].program} Contacts
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {CONTACTS[activeTab].people.map((person, pIdx) => (
                  <div key={pIdx} className="flex flex-col animate-fade-in-up" style={{ animationDelay: `${(pIdx + 1) * 75}ms`, animationFillMode: 'both', animationDuration: '0.4s' }}>
                    <span className="text-2xl font-bold text-white mb-1">
                      {person.name}
                    </span>
                    {person.subtitle && (
                      <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
                        {person.subtitle}
                      </span>
                    )}
                    
                    <a 
                      href={`tel:${person.phone.replace(/[^0-9+]/g, '')}`} 
                      className={`inline-flex items-center gap-3 mt-1 text-lg font-medium text-slate-300 hover:text-white transition-colors group/link w-fit text-decoration-none ${!person.subtitle && 'mt-3'}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover/link:bg-indigo-600 group-hover/link:shadow-[0_0_20px_-5px_rgba(79,70,229,0.6)] transition-all duration-300">
                        <Phone size={16} className="text-slate-400 group-hover/link:text-white" />
                      </div>
                      {person.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp ease-out forwards;
        }
      `}</style>
    </section>
  );
}
