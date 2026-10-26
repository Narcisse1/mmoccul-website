import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BranchesPage } from './pages/BranchesPage';
import { BranchDetailPage } from './pages/BranchDetailPage';
import { CreateAccountPage } from './pages/CreateAccountPage';  
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LatestNewsPage } from './pages/LatestNewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';

import CardsPage from './pages/CardsPage';
import ScrollToTop from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingNavigation } from './components/FloatingNavigation';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './sections/Header';
import { Footer } from './sections/Footer';

function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative overflow-hidden bg-gradient-to-br from-[#00235f] via-[#002e8a] to-[#174c9f] px-5 py-20 text-center text-white sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/15 shadow-[0_0_0_32px_rgba(255,255,255,0.035),0_0_0_68px_rgba(255,255,255,0.025)]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4a735]/40 bg-[#d4a735]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#f1d98e]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#d4a735]" />
            MMOCCUL Careers
          </span>
          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-6xl">Careers</h1>
          <div className="mx-auto max-w-xl rounded-2xl border border-white/15 bg-white/10 px-6 py-7 shadow-xl backdrop-blur-sm sm:px-10">
            <p className="text-base leading-8 text-white/85 sm:text-lg">Careers Page - Coming Soon</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollProgress />
        <FloatingNavigation />
        <ScrollToTop />
        <div className="site-page-system">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/branches" element={<BranchesPage />} />
            <Route path="/branches/:branchSlug" element={<BranchDetailPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/latest-news" element={<LatestNewsPage />} />
            <Route path="/latest-news/:newsId" element={<NewsDetailPage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  )
}
