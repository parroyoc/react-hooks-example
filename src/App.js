import React, {useState} from "react";
import Basket from "./components/Basket/Basket";
import RecipientForm from "./components/RecipientForm/RecipientForm";
import Summary from "./components/Summary/Summary";

import "./App.css";

function App() {
  const [recipient, setRecipient] = useState({});
  return (
    <div className="app">
      <Basket />
      <RecipientForm setRecipient={setRecipient} />
      <Summary recipient={recipient} />
    </div>
  );
}

export default App;