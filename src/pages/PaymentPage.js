import React from 'react';
import './PaymentPage.css'; // قم بإنشاء ملف تنسيق خاص بها

function PaymentPage() {
  return (
    <div className="payment-page">
      <h1>Payment & Cards</h1>
      <form className="payment-form">
        <label>Card Number:</label>
        <input type="text" placeholder="0000 0000 0000 0000" />
        
        <label>Expiry Date:</label>
        <input type="text" placeholder="MM/YY" />
        
        <label>CVV:</label>
        <input type="text" placeholder="123" />
        
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default PaymentPage;