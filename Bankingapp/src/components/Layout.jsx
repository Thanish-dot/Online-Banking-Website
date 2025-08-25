import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header style={{ background: "#004aad", padding: "10px" }}>
        <nav style={{ display: "flex", gap: "15px" }}>
          <Link to="/" style={{ color: "white" }}>Home</Link>
          <Link to="/services" style={{ color: "white" }}>Services</Link>
          <Link to="/wallet" style={{ color: "white" }}>Wallet</Link>
          <Link to="/cards" style={{ color: "white" }}>Cards</Link>
          <Link to="/login" style={{ color: "white" }}>Login</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet /> {/* ✅ all pages will be rendered here */}
      </main>
    </div>
  );
}

export default Layout;
