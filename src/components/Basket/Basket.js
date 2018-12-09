import React, {useState, useEffect, useReducer} from "react";
import AvailableItems from "../AvailableItems/AvailableItems";
import BasketItem from "../BasketItem/BasketItem";
import './Basket.css';

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

export default function Basket() {
  // TODO available items not inside basket
  const [basketItems, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ADD_ITEM: {
        return [...state, action.item];
      }
      case REMOVE_ITEM: {
        const newBasketItems = [...state];
        newBasketItems.splice(action.index, 1);
        return newBasketItems;
      }
      default: return state;
    }
  }, []);

  // NOTE: THEY NEED DISPATCH, SO THESE ACTION CREATORS MUST BE IN HERE
  const addItemToBasket = (item) => dispatch({ type: ADD_ITEM, item });
  const removeBasketItem = (index) => dispatch({ type: REMOVE_ITEM, index });

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
      <AvailableItems addItemToBasket={addItemToBasket} />
    </div>
  );
}
