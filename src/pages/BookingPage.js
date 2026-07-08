import React, { useState } from "react";
import "./BookingPage.css";

function BookingPage() {
  const [formData, setFormData] = useState({ date: "", time: "", guests: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `تم حجز طاولتك بنجاح ليوم ${formData.date} الساعة ${formData.time} لـ ${formData.guests} أشخاص!`,
    );
  };

  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Date:</label>
        <input
          type="date"
          required
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />

        <label>Time:</label>
        <input
          type="time"
          required
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />

        <label>Number of guests:</label>
        <input
          type="number"
          min="1"
          max="10"
          required
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        />

        <button type="submit" className="reserve-btn">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
