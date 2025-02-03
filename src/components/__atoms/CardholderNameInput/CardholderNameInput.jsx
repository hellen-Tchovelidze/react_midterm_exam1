import React from "react";

function CardholderNameInput({ name, onChange, error }) {
  return (
    <div className="bio">
      <h1 className="list_text">Cardholder Name</h1>
      <input
        type="text"
        placeholder="e.g. Jane Appleseed"
        className="input"
        value={name}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default CardholderNameInput;
