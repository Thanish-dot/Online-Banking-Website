import React from "react";

function LoanCard({ title, rate, tenure, color }) {
  // We can ignore the color prop and use the new .card style
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Interest Rate: {rate}%</p>
      <p>Tenure: {tenure} years</p>
    </div>
  );
}

export default LoanCard;