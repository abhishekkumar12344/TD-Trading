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
  const [file, setFile] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const copyUPI = (upi) => {
    navigator.clipboard.writeText(upi);
    setCopied(upi);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="payment-page">

      {/* ================= HERO ================= */}
      <section
        className="payment-hero"
        style={{
          backgroundImage:
            "url('https://imgs.search.brave.com/O-FdrpMjGZGZVTZvHygb1fECZee8pZVDb0XLc0xMDRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NzQ3LzI4NC9zbWFs/bC9jb2lucy13aXRo/LXRyYWRpbmctY2hh/cnQtaW4tZmluYW5j/aWFsLWNvbmNlcHRz/LXdpdGgtZ3Jvd3Ro/LWZpbmFuY2lhbC1k/YXRhLWNvbmNlcHQt/b3ItaW52ZXN0bWVu/dC1tYXJrZXQtcHJv/Zml0LWJhci1hbmQt/c3VjY2Vzcy1tYXJr/ZXQtc3RvY2stdGVj/aG5vbG9neS1jdXJy/ZW5jeS1yZXBvcnQt/d2l0aC1nZW5lcmF0/aXZlLWFpLXBob3Rv/LmpwZw')",
        }}
      >
        <div className="payment-overlay">
          <h1 data-aos="fade-up">Fast & Secure UPI Payments</h1>
          <p data-aos="fade-up">
            Pay securely using PhonePe, Google Pay, Paytm or BHIM UPI.
          </p>
        </div>
      </section>

      {/* ================= MIN DEPOSIT ================= */}
      <section className="min-deposit" data-aos="zoom-in">
        <h2>Minimum Deposit</h2>
        <p>
          Start trading with just <strong>₹950</strong>
        </p>
      </section>

      {/* ================= QR SECTION ================= */}
      <section className="qr-section">
        <h2 data-aos="fade-up">Scan & Pay Using UPI</h2>

        <div className="qr-switch">
          <button
            className={activeQR === qrImages.phonepe ? "active" : ""}
            onClick={() => setActiveQR(qrImages.phonepe)}
          >
            PhonePe
          </button>
          <button
            className={activeQR === qrImages.gpay ? "active" : ""}
            onClick={() => setActiveQR(qrImages.gpay)}
          >
            Google Pay
          </button>
          <button
            className={activeQR === qrImages.paytm ? "active" : ""}
            onClick={() => setActiveQR(qrImages.paytm)}
          >
            Paytm
          </button>
          <button
            className={activeQR === qrImages.bhim ? "active" : ""}
            onClick={() => setActiveQR(qrImages.bhim)}
          >
            BHIM
          </button>
        </div>

        <div className="qr-box" data-aos="zoom-in">
          <img src={activeQR} alt="UPI QR Code" />
          <p>Scan this QR with selected UPI app</p>
        </div>
      </section>

      {/* ================= UPI DETAILS ================= */}
      <section className="upi-details">
        <h2 data-aos="fade-up">UPI Payment Details</h2>

        <div className="upi-grid">
          <div className="upi-card">
            <span>Primary UPI ID</span>
            <div className="upi-row">
              <strong>treadxb@upi</strong>
              <button onClick={() => copyUPI("treadxb@upi")}>Copy</button>
            </div>
            {copied === "treadxb@upi" && <small>✔ Copied</small>}
          </div>

          <div className="upi-card">
            <span>Alternate UPI ID</span>
            <div className="upi-row">
              <strong>treadxb.pay@upi</strong>
              <button onClick={() => copyUPI("treadxb.pay@upi")}>Copy</button>
            </div>
            {copied === "treadxb.pay@upi" && <small>✔ Copied</small>}
          </div>

          <div className="upi-card">
            <span>Account Name</span>
            <strong>TREADXB</strong>
          </div>
        </div>
      </section>

      {/* ================= UPLOAD SCREENSHOT ================= */}
      <section className="upload-section" data-aos="fade-up">
        <h2>Upload Payment Screenshot</h2>
        <p>Upload proof after successful payment for faster verification.</p>

        <div className="upload-box">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {file && <span className="file-name">✔ {file.name}</span>}
          <button className="upload-btn">Submit Screenshot</button>
        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section className="payment-security">
        <h2>100% Secure & Trusted</h2>
        <p>
          We never store your UPI details. All payments are user-initiated and secure.
        </p>
      </section>

    </div>
  );
}
