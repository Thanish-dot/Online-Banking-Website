// Cards.jsx
import React from "react";
import "./Cards.css";

function Cards() {
  const cardsData = [
    { 
      title: "Visa", 
      number: "**** 1234 **** 5678", 
      type: "Credit", 
      balance: "1,50,000", 
      holder: "MOHAMMED TANISH",
      color: "linear-gradient(135deg, #005bea, #00c6fb)",
      logo: "Visa"
    },
    { 
      title: "MasterCard", 
      number: "**** 4321 **** 8765", 
      type: "Debit", 
      balance: "5,40,250", 
      holder: "MOHAMMED TANISH",
      color: "linear-gradient(135deg, #f7971e, #ffd200)",
      logo: "Mastercard"
    },
    { 
      title: "Rupay Platinum", 
      number: "**** 9876 **** 5432", 
      type: "Credit", 
      balance: "75,000", 
      holder: "MOHAMMED TANISH",
      color: "linear-gradient(135deg, #283c86, #45a247)",
      logo: "RuPay"
    }
  ];

  return (
    <div className="cards-page-container">
      <h1 className="cards-page-title">Your Cards</h1>
      <div className="cards-list">
        {cardsData.map((card, idx) => (
          <div key={idx} className="credit-card" style={{ background: card.color }}>
            <div className="card-header">
              <div className="card-type">{card.type}</div>
              <div className="card-logo">{card.logo}</div>
            </div>
            <div className="card-number">{card.number}</div>
            <div className="card-balance">Balance: ₹{card.balance}</div>
            <div className="card-holder">{card.holder}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;