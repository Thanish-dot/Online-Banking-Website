import React, { useState } from "react";
import WalletButtons from "../components/WalletButtons";

function Wallet() {
  const [balance, setBalance] = useState(10000);

  return (
    <div className="page-container">
      <h1>Wallet Balance: ₹{balance.toLocaleString('en-IN')}</h1>
      <p>Use the buttons below for quick deposits or withdrawals.</p>
      <WalletButtons balance={balance} setBalance={setBalance} />
    </div>
  );
}

export default Wallet;