import React, {useReducer, useState} from "react";
import Basket from "./components/Basket/Basket";
import RecipientForm from "./components/RecipientForm/RecipientForm";
import Summary from "./components/Summary/Summary";
import basketReducer, { ADD_ITEM, REMOVE_ITEM } from './reducers/basket';

import "./App.css";
import AvailableItems from "./components/AvailableItems/AvailableItems";

function App() {
  const [recipient, setRecipient] = useState({});
  const [basketItems, dispatchBasket] = useReducer(basketReducer, []);

  // NOTE: THESE ACTIONS NEED DISPATCH, SO THE ACTION CREATORS MUST BE DECLARED HERE
  const addItemToBasket = (item) => dispatchBasket({ type: ADD_ITEM, item });
  const removeBasketItem = (index) => dispatchBasket({ type: REMOVE_ITEM, index });

  return (
    <div className="app">
      <AvailableItems addItemToBasket={addItemToBasket} />
      <Basket basketItems={basketItems} removeBasketItem={removeBasketItem}/>
      <RecipientForm setRecipient={setRecipient} />
      <Summary recipient={recipient} basketItems={basketItems} />
    </div>
  );
}

export default App;