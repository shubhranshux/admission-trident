import Header from './components/Header';
import Hero from './components/Hero';
import AdmissionLinks from './components/AdmissionLinks';
import Overview from './components/Overview';
import Programs from './components/Programs';
import ProgramsOffered from './components/ProgramsOffered';
import Eligibility from './components/Eligibility';
import Scholarships from './components/Scholarships';
import PlacementHighlights from './components/PlacementHighlights';
import Process from './components/Process';
import Exams from './components/Exams';
import ResourcesSection from './components/ResourcesSection';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <div className="relative min-h-screen font-sans" style={{ overflowX: 'clip' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

        :root {
          --indigo: #312E81;
          --teal: #0F766E;
          --coral: #EA580C;
          --amber: #D97706;
          --slate-50: #F8FAFC;
          --slate-100: #F1F5F9;
          --slate-200: #E2E8F0;
          --slate-800: #1E293B;
          --slate-900: #0F172A;
        }

        html { scroll-behavior: smooth; }
        body {
          font-family: 'Outfit', sans-serif;
          background-color: var(--slate-50);
          color: #334155;
          font-weight: 400;
          font-size: 17px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .display-font { font-family: 'Playfair Display', Georgia, serif; }
        h1, h2, h3 { font-family: 'Outfit', sans-serif; font-weight: 800; letter-spacing: -0.03em; }

        .nav-link { font-weight: 700; font-size: 0.875rem; transition: color 0.3s ease; padding-bottom: 4px; position: relative; text-decoration: none; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--indigo); transition: width 0.3s ease; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link.active, .nav-link:hover { color: var(--indigo) !important; }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--slate-100); }
        ::-webkit-scrollbar-thumb { background: #94A3B8; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--indigo); }
      `}</style>

      <Header />
      <main style={{ overflowX: 'clip' }}>
        <Hero />
        <AdmissionLinks />

        {/* AdmissionLinks (#0F172A) → Overview (#F8FAFC) */}
        <SectionDivider type="wave" topColor="#0F172A" bottomColor="#F8FAFC" height={70} />
        <Overview />

        {/* Overview (#F8FAFC) → Programs (dark #0F172A) */}
        <SectionDivider type="curve" topColor="#F8FAFC" bottomColor="#0F172A" height={80} />
        <Programs />

        {/* Programs (#1E293B) → Eligibility (#F1F5F9) */}
        <SectionDivider type="tilt" topColor="#1E293B" bottomColor="#F1F5F9" height={70} />
        <Eligibility />

        {/* Eligibility (#F1F5F9) → Scholarships (indigo #312E81) */}
        <SectionDivider type="wave" topColor="#F1F5F9" bottomColor="#312E81" height={80} />
        <Scholarships />

        {/* Scholarships (#1E1B4B) → Placements teal (#0F766E) */}
        <SectionDivider type="diagonal" topColor="#1E1B4B" bottomColor="#0F766E" height={60} />
        <PlacementHighlights />

        {/* Placements table (#F8FAFC) → Process (#F8FAFC/gradient) */}
        <SectionDivider type="curve" topColor="#F8FAFC" bottomColor="#F8FAFC" height={50} />
        <Process />

        {/* Process (#E2E8F0) → Exams (#F8FAFC) */}
        <SectionDivider type="wave" topColor="#E2E8F0" bottomColor="#F8FAFC" height={60} />
        <Exams />


      </main>
      <Footer />
    </div>
  );
}

export default App;
