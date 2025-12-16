import React, { useEffect } from "react";
import "../styles/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 data-aos="fade-up">Let’s Talk Trading</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Before you invest, get clarity from real experts.  
            We believe in transparency, discipline, and trust.
          </p>
          <div className="hero-icons" data-aos="fade-up" data-aos-delay="400">
            <i className="fas fa-chart-line"></i>
            <i className="fas fa-shield-alt"></i>
            <i className="fas fa-users"></i>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="quick-contact">
        <div className="container">
          <div className="qc-card" data-aos="zoom-in">
            <div className="qc-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h3>💬 WhatsApp Support</h3>
            <p>Fastest way to connect with our expert</p>
            <a
              href="https://wa.me/918337032260"
              target="_blank"
              rel="noopener noreferrer"
              className="qc-btn"
            >
              Chat on WhatsApp
            </a>
            <span>Mon – Fri | 9:00 AM – 6:00 PM (IST)</span>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details">
        <div className="container">
          <h2 data-aos="fade-up">Contact Information</h2>
          <div className="details-grid">
            <div className="detail-card" data-aos="fade-up">
              <div className="card-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>support@tradexb.in</p>
              <span>Response within 24 working hours</span>
            </div>

            <div className="detail-card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-icon">
                <i className="fas fa-building"></i>
              </div>
              <h4>Business Name</h4>
              <p>COBRA TRADING</p>
              <span>Market Analysis & Trading Guidance</span>
            </div>

            <div className="detail-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h4>Operating Region</h4>
              <p>India</p>
              <span>Online professional service</span>
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGE FORM */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper" data-aos="fade-up">
            <h2>Send Us a Message</h2>
            <p>
              Have a question or need clarification?  
              Fill the form below and our team will get back to you.
            </p>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-item">
            <i className="fas fa-check-circle"></i>
            <span>No Guaranteed Profits</span>
          </div>
          <div className="trust-item">
            <i className="fas fa-shield-alt"></i>
            <span>Risk-Managed Guidance</span>
          </div>
          <div className="trust-item">
            <i className="fas fa-user-tie"></i>
            <span>Human Expert Support</span>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="contact-disclaimer">
        <div className="container">
          <p>
            <i className="fas fa-exclamation-triangle"></i>
            Trading involves market risk. We provide professional market analysis
            and guidance only. Please consult before making any financial decision.
          </p>
        </div>
      </section>
    </div>
  );
}