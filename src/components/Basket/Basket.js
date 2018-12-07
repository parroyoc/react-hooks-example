import React, {useState} from "react";
import BasketItem from "../BasketItem/BasketItem";
import AddBasketItemForm from "../AddBasketItemForm/AddBasketItemForm";
import './Basket.css';

export default function Basket() {
  // TODO add useReducer. See https://daveceddia.com/usereducer-hook-examples/
  // TODO add a fetch on componentDidMount

  const [basketItems, setBasketItems] = useState([
    {
      name: "Meal deal",
      price: 3.99
    },
    {
      name: "Coffee",
      price: 2.50
    },
    {
      name: "Arduino starter kit",
      price: 82.10
    }
  ]);

  const addBasketItem = text => {
    const newBasketItems = [...basketItems, { text }];
    setBasketItems(newBasketItems);
  };

  const removeBasketItem = index => {
    const newBasketItems = [...basketItems];
    newBasketItems.splice(index, 1);
    setBasketItems(newBasketItems);
  };

  return (
    <div className="basket">
      {basketItems.map((basketItem, index) => (
        <BasketItem
          key={index}
          index={index}
          basketItem={basketItem}
          removeBasketItem={removeBasketItem}
        />
      ))}
      <AddBasketItemForm addBasketItem={addBasketItem} />
    </div>
  );
}
