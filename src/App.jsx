import React, { useState } from "react";
import "./App.css";
import Cards from "./components/__organism/Cards/Caeds";
import RegisterList from "./components/__organism/RegisterList/RegisterList";
import SecendList from "./components/__organism/secndList/secendList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvcValue, setCvcValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleBack = () => {
    setSubmitted(false);
  };

  return (
    <>
      <div className="conteiner_ro">
        <Cards
          text={inputValue}
          name={nameValue}
          expirationDate={expirationDate}
          cvc={cvcValue}
        />
        {submitted ? (
          <SecendList onBack={handleBack} namebtn="name" />
        ) : (
          <RegisterList
            setInputValue={setInputValue}
            setNameValue={setNameValue}
            setExpirationDate={setExpirationDate}
            setCvcValue={setCvcValue}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
}

export default App;
