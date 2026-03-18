import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaRupeeSign, FaSearch } from 'react-icons/fa';
import { TransactionContext } from '../context/TransactionContext';
import './Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { transactions, addTransaction } = useContext(TransactionContext);

  const accounts = [
    { type: "Savings", title: "Primary Savings Account", number: "XXXX XXXX XXXX 1234", balance: "5,40,250.75" },
    { type: "Credit", title: "Nexus Platinum Card", number: "XXXX XXXX XXXX 5678", balance: "Available: 1,50,000.00" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleFundTransfer = () => addTransaction('Fund Transfer', -5000);
  const handleBillPayment = () => addTransaction('Electricity Bill', -1500);
  const handleUpiPayment = () => addTransaction('UPI Payment', -2000);

  return (
    <div className="home-container">

      {/* Banner Slider */}
      <div className="home-banner">
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
        <div className="slide slide4"></div>
      </div>

      <header className="welcome-header">
        <h1>Welcome back, Mohammed</h1>
        <form onSubmit={handleSearch} className="home-search-form">
          <input
            type="text"
            placeholder="Search for services, help, etc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="home-search-input"
          />
          <button type="submit" className="home-search-button">
            <FaSearch />
          </button>
        </form>
      </header>

      <section className="quick-links">
        <Link to="/fund-transfer" onClick={handleFundTransfer} className="quick-link">
          <FaArrowRight /> Fund Transfer
        </Link>
        <Link to="/bill-payments" onClick={handleBillPayment} className="quick-link">
          <FaArrowRight /> Bill Payments
        </Link>
        <Link to="/upi-payment" onClick={handleUpiPayment} className="quick-link">
          <FaArrowRight /> UPI Payment
        </Link>
        <Link to="/investments" className="quick-link">
          <FaArrowRight /> Investments
        </Link>
      </section>

      <section className="accounts-section">
        <h2>Your Accounts & Cards</h2>
        <div className="accounts-grid">
          {accounts.map((account, index) => (
            <div key={index} className="account-card">
              <div className="account-header">
                <h3>{account.title}</h3>
                <span className="account-type">{account.type}</span>
              </div>
              <p className="account-number">{account.number}</p>
              <p className="account-balance">
                {account.type === 'Credit' ? account.balance : `Balance: ₹${account.balance}`}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="transactions-section">
        <h2>Recent Transactions</h2>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 5).map((txn) => (
              <tr key={txn.id}>
                <td>{txn.date}</td>
                <td>{txn.description}</td>
                <td className={txn.amount < 0 ? 'debit' : 'credit'}>
                  <FaRupeeSign /> {txn.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  );
}

export default Home;
