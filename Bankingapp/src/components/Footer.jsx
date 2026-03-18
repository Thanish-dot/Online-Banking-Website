import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>About Nexus Bank</h4>
          <p>Your trusted partner in financial services, committed to providing secure and innovative banking solutions.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Nexus Bank. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;