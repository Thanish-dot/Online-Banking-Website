import React, { useState } from "react";

function Loans() {
  const [loanAmount, setLoanAmount] = useState("");
  const [applied, setApplied] = useState(false);

  const applyLoan = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="page-container">
      <h1>Loan Services</h1>
      {applied ? (
        <div style={{ padding: '2rem', background: '#e3f2fd', borderRadius: '8px', textAlign: 'center' }}>
          <h3>✅ Application Submitted!</h3>
          <p>Your loan request for ₹{parseFloat(loanAmount).toLocaleString('en-IN')} is under review. We will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={applyLoan}>
          <p>Enter the desired loan amount to begin your application.</p>
          <input
            type="number"
            placeholder="Enter Loan Amount (₹)"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Apply for Loan</button>
        </form>
      )}
    </div>
  );
}

export default Loans;