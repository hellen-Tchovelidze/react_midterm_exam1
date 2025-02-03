import React from "react";
import "./ExpirationDateInput.css"
function ExpirationDateInput({ expirationDate, onChange }) {
  return (
    <div className="registratdata">
    <input
      type="number"
      className="mm_yy"
      placeholder="MM"
      value={expirationDate.split("/")[0]}
      onChange={(event) => onChange(event, "MM")}
    />
    <input
      type="number"
      className="mm_yy"
      placeholder="YY"
      value={expirationDate.split("/")[1]}
      onChange={(event) => onChange(event, "YY")}
    />
  </div>
  );
}

export default ExpirationDateInput;
