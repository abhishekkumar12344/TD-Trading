import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TradingCard from "../components/TradingCard";
import '../styles/Home.css';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // 🔥 Sample Chart Data (Enhanced with more points for realism)
  const chartData = [
    { time: "9:30", price: 100 },
    { time: "10:00", price: 104 },
    { time: "10:30", price: 98 },
    { time: "11:00", price: 105 },
    { time: "11:30", price: 103 },
    { time: "12:00", price: 107 },
    { time: "12:30", price: 102 },
  ];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
     const timer = setTimeout(() => {
    window.location.href =
      "https://wa.me/918337032260?text=Hello%20I%20visited%20your%20website";
  }, 5000);

  return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-wrapper">
      

      {/* --------------------------------------
         HERO SECTION WITH REAL BACKGROUND
      --------------------------------------- */}
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1500&q=80')`  // Professional trading floor image
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content" data-aos="fade-right">
          <h1 className="hero-title">Elevate Your Trading Game</h1>
          <p className="hero-sub">
            Access real-time data, expert insights, and secure platforms to maximize your profits. Join thousands of successful traders.
          </p>
          <div className="hero-buttons">
            <Link to="/trading"><button className="button hero-btn">Start Trading</button></Link>
            <Link to="/services"><button className="button hero-btn-outline">Explore Services</button></Link>
          </div>
          {/* Stats */}
          <div className="hero-stats">
            <div className="stat"><h2>15K+</h2><p>Active Traders</p></div>
            <div className="stat"><h2>₹10Cr+</h2><p>Daily Volume</p></div>
            <div className="stat"><h2>4.9★</h2><p>User Rating</p></div>
          </div>
        </div>
        {/* Chart Preview */}
        <div className="hero-chart card" data-aos="fade-left">
          <h3>Live Market Trend</h3>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Line dataKey="price" stroke="#00e5ff" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* --------------------------------------
             LIVE MARKET TICKER
      --------------------------------------- */}
      <div className="ticker" data-aos="zoom-in">
        <marquee>
          <i className="fas fa-chart-line"></i> NIFTY ↑ 0.52% &nbsp;&nbsp; 
          <i className="fas fa-university"></i> BANKNIFTY ↓ 0.30% &nbsp;&nbsp;
          <i className="fab fa-bitcoin"></i> BTC ↑ 1.25% &nbsp;&nbsp; 
          <i className="fab fa-ethereum"></i> ETH ↑ 0.8% &nbsp;&nbsp;
        </marquee>
      </div>

      {/* --------------------------------------
               WHY CHOOSE US
      --------------------------------------- */}
      <section 
        className="why-section"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500&q=80')`  // Subtle finance background
        }}
      >
        <div className="overlay-light"></div>
        <h2 data-aos="fade-up">Why Choose Trading?</h2>
        <div className="grid why-grid">
          <div className="card why-card" data-aos="fade-up">
            <i className="fas fa-graduation-cap icon"></i>
            <h3>Expert Training</h3>
            <p>Master strategies from seasoned professionals with hands-on courses.</p>
          </div>
          <div className="card why-card" data-aos="fade-up" data-aos-delay="150">
            <i className="fas fa-shield-alt icon"></i>
            <h3>Secure Payments</h3>
            <p>Bank-grade security with UPI, QR, and encrypted transactions.</p>
          </div>
          <div className="card why-card" data-aos="fade-up" data-aos-delay="300">
            <i className="fas fa-play-circle icon"></i>
            <h3>Live Simulation</h3>
            <p>Practice with real-time data in a risk-free environment.</p>
          </div>
          <div className="card why-card" data-aos="fade-up" data-aos-delay="450">
            <i className="fas fa-headset icon"></i>
            <h3>24/7 Support</h3>
            <p>Instant chat and email support from our expert team.</p>
          </div>
        </div>
      </section>

      {/* --------------------------------------
      EXPERT ANALYSIS PLANS
--------------------------------------- */}
<section className="analysis-section">
  <h2 data-aos="fade-up">Expert Analysis Plans</h2>
  <p className="analysis-sub" data-aos="fade-up">
    Choose analyst-guided plans based on market research, technical analysis,
    and disciplined risk management.
  </p>

  <div className="analysis-grid">

    <div className="analysis-card" data-aos="zoom-in">
      <h3>Starter Plan</h3>
      <p className="invest">Invest ₹950</p>
      <p className="return">Potential Return: ₹26,220*</p>
      <ul>
        <li>✔ Intraday Expert Signals</li>
        <li>✔ Low Risk Strategy</li>
        <li>✔ WhatsApp Support</li>
      </ul>
      <Link to="/payment">
        <button className="analysis-btn">Get Started</button>
      </Link>
    </div>

    <div className="analysis-card highlight" data-aos="zoom-in" data-aos-delay="150">
      <h3>Pro Trader Plan</h3>
      <p className="invest">Invest ₹1,500</p>
      <p className="return">Potential Return: ₹29,999*</p>
      <ul>
        <li>✔ Intraday + Swing Signals</li>
        <li>✔ Priority Expert Access</li>
        <li>✔ Risk Managed Trades</li>
      </ul>
      <Link to="/payment">
        <button className="analysis-btn">Get Started</button>
      </Link>
    </div>

    <div className="analysis-card" data-aos="zoom-in" data-aos-delay="300">
      <h3>Advanced Plan</h3>
      <p className="invest">Invest ₹3,000</p>
      <p className="return">Potential Return: ₹59,000*</p>
      <ul>
        <li>✔ Advanced Market Analysis</li>
        <li>✔ Multi-Asset Signals</li>
        <li>✔ Dedicated Support</li>
      </ul>
      <Link to="/payment">
        <button className="analysis-btn">Get Started</button>
      </Link>
    </div>

    <div className="analysis-card" data-aos="zoom-in" data-aos-delay="450">
      <h3>Elite Plan</h3>
      <p className="invest">Invest ₹5,000</p>
      <p className="return">Potential Return: ₹99,999*</p>
      <ul>
        <li>✔ Elite Strategy Access</li>
        <li>✔ High-Probability Trades</li>
        <li>✔ 24/7 Expert Assistance</li>
      </ul>
      <Link to="/payment">
        <button className="analysis-btn">Get Started</button>
      </Link>
    </div>

  </div>

  <p className="analysis-note">
    *Returns are indicative and depend on market conditions. Trading involves risk.
  </p>
</section>


      {/* --------------------------------------
             MARKET SNAPSHOT
      --------------------------------------- */}
      <section className="snapshot">
        <h2 data-aos="fade-up">Live Market Snapshot</h2>
        <div className="grid">
          <TradingCard symbol="NIFTY" price="22,350" change={0.5} />
          <TradingCard symbol="BANKNIFTY" price="45,230" change={-0.3} />
          <TradingCard symbol="BTC" price="$42,900" change={1.2} />
        </div>
      </section>

      {/* --------------------------------------
             SERVICES PREVIEW
      --------------------------------------- */}
      <section 
        className="services-preview"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=80')`  // Analytics background
        }}
      >
        <div className="overlay-light"></div>
        <h2 data-aos="fade-up">Our Premium Services</h2>
        <div className="grid">
          <div className="card" data-aos="fade-right">
            <i className="fas fa-book-open icon"></i>
            <h3>Trading Courses</h3>
            <p>Comprehensive modules on indicators, risk management, and profitable setups.</p>
            <Link to="/services"><button className="button small-btn">Learn More</button></Link>
          </div>
          <div className="card" data-aos="fade-up">
            <i className="fas fa-chart-pie icon"></i>
            <h3>Portfolio Guidance</h3>
            <p>Tailored advice to diversify and optimize your investments.</p>
            <Link to="/services"><button className="button small-btn">Learn More</button></Link>
          </div>
          <div className="card" data-aos="fade-left">
            <i className="fas fa-signal icon"></i>
            <h3>Signals Service</h3>
            <p>Accurate daily signals with entry/exit points and risk assessments.</p>
            <Link to="/services"><button className="button small-btn">Learn More</button></Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------
               TESTIMONIALS
      --------------------------------------- */}
      <section className="testimonials">
        <h2 data-aos="fade-up">What Our Traders Say</h2>
        <div className="grid">
          <div className="card testimonial" data-aos="zoom-in">
            <img src="https://via.placeholder.com/60" alt="Rohit Kumar" className="avatar" />
            <p>“Transformed my trading with their expert guidance!”</p>
            <span>- Rohit Kumar, 5★</span>
          </div>
          <div className="card testimonial" data-aos="zoom-in" data-aos-delay="150">
            <img src="https://via.placeholder.com/60" alt="Priya Singh" className="avatar" />
            <p>“Signals are spot-on and easy to follow.”</p>
            <span>- Priya Singh, 5★</span>
          </div>
          <div className="card testimonial" data-aos="zoom-in" data-aos-delay="300">
            <img src="https://via.placeholder.com/60" alt="Ankit Raj" className="avatar" />
            <p>“Seamless payments and top-notch support.”</p>
            <span>- Ankit Raj, 5★</span>
          </div>
        </div>
      </section>

      {/* --------------------------------------
               PREMIUM CTA
      --------------------------------------- */}
      <section className="premium-banner" data-aos="zoom-in">
        <h2>Ready to Trade Like a Pro?</h2>
        <p>Join now and unlock your potential in the markets.</p>
        <Link to="/trading"><button className="button premium-btn">Get Started</button></Link>
      </section>

      {/* --------------------------------------
           FLOATING WHATSAPP BUTTON
      --------------------------------------- */}
      

     
    </div>
  );
}