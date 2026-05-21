import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BranchesPage } from './pages/BranchesPage';
import { CreateAccountPage } from './pages/CreateAccountPage';  
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LatestNewsPage } from './pages/LatestNewsPage';
import { SearchPage } from './pages/SearchPage';
import CardsPage from './pages/CardsPage';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/latest-news" element={<LatestNewsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/careers" element={<div>Careers Page - Coming Soon</div>} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}
