import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md"; // 1. استيراد أيقونة الدفع
import "./Header.css";
import { MdAddCard } from "react-icons/md";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* الشعار - Logo بدون رابط */}
        <div className="logo">
          <span className="lemon-icon">🍋</span>
          <span className="logo-text">LITTLE LEMON</span>
        </div>

        {/* روابط التنقل باستخدام Link */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/contact"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </Link>
          <Link
            to="/booking"
            className="nav-item reserve-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Reserve your Table
          </Link>

          {/* تغيير to="/booking" إلى to="/payment" */}
          <Link
            to="/payment"
            className="nav-item reservation-icon"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdAddCard size={28} />
          </Link>
        </nav>

        {/* أيقونات المستخدم والدفع */}
        <div className="mobile-user-icons">
          <span className="icon">🔍</span>
          <span className="icon">👤</span>
          {/* 2. إضافة أيقونة الدفع كـ Link يوجه لصفحة الحجز/الدفع */}
          <Link
            to="/booking"
            className="icon payment-link"
            aria-label="Payment"
          >
            <MdPayment size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
