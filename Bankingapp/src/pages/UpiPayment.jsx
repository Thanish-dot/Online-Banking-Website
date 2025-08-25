// UpiPayment.js
import React, { useState, useContext } from "react";
import { FaArrowUp, FaArrowDown, FaQrcode } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";
import { TransactionContext } from "../context/TransactionContext";
import "./UpiPayment.css";

function UpiPayment() {
  const [balance, setBalance] = useState(85000);
  const [showQR, setShowQR] = useState(false);
  const [showSendForm, setShowSendForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [upiID, setUpiID] = useState("");
  const [hasTransactions, setHasTransactions] = useState(false); // ✅ NEW

  const { transactions, addTransaction } = useContext(TransactionContext);

  // Default UPI details
  const myUpiID = "mohammed@nexus";
  const payeeName = "Mohammed";

  // Dynamic UPI link
  const upiPaymentLink = `upi://pay?pa=${myUpiID}&pn=${encodeURIComponent(
    payeeName
  )}&am=${amount || ""}&tn=${encodeURIComponent(note || "")}&cu=INR`;

  // Handle sending money
  const handleSendMoney = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Enter a valid amount to send");
      return;
    }
    if (!upiID.trim()) {
      alert("Enter a valid UPI ID");
      return;
    }

    // Deduct balance
    setBalance((prev) => prev - parseFloat(amount));

    // Add transaction
    addTransaction(`Sent to ${upiID} - ${note || "UPI Payment"}`, -parseFloat(amount));

    // ✅ Mark that we now have transactions
    setHasTransactions(true);

    // Reset form
    setAmount("");
    setNote("");
    setUpiID("");
    setShowSendForm(false);
  };

  return (
    <div className="page-container upi-page">
      <div className="balance-card">
        <h3>Current Balance</h3>
        <h1>
          {balance.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </h1>
        <p>Your UPI ID: {myUpiID}</p>
      </div>

      <div className="action-buttons">
        <button className="btn btn-primary" onClick={() => setShowSendForm(!showSendForm)}>
          <FaArrowUp /> Send Money
        </button>
        <button className="btn btn-secondary">
          <FaArrowDown /> Receive Money
        </button>
        <button className="btn btn-secondary" onClick={() => setShowQR(!showQR)}>
          <FaQrcode /> {showQR ? "Hide QR" : "Show QR"}
        </button>
      </div>

      {/* Send Money Form */}
      {showSendForm && (
        <div className="send-money-form">
          <h3>Send Money</h3>
          <input
            type="text"
            placeholder="Enter UPI ID (e.g., friend@upi)"
            value={upiID}
            onChange={(e) => setUpiID(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button className="btn-confirm" onClick={handleSendMoney}>
            Confirm & Send
          </button>
        </div>
      )}

      {/* QR Code Section */}
      {showQR && (
        <div className="qr-code-container">
          <h3>Scan to Pay</h3>
          <div className="qr-inputs">
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <QRCodeCanvas value={upiPaymentLink} size={200} includeMargin={true} />
          <p>{myUpiID}</p>
        </div>
      )}

      {/* Recent Transactions - ✅ Only show after first transaction */}
      {hasTransactions && transactions.length > 0 && (
        <div className="recent-transactions">
          <h2>Recent UPI Transactions</h2>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td style={{ color: t.amount < 0 ? "#c0392b" : "#27ae60" }}>
                    {t.amount < 0 ? `-₹${Math.abs(t.amount)}` : `+₹${t.amount}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UpiPayment;
