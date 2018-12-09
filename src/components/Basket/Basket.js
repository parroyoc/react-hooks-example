import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import './Basket.css';

export default function Basket({basketItems, removeBasketItem}) {
  return (
    <div className="basket">
      <h2>Basket:</h2>
      {basketItems.map((basketItem, index) => (
        <BasketItem
          key={index}
          index={index}
          basketItem={basketItem}
          removeBasketItem={removeBasketItem}
        />
      ))}
    </div>
  );
}
