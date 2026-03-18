import React from 'react';

function WalletButtons({ balance, setBalance }) {
  return (
    <div className="button-group" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
      <button className="btn btn-primary" onClick={() => setBalance(balance + 1000)}>Deposit ₹1000</button>
      <button
        className="btn btn-primary"
        onClick={() => {
          if (balance >= 500) setBalance(balance - 500);
          else alert("Low balance!");
        }}
      >
        Withdraw ₹500
      </button>
    </div>
  );
}

export default WalletButtons;