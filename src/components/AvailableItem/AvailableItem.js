import React from "react";
import './AvailableItem.css';

export default function AvailableItem({availableItem, addItemToBasket}) {
  const { name, price } = availableItem;
  return (
    <div className="available-item">
      <div className="available-item__name">{name}</div>
      <div className="available-item__price">{price}</div>
      <div>
        <button className="available-item__pick" onClick={() => addItemToBasket(availableItem)}>pick</button>
      </div>
    </div>
  );
}
