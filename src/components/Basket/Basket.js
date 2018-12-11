import React, {useContext} from "react";
import BasketItem from "../BasketItem/BasketItem";
import ContentContext from "../../utils/ContentContext";
import './Basket.css';

export default function Basket({basketItems, removeBasketItem}) {
  const messages = useContext(ContentContext);

  return (
    <div className="basket">
      <h2>{messages.basketTitle}</h2>
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
