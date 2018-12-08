import React from "react";
import AvailableItem from '../AvailableItem/AvailableItem';
import './AvailableItems.css';

export default function AvailableItems({availableItems = [], addItemToBasket}) {
  return (
    <div className="available-items">
      {availableItems.map((availableItem, index) => (
        <AvailableItem
          key={index}
          index={index}
          availableItem={availableItem}
          addItemToBasket={addItemToBasket}
        />
      ))}
    </div>
  );
}
