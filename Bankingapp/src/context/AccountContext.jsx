import React, { createContext, useState } from "react";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [balance, setBalance] = useState(5000); // example balance
  const [transactions, setTransactions] = useState([]);

  const sendMoney = (recipient, amount, note) => {
    const amt = parseFloat(amount);

    if (!recipient || isNaN(amt) || amt <= 0) return false;

    if (balance >= amt) {
      setBalance(balance - amt);

      // ✅ Add to transactions history
      setTransactions((prev) => [
        {
          id: Date.now(),
          type: "debit",
          recipient,
          amount: amt,
          note,
          date: new Date().toLocaleString(),
        },
        ...prev,
      ]);

      return true;
    }
    return false;
  };

  return (
    <AccountContext.Provider value={{ balance, transactions, sendMoney }}>
      {children}
    </AccountContext.Provider>
  );
};
