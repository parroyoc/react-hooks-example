import React from "react";
import './Summary.css';

export default function Summary({recipient, basketItems}) {
  return (
    <div className="summary">
      <h2>Summary:</h2>

      <h3>Recipient:</h3>
      {JSON.stringify(recipient)}

      <h3>Basket items:</h3>
      {JSON.stringify(basketItems)}

      <h3>Review and pay:</h3>
      <button className="summary__submit" type="submit">pay</button>
    </div>
  );
}
