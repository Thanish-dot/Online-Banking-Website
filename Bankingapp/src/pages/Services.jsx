import React from "react";
import { FaUniversity, FaMobileAlt, FaExchangeAlt, FaPiggyBank, FaCreditCard } from 'react-icons/fa';

function Services() {
  const services = [
    { name: "Online Account Management", icon: <FaUniversity /> },
    { name: "Mobile Banking App", icon: <FaMobileAlt /> },
    { name: "NEFT/RTGS/IMPS Money Transfer", icon: <FaExchangeAlt /> },
    { name: "Loan & Credit Services", icon: <FaPiggyBank /> },
    { name: "Debit & Credit Card Services", icon: <FaCreditCard /> },
  ];

  return (
    <div className="page-container">
      <h1>Our Services</h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {services.map((s, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#f9f9f9', padding: '1rem', borderRadius: '5px' }}>
            <span style={{color: 'var(--primary-color)', fontSize: '1.5rem'}}>{s.icon}</span>
            <span>{s.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;