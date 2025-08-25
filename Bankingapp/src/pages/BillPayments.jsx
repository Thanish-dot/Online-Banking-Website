import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { useNavigate } from 'react-router-dom';

function BillPayments() {
  const [bills] = useState([
    { id: 1, type: "Electricity" },
    { id: 2, type: "Mobile Recharge" },
  ]);
  const [amounts, setAmounts] = useState({});
  const [isPaying, setIsPaying] = useState(false);
  const [error, setError] = useState(null);
  const { addTransaction } = useContext(TransactionContext);
  const navigate = useNavigate();

  const handleAmountChange = (id, value) => {
    setAmounts((prev) => ({ ...prev, [id]: value }));
  };

  const payBill = async (bill, method) => {
    const amount = amounts[bill.id];
    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setIsPaying(true);
    setError(null);
    try {
      // Simulate API call (replace with actual payment API)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      addTransaction(`${bill.type} Bill (${method})`, -amount);
      alert(`${bill.type} bill of ₹${amount} paid successfully via ${method}!`);

      navigate("/transactions"); // Redirect to transactions page
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="page-container">
      <h1>Bill Payments</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {bills.map((bill) => (
        <div key={bill.id} className="bill-card">
          <p><strong>{bill.type}</strong></p>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amounts[bill.id] || ""}
            onChange={(e) => handleAmountChange(bill.id, e.target.value)}
          />
          <div className="payment-methods">
            <button
              className="btn btn-primary"
              onClick={() => payBill(bill, "UPI")}
              disabled={isPaying}
            >
              {isPaying ? "Processing..." : "Pay via UPI"}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => payBill(bill, "Card")}
              disabled={isPaying}
            >
              {isPaying ? "Processing..." : "Pay via Card"}
            </button>
            <button
              className="btn btn-success"
              onClick={() => payBill(bill, "Wallet")}
              disabled={isPaying}
            >
              {isPaying ? "Processing..." : "Pay via Wallet"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BillPayments;
