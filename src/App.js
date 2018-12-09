import React, {useState} from "react";
import Basket from "./components/Basket/Basket";
import RecipientForm from "./components/RecipientForm/RecipientForm";
import Summary from "./components/Summary/Summary";
import basketReducerFactory from './reducers/basket';

import "./App.css";
import AvailableItems from "./components/AvailableItems/AvailableItems";

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