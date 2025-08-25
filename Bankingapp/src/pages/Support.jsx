import React, { useState } from "react";

function Support() {
  const [message, setMessage] = useState("");

  const submitTicket = (e) => {
    e.preventDefault();
    alert("Support request submitted successfully! Our team will get back to you within 24 hours.");
    setMessage("");
  };

  return (
    <div className="page-container">
      <h1>Customer Support</h1>
      <p>Have an issue? Fill out the form below to submit a support ticket.</p>
      <form onSubmit={submitTicket}>
        <textarea
          placeholder="Please describe your issue in detail..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="6"
          required
        />
        <button type="submit" className="btn btn-primary">Submit Ticket</button>
      </form>
    </div>
  );
}

export default Support;