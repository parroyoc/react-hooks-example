import React, { useContext, useMemo } from "react";
import ContentContext from '../../utils/ContentContext';
import './Summary.css';

export default function Summary({recipient, basketItems}) {
  const messages = useContext(ContentContext);
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
      <h2>{messages.summaryTitle}</h2>

      <h3>{messages.summaryRecipient}</h3>
      {JSON.stringify(recipient)}

      <h3>Basket items:</h3>
      {JSON.stringify(basketItems)}

      <h3>Review and pay:</h3>
      <h4>{`Total: ${totalPrice}`}</h4>
      <button className="summary__submit" type="submit">pay</button>
    </div>
  );
}
