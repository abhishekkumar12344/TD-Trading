import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP */}
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="brand-logo">
            <span className="logo-circle">P</span>
            <h2>COBRA TRADING</h2>
          </div>

          <p className="brand-desc">
            Cobra Trading  provides professional market analysis
            and trading guidance focused on discipline, transparency,
            and risk management.
          </p>

          <a
            href="https://wa.me/918337032260"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/payment">Plans & Payment</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <span>Intraday Analysis</span>
          <span>Swing Trading Guidance</span>
          <span>Risk Management Support</span>
          <span>Expert WhatsApp Support</span>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📧 support@tradexb.in</p>
          <p>📍 India (Online Service)</p>
          <p>🕒 Mon – Fri | 9:00 AM – 6:00 PM</p>
        </div>

      </div>

      {/* DISCLAIMER */}
      <div className="footer-disclaimer">
        <p>
          ⚠ Trading involves market risk. We do not provide guaranteed profit
          services. All guidance is for educational and analytical purposes only.
        </p>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Cobra Trading · TRADEXB  
        <span> | All Rights Reserved</span>
      </div>

    </footer>
  );
}
