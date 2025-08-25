import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registration successful for ${name} with email ${email}. Please check your email to verify your account.`);
  };

  return (
    <div className="page-container">
      <h1>Create Your Account</h1>
      <form onSubmit={handleRegister}>
        <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder="Create Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
       <p style={{textAlign: 'center', marginTop: '1rem'}}>
          Already have an account? <Link to="/login" style={{color: 'var(--secondary-color)', fontWeight: '600'}}>Login here</Link>
        </p>
    </div>
  );
}

export default Register;