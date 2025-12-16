import React, { useEffect } from "react";
import "../styles/Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="services-page">

      {/* ================= HERO ================= */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 data-aos="fade-up">Professional Trading Guidance</h1>
          <p data-aos="fade-up">
            Disciplined market analysis with risk-managed trading support.
            No shortcuts. No false promises.
          </p>

          <a
            href="https://wa.me/918337032260"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Talk to Expert on WhatsApp
          </a>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="services-section">
        <h2 data-aos="fade-up">Our Core Services</h2>

        <div className="services-grid">
          <div className="service-card" data-aos="fade-up">
            <h3>Intraday Trading Guidance</h3>
            <p>
              Short-term market analysis with predefined entry,
              stop-loss and disciplined execution.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Swing Trading Analysis</h3>
            <p>
              Medium-term trading opportunities based on market
              structure and trend analysis.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Risk Management Support</h3>
            <p>
              Capital protection through proper position sizing
              and strict risk control rules.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <h3>One-to-One Expert Support</h3>
            <p>
              Direct WhatsApp guidance to understand trades,
              risk and market behaviour clearly.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EXPERT ANALYSIS PLANS ================= */}
      <section className="analysis-plans">
        <h2 data-aos="fade-up">Expert Analysis Plans</h2>
        <p className="plans-sub" data-aos="fade-up">
          Plans designed with disciplined analysis and proper risk management.  
          Returns are indicative and depend on market conditions.
        </p>

        <div className="plans-grid">

          <div className="plan-card" data-aos="zoom-in">
            <h3>Starter Plan</h3>
            <p className="invest">Investment: ₹950</p>
            <p className="profit">Potential Monthly Return: ₹20,000 – ₹25,000*</p>

            <ul>
              <li>✔ Intraday trade analysis</li>
              <li>✔ Low-risk approach</li>
              <li>✔ WhatsApp expert support</li>
            </ul>

            <a href="https://wa.me/918337032260" className="plan-btn">
              Talk to Expert
            </a>
          </div>

          <div className="plan-card highlight" data-aos="zoom-in" data-aos-delay="150">
            <span className="badge">Most Popular</span>
            <h3>Pro Trader Plan</h3>
            <p className="invest">Investment: ₹1,500</p>
            <p className="profit">Potential Monthly Return: ₹30,000 – ₹40,000*</p>

            <ul>
              <li>✔ Intraday + Swing analysis</li>
              <li>✔ Priority expert guidance</li>
              <li>✔ Strict risk management</li>
            </ul>

            <a href="https://wa.me/918337032260" className="plan-btn">
              Talk to Expert
            </a>
          </div>

          <div className="plan-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Elite Plan</h3>
            <p className="invest">Investment: ₹3,000</p>
            <p className="profit">Potential Monthly Return: ₹50,000 – ₹70,000*</p>

            <ul>
              <li>✔ Advanced market research</li>
              <li>✔ Capital protection focus</li>
              <li>✔ Dedicated expert support</li>
            </ul>

            <a href="https://wa.me/918337032260" className="plan-btn">
              Talk to Expert
            </a>
          </div>

        </div>

        <p className="plans-note">
          *Returns are indicative, not guaranteed. Trading involves market risk.
        </p>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="services-process">
        <h2 data-aos="fade-up">How Our Guidance Works</h2>

        <div className="process-grid">
          <div className="process-card">Market Analysis</div>
          <div className="process-card">Risk-Defined Trade Setup</div>
          <div className="process-card">WhatsApp Communication</div>
          <div className="process-card">Discipline & Review</div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="services-disclaimer">
        <p>
          ⚠ Trading involves market risk.  
          ⚠ Returns are not guaranteed.  
          ⚠ Losses are part of trading.
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="services-cta">
        <h2 data-aos="zoom-in">Need Clear & Honest Guidance?</h2>
        <p data-aos="zoom-in">
          Speak directly with our expert before starting.
        </p>
        <a
          href="https://wa.me/918337032260"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Chat on WhatsApp
        </a>
      </section>

    </div>
  );
}
