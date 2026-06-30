import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SubNav from './components/SubNav';
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
import ContactDetails from './components/ContactDetails';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

// Lazy load pages for performance
const LibraryPage = lazy(() => import("./pages/LibraryPage"));
const IQACPage = lazy(() => import("./pages/IQACPage"));
const DVVPage = lazy(() => import("./pages/DVVPage"));
const TridentPoliciesPage = lazy(() => import("./pages/TridentPoliciesPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const StudentClubsPage = lazy(() => import("./pages/StudentClubsPage"));
const CiscoThingQbatorPage = lazy(() => import("./pages/CiscoThingQbatorPage"));
const GrievancePage = lazy(() => import("./pages/GrievancePage"));
const ICCPage = lazy(() => import("./pages/ICCPage"));
const AlumniPage = lazy(() => import("./pages/AlumniPage"));

const AboutPage = lazy(() => import("./pages/AboutPage"));
const NAACPage = lazy(() => import("./pages/NAACPage"));
const NBAPage = lazy(() => import("./pages/NBAPage"));
const NIRFPage = lazy(() => import("./pages/NIRFPage"));
const SIROPage = lazy(() => import("./pages/SIROPage"));
const AICTEDisclosurePage = lazy(() => import("./pages/AICTEDisclosurePage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const InformationBrochurePage = lazy(() => import("./pages/InformationBrochurePage"));
const BPUTAffiliationPage = lazy(() => import("./pages/BPUTAffiliationPage"));
const FinancialAuditsPage = lazy(() => import("./pages/FinancialAuditsPage"));
const AntiRaggingPage = lazy(() => import("./pages/AntiRaggingPage"));

const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const DisclaimerPage = lazy(() => import("./pages/DisclaimerPage"));
const TermsOfUsePage = lazy(() => import("./pages/TermsOfUsePage"));

function Home() {
  return (
    <>
      <SubNav />
      <main style={{ overflowX: 'clip' }}>
        <div id="hero"><Hero /></div>
        <AdmissionLinks />

        {/* AdmissionLinks (#0F172A) → Overview (#F8FAFC) */}
        <SectionDivider type="wave" topColor="#0F172A" bottomColor="#F8FAFC" height={70} />
        <div id="overview"><Overview /></div>

        {/* Overview (#F8FAFC) → Programs (dark #0F172A) */}
        <SectionDivider type="curve" topColor="#F8FAFC" bottomColor="#0F172A" height={80} />
        <div id="programs"><Programs /></div>

        {/* Programs (#1E293B) → Eligibility (#F1F5F9) */}
        <SectionDivider type="tilt" topColor="#1E293B" bottomColor="#F1F5F9" height={70} />
        <div id="eligibility"><Eligibility /></div>

        {/* Eligibility (#F1F5F9) → Scholarships (indigo #312E81) */}
        <SectionDivider type="wave" topColor="#F1F5F9" bottomColor="#312E81" height={80} />
        <div id="scholarships"><Scholarships /></div>

        {/* Scholarships (#1E1B4B) → Placements teal (#0F766E) */}
        <SectionDivider type="diagonal" topColor="#1E1B4B" bottomColor="#0F766E" height={60} />
        <div id="placements"><PlacementHighlights /></div>

        {/* Placements table (#F8FAFC) → Process (#F8FAFC/gradient) */}
        <SectionDivider type="curve" topColor="#F8FAFC" bottomColor="#F8FAFC" height={50} />
        <div id="process"><Process /></div>

        {/* Process (#E2E8F0) → Exams (#F8FAFC) */}
        <SectionDivider type="wave" topColor="#E2E8F0" bottomColor="#F8FAFC" height={60} />
        <div id="exams"><Exams /></div>

        {/* Exams (#F8FAFC) → Contact Details (#0F172A) */}
        <SectionDivider type="curve" topColor="#F8FAFC" bottomColor="#0F172A" height={50} />
        <div id="contact"><ContactDetails /></div>
      </main>
    </>
  );
}

function SectionFallback() {
  return <div style={{ minHeight: "200px" }} />;
}

function App() {
  return (
    <div className="relative min-h-screen font-sans" style={{ overflowX: 'clip' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

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
        
        /* Custom Scrollbar for SubNav */
        .custom-scrollbar-mini::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar-mini::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-mini::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar-mini::-webkit-scrollbar-thumb:hover { background: var(--indigo); }
      `}</style>

      <Header />
      <div className="flex-grow">
        <Suspense fallback={<SectionFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Footer Pages — Academics & Student Life */}
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/iqac" element={<IQACPage />} />
            <Route path="/dvv" element={<DVVPage />} />
            <Route path="/trident-policies" element={<TridentPoliciesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/student-clubs" element={<StudentClubsPage />} />
            <Route path="/cisco-thingqbator" element={<CiscoThingQbatorPage />} />
            <Route path="/grievance" element={<GrievancePage />} />
            <Route path="/icc" element={<ICCPage />} />

            {/* Footer Pages — About the Institution */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/naac" element={<NAACPage />} />
            <Route path="/nba" element={<NBAPage />} />
            <Route path="/nirf" element={<NIRFPage />} />
            <Route path="/siro" element={<SIROPage />} />
            <Route path="/aicte-disclosure" element={<AICTEDisclosurePage />} />
            <Route path="/bput-affiliation" element={<BPUTAffiliationPage />} />
            <Route path="/financial-audits" element={<FinancialAuditsPage />} />
            <Route path="/anti-ragging" element={<AntiRaggingPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/information-brochure" element={<InformationBrochurePage />} />

            {/* Footer Pages — Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
