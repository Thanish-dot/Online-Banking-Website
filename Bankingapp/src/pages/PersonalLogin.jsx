import React from 'react';
import './LoginForm.css';

function PersonalLogin({ onLogin }) { // Accept onLogin prop
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here
    onLogin(); // navigate to personal dashboard
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Personal Banking Login</h2>
        <p>Access your accounts, transfer funds, and manage your finances securely</p>
        <form onSubmit={handleSubmit}>
          <label>Username/Customer ID</label>
          <input type="text" placeholder="Enter your username or customer ID" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default PersonalLogin;
