import React from 'react';
import './Investments.css'; // Import CSS

function Investments() {
  const investments = [
    { type: "Fixed Deposit", amount: 50000, rate: "6.5%" },
    { type: "Mutual Fund (Nifty 50 Index)", amount: 25000, rate: "12.8% (YTD)" },
    { type: "Public Provident Fund (PPF)", amount: 70000, rate: "7.1%" },
  ];

  return (
    <div className="investments">
      <h2>Your Investments</h2>
      <ul className="investments-container">
        {investments.map((inv, index) => (
          <li key={index} className="investment-card">
            <h3>{inv.type}</h3>
            <p><strong>Amount Invested:</strong> ₹{inv.amount.toLocaleString('en-IN')}</p>
            <p><strong>Interest/Return Rate:</strong> {inv.rate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Investments;
