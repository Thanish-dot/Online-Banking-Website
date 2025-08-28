import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUniversity, FaUser, FaSearch, FaBars } from 'react-icons/fa';
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="main-header">
      <div className="top-bar">
        <div className="container">
          <Link to="/support">Customer Care</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/services">Services</Link>
        </div>
      </div>
      
      <div className="middle-bar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <FaUniversity />
              <span>Nexus Bank</span>
            </Link>
          </div>

          {/* Hamburger icon for mobile */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <FaBars size={20} />
          </div>

          <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
            <NavLink to="/">Personal</NavLink>
            <NavLink to="/upi-payment">UPI Payment</NavLink>
            <NavLink to="/investments">Investments</NavLink>
            <NavLink to="/loans">Loans</NavLink>
            <NavLink to="/cards">Cards</NavLink>
          </nav>
          
          <div className="search-and-auth">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button type="button">
                <FaSearch />
              </button>
            </div>
            {user ? (
              <button onClick={logout} className="btn btn-accent login-btn">
                <FaUser style={{ marginRight: '5px' }} /> Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-accent login-btn">
                <FaUser style={{ marginRight: '5px' }} /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
