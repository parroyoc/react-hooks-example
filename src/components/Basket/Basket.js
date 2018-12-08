import React, {useState, useEffect} from "react";
import AvailableItems from "../AvailableItems/AvailableItems";
import BasketItem from "../BasketItem/BasketItem";
import API from "../../utils/api";
import './Basket.css';

export default function Basket() {
  // TODO add useReducer. See https://daveceddia.com/usereducer-hook-examples/
  // TODO add a fetch on componentDidMount
  // TODO available items not inside basket

  const [availableItems, setAvailableItems] = useState([]);
  const [basketItems, setBasketItems] = useState([
    {
      name: "Meal deal",
      price: 3.99
    }
  ]);
  useEffect(() => {
    // TODO how to fetch just once?
    API.getShopAvailableItems(setAvailableItems);
  });

  const addItemToBasket = item => {
    const newBasketItems = [...basketItems, item];
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
      <AvailableItems availableItems={availableItems} addItemToBasket={addItemToBasket} />
    </div>
  );
}
