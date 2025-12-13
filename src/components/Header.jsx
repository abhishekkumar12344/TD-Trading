import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">

        {/* LOGO (NOW CLICKABLE WITHOUT REFRESH) */}
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <div className="mark">P</div>
          <div>
            <div className="brand" >COBRA TRADING</div>
            <div className="tag">powerd by Benzinga</div>
          </div>
        </Link>

        {/* NAV */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/trading" onClick={() => setMenuOpen(false)}>Trading</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/payment" onClick={() => setMenuOpen(false)}>Payment</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/chat" onClick={() => setMenuOpen(false)}>Chat</Link>
        </nav>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}
