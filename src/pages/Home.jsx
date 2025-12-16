import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TradingCard from "../components/TradingCard";
import "../styles/Home.css";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const chartData = [
    { time: "9:30", price: 100 },
    { time: "10:00", price: 104 },
    { time: "10:30", price: 98 },
    { time: "11:00", price: 105 },
    { time: "11:30", price: 103 },
    { time: "12:00", price: 107 },
  ];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    // const timer = setTimeout(() => {
    //   window.location.href =
    //     "https://wa.me/918337032260?text=Hello%20I%20want%20trading%20guidance";
    // }, 10000);

    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-wrapper">
      {/* HERO */}
      <section className="hero-section">
        <div className="overlay" />
        <div className="hero-content" data-aos="fade-right">
          <h1>Professional Trading Guidance</h1>
          <p>
            We help traders trade with discipline, proper risk management,
            and long-term consistency — not gambling.
          </p>

          <div className="hero-buttons">
            <a
              href="https://wa.me/918337032260"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Talk to Expert on WhatsApp
            </a>
            <Link to="/services" className="secondary-btn">
              View Services
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>15K+</h3>
              <span>Active Traders</span>
            </div>
            <div>
              <h3>4.9★</h3>
              <span>User Rating</span>
            </div>
            <div>
              <h3>Risk-First</h3>
              <span>Trading Approach</span>
            </div>
          </div>
        </div>

        <div className="hero-chart" data-aos="fade-left">
          <h4>Live Market View</h4>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Line dataKey="price" stroke="#00e5ff" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="trust-section">
        <h2 data-aos="fade-up">Why Traders Trust Us</h2>
        <div className="grid">
          <div className="card" data-aos="fade-up">
            <h3>Risk Management First</h3>
            <p>Capital protection is our top priority in every trade.</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="150">
            <h3>Transparent Process</h3>
            <p>No fake promises. Clear rules & honest communication.</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="300">
            <h3>Real Human Support</h3>
            <p>Direct WhatsApp support from experienced professionals.</p>
          </div>
        </div>
      </section>

      {/* EXPERT ANALYSIS PLANS */}
      <section className="plans-section">
        <h2 data-aos="fade-up">Expert Analysis Plans</h2>
        <p className="section-sub">
          Choose plans designed with disciplined analysis & proper risk control
        </p>

        <div className="plans-grid">
          <div className="plan-card" data-aos="zoom-in">
            <h3>Starter Plan</h3>
            <p className="price">₹950</p>
            <ul>
              <li>✔ Intraday market guidance</li>
              <li>✔ Low-risk trading approach</li>
              <li>✔ WhatsApp support</li>
            </ul>
            <a href="https://wa.me/918337032260" className="plan-btn">
              Talk to Expert
            </a>
          </div>

          <div className="plan-card highlight" data-aos="zoom-in" data-aos-delay="150">
            <h3>Pro Trader Plan</h3>
            <p className="price">₹1,500</p>
            <ul>
              <li>✔ Intraday + Swing analysis</li>
              <li>✔ Priority expert support</li>
              <li>✔ Risk-managed trades</li>
            </ul>
            <a href="https://wa.me/918337032260" className="plan-btn">
              Talk to Expert
            </a>
          </div>

          <div className="plan-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Elite Plan</h3>
            <p className="price">₹3,000</p>
            <ul>
              <li>✔ Advanced market research</li>
              <li>✔ Capital protection focus</li>
              <li>✔ Dedicated guidance</li>
            </ul>
            <a href="https://wa.me/918337032260" className="plan-btn">
              Talk to Expert
            </a>
          </div>
        </div>

        <p className="plans-note">
          ⚠ Trading involves market risk. Returns are not guaranteed.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h2 data-aos="fade-up">What Our Traders Say</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card" data-aos="fade-up">
            <div className="stars">★★★★★</div>
            <p>
              “Very professional approach. Risk rules are clear and practical.”
            </p>
            <h4>Rohit Kumar</h4>
            <span>Pune</span>
          </div>

          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="150">
            <div className="stars">★★★★★</div>
            <p>
              “No fake promises. Support team is helpful and responsive.”
            </p>
            <h4>Priya Singh</h4>
            <span>Delhi</span>
          </div>

          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
            <div className="stars">★★★★☆</div>
            <p>
              “Good experience overall. Focus on capital protection is best.”
            </p>
            <h4>Ankit Raj</h4>
            <span>Bangalore</span>
          </div>
        </div>
      </section>

      {/* MARKET SNAPSHOT */}
      <section className="snapshot">
        <h2 data-aos="fade-up">Live Market Snapshot</h2>
        <div className="grid">
          <TradingCard symbol="NIFTY" price="22,350" change={0.5} />
          <TradingCard symbol="BANKNIFTY" price="45,230" change={-0.3} />
          <TradingCard symbol="BTC" price="$42,900" change={1.2} />
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="disclaimer">
        <p>
          ⚠ Trading involves market risk. Past performance does not ensure
          future results.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Ready to Start With Proper Guidance?</h2>
        <a
          href="https://wa.me/918337032260"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-btn"
        >
          Chat With Expert
        </a>
      </section>
    </div>
  );
}
