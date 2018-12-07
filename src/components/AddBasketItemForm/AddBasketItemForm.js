import React, { useState } from "react";
import './AddBasketItemForm.css';

export default function AddBasketItemForm({ addBasketItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addBasketItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-basket-item-form">
      <input
        type="text"
        className="add-basket-item-form__input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}