import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppPopup.css";

export default function WhatsAppPopup() {
  const [showPopup, setShowPopup] = useState(false);

  const whatsappLink =
    "https://wa.me/918337032260?text=Hello%20👋%0AI%20visited%20your%20trading%20website%20and%20need%20help%20regarding%20your%20services.";

  useEffect(() => {
    // 🔁 Popup every 5 seconds on ALL pages
    const interval = setInterval(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= FLOATING WHATSAPP BUTTON ================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="wa-float-icon" />
      </a>

      {/* ================= POPUP ================= */}
      {showPopup && (
        <div className="wa-popup">
          <button
            className="wa-close"
            onClick={() => setShowPopup(false)}
            aria-label="Close"
          >
            ×
          </button>

          <div className="wa-body">
            <FaWhatsapp className="wa-popup-icon" />

            <h4>Need Trading Assistance?</h4>
            <p>
              Our expert team is available on WhatsApp to help you with
              trading, payments, and account setup.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
