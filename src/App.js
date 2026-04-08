import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BranchesPage } from './pages/BranchesPage';
import { CreateAccountPage } from './pages/CreateAccountPage';  
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LatestNewsPage } from './pages/LatestNewsPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
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
      </Routes>
    </Router>
  )
}
