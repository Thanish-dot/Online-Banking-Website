// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoginLayout from '../components/LoginLayout';
import './Login.css';

function Login() {
  return (
    <LoginLayout
      title="Online Banking Login"
      description="Choose your banking type to access your accounts"
    >
      <div className="login-options">
        <div className="login-option">
          <div className="option-content">
            <h3>Personal Banking</h3>
            <p>Access your accounts, transfer funds, and manage your finances securely</p>
          </div>
          <Link to="/personal-login" className="option-button">
            Login to Personal Banking
          </Link>
        </div>

        <div className="login-option">
          <div className="option-content">
            <h3>Corporate Banking</h3>
            <p>Manage your business finances with our advanced and secure platform</p>
          </div>
          <Link to="/corporate-login" className="option-button">
            Login to Corporate Banking
          </Link>
        </div>
      </div>
    </LoginLayout>
  );
}

export default Login;