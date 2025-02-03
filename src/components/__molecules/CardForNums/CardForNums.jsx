import CardName from "../../__atoms/CardName/CardName";
import "./CardForNums.css";
import { useState } from "react";

function CardForNums({ text, name, expirationDate }) {
  return (
    <div className="CardForNums_div">
      <div className="circle_conteiner">
        <div className="circle"></div>
        <div className="circle_trans"></div>
      </div>
      <p className="number_cards">{text ? text : "0000 0000 0000 0000"}</p>
      <CardName name={name} expirationDate={expirationDate} />
    </div>
  );
}

export default CardForNums;
