import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* القسم الأيسر: الشعار، الروابط، وأيقونات التواصل */}
        <div className="footer-left">
          <div className="footer-logo-zone">
            <span className="footer-logo-icon">🍋</span>
            <span className="footer-logo-text">LITTLE LEMON</span>
          </div>

          <div className="footer-links">
            <button className="footer-nav-btn">Contact Us</button>
            <button className="footer-nav-btn">Home</button>
            <button className="footer-nav-btn">Menu</button>
            <button className="footer-nav-btn highlight">
              Reserve your Table
            </button>
          </div>

          <div className="footer-socials">
            <a
              href="#snapchat"
              className="social-icon snapchat"
              title="Snapchat"
            >
              👻
            </a>
            <a
              href="#instagram"
              className="social-icon instagram"
              title="Instagram"
            >
              📸
            </a>
            <a
              href="#whatsapp"
              className="social-icon whatsapp"
              title="WhatsApp"
            >
              💬
            </a>
          </div>
        </div>

        {/* القسم الأيمن: كرت "Good Food Is Good Mood" من تصميمك */}
        <div className="footer-right">
          <div className="mood-card">
            <div className="mood-card-overlay">
              <h3>GOOD FOOD</h3>
              <p>IS</p>
              <h3>GOOD MOOD</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
