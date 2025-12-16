import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">

        {/* LOGO */}
        <Link to="/" className="logo-area" onClick={() => setOpen(false)}>
          <img src="/logo/logo.png " alt="Cobra Trading Logo" />
          <span>COBRA TRADING</span>
        </Link>

        {/* HAMBURGER BUTTON */}
        <button
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV LINKS */}
        <nav className={`nav-menu ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/trading" onClick={() => setOpen(false)}>Trading</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/payment" onClick={() => setOpen(false)}>Payment</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/chat" className="nav-btn" onClick={() => setOpen(false)}>
            Live Chat
          </Link>
        </nav>

      </div>
    </header>
  );
}
