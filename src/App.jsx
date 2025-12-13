import React from "react";
import { Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppPopup from "./components/WhatsAppPopup";

/* PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Trading from "./pages/Trading";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import ChatPage from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* GLOBAL STYLES */
import "./styles/index.css";

function App() {
  return (
    <div className="app-root">

      {/* HEADER */}
      <Header />

      {/* WHATSAPP POPUP (HOME PAGE ONLY – logic inside component) */}
      <WhatsAppPopup />

      {/* MAIN CONTENT */}
      <main>
        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* TRADING */}
          <Route path="/trading" element={<Trading />} />

          {/* FALLBACK (Unknown URL → Home) */}
          <Route path="*" element={<Home />} />

        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
