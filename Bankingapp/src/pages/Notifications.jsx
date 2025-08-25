import React from "react";
// CORRECTED IMPORT: Import from the top-level 'react-icons/fa' package.
import { FaBell } from 'react-icons/fa';

function Notifications() {
  const notifications = [
    "Your credit card bill of ₹5,230 is due on 25th August 2025.",
    "Salary of ₹75,000 has been credited to your account.",
    "Your Fixed Deposit account ending in 4321 has matured.",
  ];

  return (
    <div className="page-container">
      <h1>Notifications</h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {notifications.map((note, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#e3f2fd', padding: '1rem', borderRadius: '5px' }}>
            <FaBell style={{ color: 'var(--secondary-color)', fontSize: '1.5rem' }} />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;