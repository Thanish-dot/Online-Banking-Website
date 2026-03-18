import React, { useContext } from 'react'; // <-- Import useContext
import { TransactionContext } from '../context/TransactionContext'; // <-- Import the context
import Transaction from '../components/Transaction';

function Transactions() {
  // Get the shared transactions list from the context
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="page-container">
      <h1>Transaction History</h1>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the shared list */}
          {transactions.map((t) => (
            <Transaction key={t.id} {...t} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
