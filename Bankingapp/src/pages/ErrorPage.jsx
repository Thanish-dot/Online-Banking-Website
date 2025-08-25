// CorporateLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginForm.css';

function CorporateLogin() {
  const [companyId, setCompanyId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Simple validation
      if (!companyId.trim() || !username.trim() || !password.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Authentication
      const isAuthenticated = await login(username, password, 'corporate', companyId);
      
      if (isAuthenticated) {
        navigate('/corporate-banking');
      } else {
        throw new Error('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box corporate-form">
        <h2>Corporate Banking Login</h2>
        <p>Manage your business finances with our advanced and secure platform</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <label>Company ID</label>
          <input 
            type="text" 
            placeholder="Enter your company ID" 
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
            disabled={isLoading}
            required
          />

          <label>Username</label>
          <input 
            type="text" 
            placeholder="Enter your username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            required
          />

          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
          />

          <div className="form-options">
            <label>
              <input type="checkbox" disabled={isLoading} /> Remember me
            </label>
            <a href="#forgot">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="register-link">
          <p>Need corporate banking? <a href="/support">Contact us</a></p>
        </div>
      </div>
    </div>
  );
}

export default CorporateLogin;