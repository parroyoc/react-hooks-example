import React, {useEffect, useState} from "react";
import AvailableItem from '../AvailableItem/AvailableItem';
import API from "../../utils/api";
import './AvailableItems.css';

export default function AvailableItems({addItemToBasket}) {
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    console.log('getShopAvailableItems');
    API.getShopAvailableItems(setAvailableItems);
  }, []); // passing empty array means the effect doesn't watch any props and only runs on Mount

  return (
    <div className="available-items">
      <h2>Available items:</h2>
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
