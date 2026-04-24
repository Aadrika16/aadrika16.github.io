
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          GT<span>APEX </span> MARKETING
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/contact" className="nav-btn">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header