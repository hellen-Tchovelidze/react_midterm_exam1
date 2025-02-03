import React from "react";
import "./CVCInput.css"
function CVCInput({ cvc, onChange }) {
  return (
    <div>
      <input
        type="number"
        className="year"
        placeholder="e.g. 123"
        value={cvc}
        onChange={onChange}
      />
    </div>
  );
}

export default CVCInput;
