import React from "react";

function FormError({ error }) {
  return error ? <p className="error">{error}</p> : null;
}

export default FormError;
