import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP FOOTER */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <div className="mark">P</div>
            <span>TREADXB</span>
          </div>
          <p>
            TREADXB is a modern trading platform providing advanced
            trading tools, real-time market data, and secure financial
            solutions for traders of all levels.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/trading">Trading</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/trading">Live Trading</Link>
          <Link to="/payment">Payments</Link>
          <Link to="/chat">Support Chat</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4>Support</h4>
          <p>Email: support@treadxb.com</p>
          <p>Phone: +91 9XXXXXXXXX</p>
          <p>24×7 Trading Support</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} TREADXB. All rights reserved.
      </div>

    </footer>
  );
}
