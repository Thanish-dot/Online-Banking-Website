import React, { useState, useContext } from 'react';
import { AccountContext } from '../context/AccountContext';
import './SendMoney.css';

function SendMoney({ closeModal }) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const { sendMoney } = useContext(AccountContext);

  const handlePayment = (e) => {
    e.preventDefault();
    const success = sendMoney(recipient, amount, note);
    if (success) {
      alert(`✅ Payment Successful! Sent ₹${amount} to ${recipient}`);
      if (closeModal) closeModal(); // ✅ only call if it exists
      setRecipient('');
      setAmount('');
      setNote('');
    } else {
      alert('❌ Insufficient Funds or Invalid Input!');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Send Money via UPI</h2>
        <form onSubmit={handlePayment}>
          <input
            type="text"
            placeholder="Enter UPI ID (e.g., user@bank)"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Enter Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Add a note (Optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal ? closeModal : undefined}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendMoney;
