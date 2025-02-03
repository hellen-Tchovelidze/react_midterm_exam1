import React from "react";
import "./CardNumberInput.css"
function CardNumberInput({ cardNumber, onChange, error }) {
  return (
    <div className="bio">
      <h1 className="list_text">Card Number</h1>
      <input
        type="text"
        value={cardNumber}
        onChange={onChange}
        placeholder="e.g. 1234 5678 9123 0000"
        className="input"
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default CardNumberInput;
