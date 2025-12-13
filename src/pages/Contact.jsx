import React, { useEffect } from "react";
import "../styles/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="contact-overlay">
          <h1 data-aos="fade-up">Contact Us</h1>
          <p data-aos="fade-up">
            Have questions? Our trading support team is here to help you 24×7.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="contact-info">
        <div className="info-card" data-aos="fade-right">
          <h3>📞 Phone</h3>
          <p>+91 8337032260</p>
          <span>Mon–Sun | 24×7 Support</span>
        </div>

        <div className="info-card" data-aos="fade-up">
          <h3>📧 Email</h3>
          <p>support@cobratdtrading.com</p>
          <span>We reply within 24 hours</span>
        </div>

        <div className="info-card" data-aos="fade-left">
          <h3>📍 Address</h3>
          <p>India (Online Trading Platform)</p>
          <span>Remote & Secure Operations</span>
        </div>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="contact-main">

        {/* CONTACT FORM */}
        <div className="contact-form" data-aos="fade-right">
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* MAP */}
        <div className="contact-map" data-aos="fade-left">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=India&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </section>

      {/* ================= SUPPORT ================= */}
      <section className="support">
        <h2 data-aos="fade-up">Need Instant Help?</h2>
        <p data-aos="fade-up">
          Chat with our support team anytime for quick trading assistance.
        </p>
        <button data-aos="zoom-in">Start Live Chat</button>
      </section>

    </div>
  );
}
