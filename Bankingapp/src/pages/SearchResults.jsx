import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SearchResults.css';

// Search data - categorized for better results
const searchData = {
  services: [
    { path: '/services', title: 'Online Banking Services', content: 'Access your accounts, transfer funds, pay bills online' },
    { path: '/fund-transfer', title: 'Fund Transfer', content: 'Transfer money to other accounts using NEFT, RTGS, IMPS' },
    { path: '/bill-payments', title: 'Bill Payments', content: 'Pay electricity, water, mobile, and other utility bills' },
    { path: '/upi-payment', title: 'UPI Payments', content: 'Make instant payments using UPI ID or QR code' },
  ],
  accounts: [
    { path: '/profile', title: 'Account Summary', content: 'View your account balance and transaction history' },
    { path: '/transactions', title: 'Transaction History', content: 'Check your recent transactions and statements' },
  ],
  cards: [
    { path: '/cards', title: 'Credit Cards', content: 'Apply for and manage your credit cards' },
    { path: '/cards', title: 'Debit Cards', content: 'Manage your debit card settings and limits' },
  ],
  loans: [
    { path: '/loans', title: 'Personal Loans', content: 'Apply for personal loans with competitive interest rates' },
    { path: '/loans', title: 'Home Loans', content: 'Home loan options with flexible repayment plans' },
    { path: '/loans', title: 'Car Loans', content: 'Finance your new car with our auto loan options' },
  ],
  investments: [
    { path: '/investments', title: 'Fixed Deposits', content: 'Open fixed deposits with attractive interest rates' },
    { path: '/investments', title: 'Mutual Funds', content: 'Invest in mutual funds through our platform' },
  ],
  support: [
    { path: '/faq', title: 'Frequently Asked Questions', content: 'Find answers to common banking questions' },
    { path: '/support', title: 'Customer Support', content: 'Contact our customer support team for assistance' },
  ]
};

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      
      // Simulate API call delay
      const timer = setTimeout(() => {
        const filteredResults = [];
        
        // Search through all categories
        Object.keys(searchData).forEach(category => {
          searchData[category].forEach(item => {
            if (
              item.title.toLowerCase().includes(query.toLowerCase()) || 
              item.content.toLowerCase().includes(query.toLowerCase()) ||
              category.toLowerCase().includes(query.toLowerCase())
            ) {
              filteredResults.push({ ...item, category });
            }
          });
        });
        
        setResults(filteredResults);
        setIsLoading(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!query) {
    return (
      <div className="search-results-container">
        <div className="search-results-header">
          <h1>Search</h1>
          <p>Enter a search term to find banking services and information</p>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results-container">
      <div className="search-results-header">
        <h1>Search Results for "{query}"</h1>
        <p>{results.length} results found</p>
      </div>
      
      {isLoading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Searching...</p>
        </div>
      ) : results.length > 0 ? (
        <div className="search-results-list">
          {results.map((result, index) => (
            <div key={index} className="search-result-item">
              <span className="result-category">{result.category}</span>
              <h3>
                <Link to={result.path}>{result.title}</Link>
              </h3>
              <p>{result.content}</p>
              <Link to={result.path} className="search-result-link">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h2>No results found</h2>
          <p>We couldn't find any results for "{query}". Try different keywords or browse our services.</p>
          <div className="suggestions">
            <h3>Popular Searches:</h3>
            <ul>
              <li><Link to="/services">Online Banking</Link></li>
              <li><Link to="/loans">Loan Options</Link></li>
              <li><Link to="/cards">Credit Cards</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResults;