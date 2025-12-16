import React, { useEffect, useState } from "react";
import "../styles/Payment.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Payment() {
  const qrImages = {
    phonepe: "/qr/phonepe.png",
    gpay: "/qr/gpay.png",
    paytm: "/qr/paytm.png",
    bhim: "/qr/bhim.png",
  };

  const [activeQR, setActiveQR] = useState(qrImages.phonepe);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const copyUPI = (upi) => {
    navigator.clipboard.writeText(upi);
    setCopied(upi);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="payment-wrapper">

      {/* HERO */}
      <section className="payment-hero">
        <h1 data-aos="fade-up">Secure Payment & Expert Guidance</h1>
        <p data-aos="fade-up">
          Choose your plan carefully. Our guidance focuses on discipline,
          capital protection, and consistency — not gambling.
        </p>
      </section>

      {/* EXPERT PLANS */}
      <section className="payment-plans">
        <h2 data-aos="fade-up">Expert Analysis Plans</h2>

        <div className="plans-grid">

          <div className="plan-card" data-aos="zoom-in">
            <h3>Starter Plan</h3>
            <p className="amount">₹950</p>
            <p className="returns">Potential: ₹15k – ₹25k / month*</p>
            <ul>
              <li>✔ Intraday analysis</li>
              <li>✔ Beginner-friendly</li>
              <li>✔ WhatsApp support</li>
            </ul>
          </div>

          <div className="plan-card popular" data-aos="zoom-in">
            <span className="tag">Most Popular</span>
            <h3>Pro Trader Plan</h3>
            <p className="amount">₹1,500 – ₹3,000</p>
            <p className="returns">Potential: ₹30k – ₹50k / month*</p>
            <ul>
              <li>✔ Intraday + Swing</li>
              <li>✔ Priority expert access</li>
              <li>✔ Risk-managed trades</li>
            </ul>
          </div>

          <div className="plan-card" data-aos="zoom-in">
            <h3>Advanced Plan</h3>
            <p className="amount">₹5,000 – ₹10,000</p>
            <p className="returns">Potential: ₹70k – ₹1L / month*</p>
            <ul>
              <li>✔ Advanced market research</li>
              <li>✔ Capital protection focus</li>
              <li>✔ Dedicated support</li>
            </ul>
          </div>

          <div className="plan-card elite" data-aos="zoom-in">
            <h3>Elite Trader Plan</h3>
            <p className="amount">₹15,000+</p>
            <p className="returns">Potential: ₹1.5L – ₹2.5L / month*</p>
            <ul>
              <li>✔ One-to-one expert</li>
              <li>✔ Customized strategy</li>
              <li>✔ Priority guidance</li>
            </ul>
          </div>

        </div>

        <p className="note">
          *Returns are indicative and depend on market conditions.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="payment-steps">
        <h2 data-aos="fade-up">How It Works</h2>
        <div className="steps-grid">
          <div className="step">1. Choose plan</div>
          <div className="step">2. Make UPI payment</div>
          <div className="step">3. Share screenshot</div>
          <div className="step">4. Expert connects</div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="payment-methods">
        <h2 data-aos="fade-up">Pay via UPI</h2>

        <div className="qr-switch">
          <button onClick={() => setActiveQR(qrImages.phonepe)}>PhonePe</button>
          <button onClick={() => setActiveQR(qrImages.gpay)}>GPay</button>
          <button onClick={() => setActiveQR(qrImages.paytm)}>Paytm</button>
          <button onClick={() => setActiveQR(qrImages.bhim)}>BHIM</button>
        </div>

        <div className="qr-box" data-aos="zoom-in">
          <img src={activeQR} alt="UPI QR" />
          <p>Scan QR with your UPI app</p>
        </div>
      </section>

      {/* UPI DETAILS */}
      <section className="upi-details">
        <h2 data-aos="fade-up">UPI Details</h2>

        <div className="upi-card">
          <strong>tradexb@upi</strong>
          <button onClick={() => copyUPI("tradexb@upi")}>Copy</button>
          {copied && <small>✔ Copied</small>}
        </div>

        <p className="account-name">Account Name: Prem Parth Enterprises</p>
      </section>

      {/* CTA */}
      <section className="payment-cta">
        <h2>Confirm Payment on WhatsApp</h2>
        <a
          href="https://wa.me/918337032260"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Send Screenshot & Start
        </a>
      </section>

      {/* DISCLAIMER */}
      <section className="payment-disclaimer">
        <p>
          ⚠ Trading involves market risk. Payments are non-refundable as this
          is a professional guidance service.
        </p>
      </section>

    </div>
  );
}
