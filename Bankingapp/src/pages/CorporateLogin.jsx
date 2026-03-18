import React from 'react';
import './LoginForm.css';

function CorporateLogin({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here
    onLogin(); // navigate to corporate dashboard
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Corporate Banking Login</h2>
        <p>Manage your corporate accounts and services securely</p>
        <form onSubmit={handleSubmit}>
          <label>Company ID / Username</label>
          <input type="text" placeholder="Enter your company ID or username" />

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

export default CorporateLogin;
