import React from "react";
import "./secendList.css";
import Button from "../../__atoms/button/button";
import DoneImage from "../../../assets/images/done.png"

function SecendList({ onBack }) {
  return (
    <div className="secendbox">
      <div className="color_div">
        <img src={DoneImage} alt="Thank You" />
      </div>
      <div className="heading_secend_box">
        <h1 className="headin">THANK YOU!</h1>
        <p className="para">We’ve added your card details</p>
      </div>
      <Button onClick={onBack} text="Continue"/>
    </div>
  );
}

export default SecendList;
