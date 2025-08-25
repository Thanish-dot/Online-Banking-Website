import React, { useState } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="page-container">
      <h1>Settings</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="checkbox"
          id="darkMode"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          style={{ width: 'auto' }}
        />
        <label htmlFor="darkMode">Enable Dark Mode</label>
      </div>
      <p style={{marginTop: '1rem'}}>🔑 Change Password | 🔐 Manage Security Settings</p>
    </div>
  );
}

export default Settings;