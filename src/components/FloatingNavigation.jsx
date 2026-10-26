import { Link } from 'react-router-dom'
import { Banknote, Headphones, Smartphone, Users } from 'lucide-react'

export const FloatingNavigation = () => {
  return (
    <nav
      className="floating-navigation is-visible"
      aria-label="Quick access"
    >
      <Link to="/create-account"><Users size={17} /> <span>Open Account</span></Link>
      <Link to="/services/1"><Banknote size={17} /> <span>Apply for Loan</span></Link>
      <a href="https://mmocculonline.com/auth/login" target="_blank" rel="noopener noreferrer">
        <Smartphone size={17} /> <span>Mobile Banking</span>
      </a>
      <Link to="/contact"><Headphones size={17} /> <span>Contact Support</span></Link>
    </nav>
  )
}
