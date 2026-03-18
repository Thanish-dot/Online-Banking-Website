import React from 'react';

function Card({ title, number, type, balance }) {
  return (
    <div className="card">
      <h2>{title} ({type})</h2>
      <p style={{fontSize: '1.2rem', margin: '0.5rem 0', letterSpacing: '1px'}}>{number}</p>
      <p style={{fontWeight: '600', fontSize: '1.1rem'}}>Balance: ₹{balance}</p>
    </div>
  );
}

export default Card;