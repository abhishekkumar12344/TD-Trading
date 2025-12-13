import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/WhatsAppPopup.css";

export default function WhatsAppPopup() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // ✅ Show popup ONLY on Home page
    if (location.pathname !== "/") return;

    // ✅ Show only once per session
    const alreadyShown = sessionStorage.getItem("wa_popup_shown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("wa_popup_shown", "true");
    }, 6000); // 6 seconds delay

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!show) return null;

  return (
    <div className="wa-popup">
      <button
        className="wa-close"
        onClick={() => setShow(false)}
        aria-label="Close WhatsApp popup"
      >
        ×
      </button>

      <div className="wa-body">
        <div className="wa-icon">💬</div>

        <h4>Need Trading Assistance?</h4>
        <p>
          Our expert team is available on WhatsApp to help you with
          trading, payments, and account setup.
        </p>

        <a
          href="https://wa.me/918337032260?text=Hello%20%F0%9F%91%8B%0AI%20visited%20your%20trading%20website%20and%20need%20help%20regarding%20trading%20services.%0APlease%20guide%20me."
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
