import React from "react";
import "../styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1 data-aos="fade-up">About TradeXB Trading</h1>
          <p data-aos="fade-up">
            Building next-generation trading technology with trust, speed & innovation.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="about-story">
        <h2 data-aos="fade-up">Our Story</h2>
        <p data-aos="fade-up">
          Prem Parth Trading was founded with a clear mission — to make professional-grade 
          trading tools accessible to everyone. We combine cutting-edge technology, 
          real-time data, and secure infrastructure to empower traders of all levels.
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mission-vision">
        <div className="mv-card" data-aos="fade-right">
          <h3>🎯 Our Mission</h3>
          <p>
            To democratize trading by delivering fast, transparent, and reliable 
            trading solutions backed by modern technology.
          </p>
        </div>

        <div className="mv-card" data-aos="fade-left">
          <h3>🚀 Our Vision</h3>
          <p>
            To become a globally trusted trading platform known for innovation, 
            security, and trader success.
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="about-stats">
        <div className="stat-card" data-aos="zoom-in">
          <h2>10K+</h2>
          <p>Active Traders</p>
        </div>

        <div className="stat-card" data-aos="zoom-in">
          <h2>₹5Cr+</h2>
          <p>Monthly Volume</p>
        </div>

        <div className="stat-card" data-aos="zoom-in">
          <h2>99.9%</h2>
          <p>System Uptime</p>
        </div>

        <div className="stat-card" data-aos="zoom-in">
          <h2>24×7</h2>
          <p>Customer Support</p>
        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section className="about-security">
        <h2 data-aos="fade-up">Security & Compliance</h2>
        <div className="security-grid">
          <div className="security-card" data-aos="fade-right">
            <h3>🔐 Bank-Grade Encryption</h3>
            <p>All user data is protected using AES-256 encryption.</p>
          </div>

          <div className="security-card" data-aos="fade-left">
            <h3>🛡 Secure Infrastructure</h3>
            <p>High-availability servers with continuous monitoring.</p>
          </div>

          <div className="security-card" data-aos="fade-right">
            <h3>📜 Transparent Policies</h3>
            <p>Clear fee structure and transparent operations.</p>
          </div>

          <div className="security-card" data-aos="fade-left">
            <h3>⚙ Risk Management</h3>
            <p>Advanced risk controls to protect traders.</p>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="about-journey">
        <h2 data-aos="fade-up">Our Journey</h2>

        <ul>
          <li data-aos="fade-up">🚀 Platform launched with live trading tools</li>
          <li data-aos="fade-up">📈 Introduced advanced order execution engine</li>
          <li data-aos="fade-up">🔒 Upgraded security & infrastructure</li>
          <li data-aos="fade-up">🌍 Expanded services for global users</li>
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <h2 data-aos="zoom-in">Join the Future of Trading</h2>
        <p data-aos="zoom-in">
          Trade smarter with a platform built for performance and trust.
        </p>
        <button data-aos="zoom-in">Create Free Account</button>
      </section>

    </div>
  );
}
