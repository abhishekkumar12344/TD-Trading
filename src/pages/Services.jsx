import React, { useEffect } from "react";
import "../styles/Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Service() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="service-page">

      {/* ================= HERO SECTION ================= */}
      <section className="service-hero">
        <div className="hero-overlay">
          <h1 data-aos="fade-up">Professional Trading Services</h1>
          <p data-aos="fade-up">
            Experience ultra-fast execution, real-time market data, and a secure trading environment.
          </p>
          <button data-aos="fade-up" className="hero-btn">Start Trading</button>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="service-grid">
        <h2 data-aos="fade-up">Our Core Services</h2>

        <div className="grid-container">

          <div className="service-card" data-aos="fade-right">
            <img src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png" alt="" />
            <h3>Real-Time Market Data</h3>
            <p>Live WebSocket price updates, order books, depth charts & more.</p>
          </div>

          <div className="service-card" data-aos="fade-left">
            <img src="https://cdn-icons-png.flaticon.com/512/8676/8676339.png" alt="" />
            <h3>Advanced Trading Engine</h3>
            <p>Execute Market, Limit, Stop orders with instant fill system.</p>
          </div>

          <div className="service-card" data-aos="fade-right">
            <img src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="" />
            <h3>AI Trading Tools</h3>
            <p>Smart trend analysis, candle pattern detection & risk analysis.</p>
          </div>

          <div className="service-card" data-aos="fade-left">
            <img src="https://cdn-icons-png.flaticon.com/512/9375/9375813.png" alt="" />
            <h3>Portfolio Tracking</h3>
            <p>Complete P/L tracking, open positions, and order history.</p>
          </div>

          <div className="service-card" data-aos="fade-right">
            <img src="https://cdn-icons-png.flaticon.com/512/2331/2331949.png" alt="" />
            <h3>Instant UPI Payments</h3>
            <p>Fast deposits using QR, UPI, PhonePe, GPay & more.</p>
          </div>

          <div className="service-card" data-aos="fade-left">
            <img src="https://cdn-icons-png.flaticon.com/512/1813/1813452.png" alt="" />
            <h3>24/7 Support</h3>
            <p>Our support team is available around the clock to assist you.</p>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-us">
        <h2 data-aos="fade-up">Why Choose Us?</h2>

        <div className="why-grid">

          <div className="why-card" data-aos="zoom-in">
            <h3>99.9% Uptime</h3>
            <p>Trade reliably with our secure & powerful servers.</p>
          </div>

          <div className="why-card" data-aos="zoom-in">
            <h3>Bank-Level Security</h3>
            <p>Your funds and data are protected with AES encryption.</p>
          </div>

          <div className="why-card" data-aos="zoom-in">
            <h3>Ultra-Fast Execution</h3>
            <p>Experience lightning-fast order execution engine.</p>
          </div>

          <div className="why-card" data-aos="zoom-in">
            <h3>Transparent Pricing</h3>
            <p>No hidden fees. Full transparency guaranteed.</p>
          </div>

        </div>
      </section>

      {/* ================= PAYMENT METHODS ================= */}
      <section className="payments">
        <h2 data-aos="fade-up">Supported Payment Methods</h2>

        <div className="pay-logos">
          <img data-aos="fade-up" src="https://upload.wikimedia.org/wikipedia/commons/1/13/PhonePe_Logo.png" alt="PhonePe" />
          <img data-aos="fade-up" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Google_Pay_Logo.svg" alt="GPay" />
          <img data-aos="fade-up" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/BHIM_upi_logo.png" alt="UPI" />
          <img data-aos="fade-up" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Paytm_logo.png/799px-Paytm_logo.png" alt="Paytm" />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials">
        <h2 data-aos="fade-up">What Our Traders Say</h2>

        <div className="test-grid">

          <div className="test-card" data-aos="fade-right">
            <p>“Amazing real-time data accuracy. Best trading UI ever!”</p>
            <h4>— Rohan Verma</h4>
          </div>

          <div className="test-card" data-aos="fade-left">
            <p>“Fast execution and clean interface. Highly recommended!”</p>
            <h4>— Anjali Sharma</h4>
          </div>

          <div className="test-card" data-aos="fade-right">
            <p>“UPI deposit option makes things super easy!”</p>
            <h4>— Aditya Kumar</h4>
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="faq">
        <h2 data-aos="fade-up">Frequently Asked Questions</h2>

        <div className="faq-item" data-aos="fade-up">
          <h3>How do I start trading?</h3>
          <p>Just create an account, deposit funds via UPI, and start trading instantly.</p>
        </div>

        <div className="faq-item" data-aos="fade-up">
          <h3>Is my money safe?</h3>
          <p>Yes, we use bank-grade encryption and secure storage for user funds.</p>
        </div>

        <div className="faq-item" data-aos="fade-up">
          <h3>Do you support UPI?</h3>
          <p>Yes! We support QR, PhonePe, GPay, Paytm, and BHIM UPI.</p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2 data-aos="zoom-in">Ready to Level Up Your Trading?</h2>
        <p data-aos="zoom-in">Join thousands of traders growing with our platform.</p>
        <button data-aos="zoom-in" className="cta-btn">Create Account</button>
      </section>

    </div>
  );
}
