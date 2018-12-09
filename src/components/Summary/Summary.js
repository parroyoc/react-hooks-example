import React, { useMemo } from "react";
import './Summary.css';

export default function Summary({recipient, basketItems}) {
  const totalPrice = useMemo(
    () => {
      const total = basketItems.reduce((sum, item) => sum + item.price, 0);
      console.log('recalculating totalPrice', total);
      return total;
    },
    [basketItems]
  );

  return (
    <div className="summary">
      <h2>Summary:</h2>

      <h3>Recipient:</h3>
      {JSON.stringify(recipient)}

      <h3>Basket items:</h3>
      {JSON.stringify(basketItems)}

      <h3>Review and pay:</h3>
      <h4>{`Total: ${totalPrice}`}</h4>
      <button className="summary__submit" type="submit">pay</button>
    </div>
  );
}
