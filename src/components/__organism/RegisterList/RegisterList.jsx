import React, { useState, useEffect } from "react";
import "./RegisterList.css";
import Button from "../../__atoms/button/button";
import CardholderNameInput from "../../__atoms/CardholderNameInput/CardholderNameInput";
import CardNumberInput from "../../__atoms/CardNumberInput/CardNumberInput";
import ExpirationDateInput from "../../__atoms/ExpirationDateInput/ExpirationDateInput";
import CVCInput from "../../__atoms/CVCInput/CVCInput";
import FormError from "../../__atoms/FormError/FormError";

function RegisterList({
  setInputValue,
  setNameValue,
  setExpirationDate,
  setCvcValue,
  onSubmit,
}) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDateState] = useState("00/00");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    const nameInput = event.target.value;
    setName(nameInput);

    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(nameInput)) {
      setError("გთხოვთ შეიყვანოთ მხოლოდ ასოები და whitespace");
      return;
    }
    if (nameInput.length > 20) {
      setError("სახელი უნდა შედგებოდეს არაუმეტეს 20 სიმბოლოსა");
      event.target.classList.add("error_border");
    } else {
      setError("");
    }
  };

  const handleCardNumberChange = (event) => {
    let cardInput = event.target.value.replace(/\s/g, "");

    if (!/^\d*$/.test(cardInput)) {
      setError("გთხოვთ შეიყვანოთ მხოლოდ ციფრები");
      return;
    }

    if (cardInput.length > 16) {
      setError("ბარათის ნომერი უნდა იყოს 16 ციფრი");
      return;
    }

    const formattedInput = cardInput.match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(formattedInput);
    setError("");
  };

  const handleExpirationChange = (event, type) => {
    let value = event.target.value;
    if (!/^\d{0,2}$/.test(value)) {
      return;
    }

    if ( type === "MM" && parseInt(value) > 12) {
      return;
    }
   
    setExpirationDateState((prev) => {
      const [mm, yy] = prev.split("/").map((val) => val || "00");
      return type === "MM"
        ? `${value.padStart(2, "0")}/${yy}`
        : `${mm}/${value.padStart(2, "0")}`;
    });
  };

  const handleCvcChange = (event) => {
    let cvc = event.target.value;

    if (!/^\d{0,4}$/.test(cvc)) {
      return;
    }

    setCvc(cvc);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !cardNumber || !expirationDate || !cvc) {
      setError("გთხოვთ შეავსოთ ყველა ველი");
      return;
    }
    setInputValue(cardNumber);
    setNameValue(name);
    setExpirationDate(expirationDate);
    setCvcValue(cvc);

    onSubmit();
  };

  useEffect(() => {
    setNameValue(name);
    setInputValue(cardNumber);
    setExpirationDate(expirationDate);
    setCvcValue(cvc);
  }, [
    name,
    cardNumber,
    expirationDate,
    cvc,
    setNameValue,
    setInputValue,
    setExpirationDate,
    setCvcValue,
  ]);

  return (
    <form className="conte" onSubmit={handleSubmit}>
      <div className="boxx">
        <CardholderNameInput
          name={name}
          onChange={handleNameChange}
          error={error}
        />
        <CardNumberInput
          cardNumber={cardNumber}
          onChange={handleCardNumberChange}
          error={error}
        />
        <div className="headind_listreg">
          <h1 className="list_text">Exp. Date (MM/YY)</h1>
          <h1 className="list_text">CVC</h1>
        </div>
        <div className="registratdata">
          <ExpirationDateInput
            expirationDate={expirationDate}
            onChange={handleExpirationChange}
          />
          <CVCInput cvc={cvc} onChange={handleCvcChange} />
        </div>

        <FormError error={error} />
        <Button type="submit" text="Confirm"/>
      </div>
    </form>
  );
}

export default RegisterList;
