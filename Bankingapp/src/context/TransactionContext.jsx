import React, { createContext, useState } from 'react';

const initialTransactions = [
    { id: 1, date: '2025-08-18', description: 'Coffee Shop', amount: -350 },
    { id: 2, date: '2025-08-17', description: 'Salary Credit', amount: 75000 },
];

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const addTransaction = (description, amount) => {
    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      description,
      amount,
    };
    setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
