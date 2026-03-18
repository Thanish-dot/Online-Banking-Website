import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { useNavigate } from 'react-router-dom';

function FundTransfer() {
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [isTransferring, setIsTransferring] = useState(false);
  const [error, setError] = useState(null);
  const { addTransaction } = useContext(TransactionContext);
  const navigate = useNavigate();

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (!toAccount || !amount || amount <= 0) {
      setError('Invalid account or amount.');
      return;
    }

    setIsTransferring(true);
    setError(null);
    try {
      // Simulate API call (replace with actual transfer API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      addTransaction(`Transfer to ${toAccount}`, -amount);
      alert(`₹${amount} transferred to ${toAccount} successfully!`);
      navigate('/transactions');
    } catch (err) {
      setError('Transfer failed. Please try again.');
    } finally {
      setIsTransferring(false);
    }
  };

  return (
    <div className="page-container">
      <h1>Fund Transfer</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="Beneficiary Account Number"
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          required
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isTransferring}
        >
          {isTransferring ? 'Transferring...' : 'Transfer Now'}
        </button>
      </form>
    </div>
  );
}

export default FundTransfer;