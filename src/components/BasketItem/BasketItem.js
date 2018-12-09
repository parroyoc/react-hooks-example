import React from "react";
import './BasketItem.css';

export default function BasketItem({ basketItem, index, removeBasketItem }) {
  const { name, price } = basketItem;
  return (
    <div className="basket-item">
      <div className="basket-item__name">{name}</div>
      <div className="basket-item__price">{price}</div>
      <div>
        <button className="basket-item__remove" onClick={() => removeBasketItem(index)}>drop</button>
      </div>
    </div>
  );
}
