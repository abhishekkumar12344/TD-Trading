import React, { useEffect } from "react";
import "../styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="about-wrapper">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1 data-aos="fade-up">About TradeXB Trading</h1>
          <p data-aos="fade-up">
            A disciplined trading guidance platform built on trust,
            risk management and realistic expectations.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="about-story">
        <h2 data-aos="fade-up">Our Story</h2>
        <p data-aos="fade-up">
          Most traders fail not because the market is difficult,
          but because of poor discipline, emotional decisions and
          lack of proper risk management.
        </p>
        <p data-aos="fade-up">
          TradeXB Trading was created to solve this exact problem —
          by guiding traders with a structured, transparent and
          risk-first approach instead of shortcuts or false promises.
        </p>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stat-box" data-aos="zoom-in">
          <h3>15K+</h3>
          <p>Traders Guided</p>
        </div>
        <div className="stat-box" data-aos="zoom-in" data-aos-delay="100">
          <h3>4.9★</h3>
          <p>Average Rating</p>
        </div>
        <div className="stat-box" data-aos="zoom-in" data-aos-delay="200">
          <h3>Risk-First</h3>
          <p>Trading Philosophy</p>
        </div>
        <div className="stat-box" data-aos="zoom-in" data-aos-delay="300">
          <h3>24×7</h3>
          <p>Expert Support</p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="about-founder">
        <div className="founder-card" data-aos="fade-up">
          <h2>Meet the Expert</h2>
          <p className="founder-role">Founder & Market Analyst</p>
          <p>
            I have been actively involved in Indian stock markets for several
            years. After witnessing how traders lose capital due to
            over-trading and emotional decisions, I started TradeXB Trading.
          </p>
          <p>
            Our objective is simple — help traders protect capital,
            follow discipline and trade with clarity.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="about-process">
        <h2 data-aos="fade-up">How We Work</h2>
        <div className="process-grid">
          <div className="process-card" data-aos="fade-up">✔ Capital protection first</div>
          <div className="process-card" data-aos="fade-up" data-aos-delay="100">✔ Fixed stop-loss rules</div>
          <div className="process-card" data-aos="fade-up" data-aos-delay="200">✔ No forced trades</div>
          <div className="process-card" data-aos="fade-up" data-aos-delay="300">✔ Clear WhatsApp guidance</div>
          <div className="process-card" data-aos="fade-up" data-aos-delay="400">✔ Learning-based approach</div>
          <div className="process-card" data-aos="fade-up" data-aos-delay="500">✔ No guaranteed profits</div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="about-trust">
        <h2 data-aos="fade-up">Why Traders Trust Us</h2>
        <div className="trust-grid">
          <div className="trust-card" data-aos="fade-up">
            Transparent communication
          </div>
          <div className="trust-card" data-aos="fade-up" data-aos-delay="150">
            Real human expert support
          </div>
          <div className="trust-card" data-aos="fade-up" data-aos-delay="300">
            Honest risk disclosure
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="about-disclaimer">
        <p>
          ⚠ Trading involves market risk.  
          ⚠ Returns are not guaranteed.  
          ⚠ Past performance does not ensure future results.
        </p>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2 data-aos="zoom-in">Ready to Trade With Discipline?</h2>
        <p data-aos="zoom-in">
          Speak directly with our expert and understand the process clearly.
        </p>
        <a
          href="https://wa.me/918337032260"
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta-btn"
        >
          Talk to Expert on WhatsApp
        </a>
      </section>
    </div>
  );
}
