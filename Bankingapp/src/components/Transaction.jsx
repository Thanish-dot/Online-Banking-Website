import React from "react";

/**
 * Renders a single row in the transactions table.
 * This version is extra safe to prevent any possible crashes.
 */
function Transaction(props) {
  // Use default values to ensure nothing is undefined
  const date = props.date || 'No Date';
  const description = props.description || 'No Description';
  const amount = props.amount;

  let formattedAmount = 'N/A';
  let amountColor = '#333'; // Default color

  // Only format the amount if it is a valid number
  if (typeof amount === 'number') {
    formattedAmount = amount.toLocaleString('en-IN', { 
      style: 'currency', 
      currency: 'INR' 
    });
    
    // Set color based on the amount
    amountColor = amount < 0 ? "#c0392b" : "#27ae60";
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td style={{ color: amountColor, fontWeight: '600' }}>
        {formattedAmount}
      </td>
    </tr>
  );
}

export default Transaction;
