import React from 'react';
import './FAQ.css'; // We'll create a new CSS file for this

function FAQ() {
  const faqs = [
    { q: "How do I reset my online banking password?", a: "You can reset your password by clicking the 'Forgot Password' link on the login page. You will need to verify your identity using your registered mobile number and debit card details." },
    { q: "What are the steps to transfer money to another account?", a: "Navigate to the 'Fund Transfer' section, select or add a beneficiary, enter the amount and remarks, and confirm the transaction with the OTP sent to your mobile number." },
    { q: "How can I contact customer support for an issue?", a: "You can visit the 'Support' page from the main menu and submit a ticket with your query. You can also call our 24/7 helpline number listed on the website." },
    { q: "Is online banking secure with Nexus Bank?", a: "Yes, we use industry-standard 128-bit SSL encryption, two-factor authentication (2FA), and continuous monitoring to ensure your transactions and data are always secure." }
  ];

  return (
    <div className="page-container">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <h3 className="faq-question">{faq.q}</h3>
            <p className="faq-answer">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;