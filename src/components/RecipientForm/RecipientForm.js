import React, { useState } from "react";
import './RecipientForm.css';

export default function RecipientForm({ setRecipient }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (name.length > 0 && address.length > 0) {
      setRecipient({name, address});
      setError("");
    }
    else setError("Please enter all values")
  };

  const errorMessage = error === "" ? null : <span className="recipient-form__error">{error}</span>;

  return (
    <form onSubmit={handleSubmit} className="recipient-form">
      <h2>Recipient:</h2>
      {errorMessage}
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        className="recipient-form__input"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="address">Address</label>
      <input
        id="address"
        type="text"
        className="recipient-form__input"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <button className="recipient-form__submit" type="submit">save</button>
    </form>
  );
}