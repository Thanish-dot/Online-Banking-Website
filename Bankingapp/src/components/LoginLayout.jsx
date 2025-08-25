import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Login.css';

function LoginLayout({ children, title, description }) {
    return (
        <div className="login-layout">
            <div className="login-header">
                <Link to="/" className="login-logo">
                    <h1 className="bank-name">Nexus Bank</h1>

                </Link>
            </div>

            <div className="login-content">
                <div className="login-card">
                    <div className="login-card-header">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    {children}
                </div>
            </div>

            <div className="login-footer">
                <p>New to Nexus Bank? <Link to="/register">Register Now</Link></p>
                <div className="login-links">
                    <Link to="/">Home</Link>
                    <Link to="/support">Support</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginLayout;
