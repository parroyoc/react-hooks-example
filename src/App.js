import React, {useState} from "react";
import AvailableItems from "./components/AvailableItems/AvailableItems";
import Basket from "./components/Basket/Basket";
import RecipientForm from "./components/RecipientForm/RecipientForm";
import Summary from "./components/Summary/Summary";
import basketReducerFactory from './reducers/basket';

import "./App.css";

function App() {
  const [recipient, setRecipient] = useState({});
  const { basketItems, basketActions } = basketReducerFactory();

  return (
    <div className="app">
      <AvailableItems addItemToBasket={basketActions.addItem} />
      <Basket basketItems={basketItems} removeBasketItem={basketActions.removeItem}/>
      <RecipientForm setRecipient={setRecipient} />
      <Summary recipient={recipient} basketItems={basketItems} />
    </div>
  );
}

export default App;