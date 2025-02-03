import "./CardForCVC.css";
import grayline from "../../../assets/images/lineGray.png";

function CardForCVC({ cvc }) {
  return (
    <div className="CardForcvc_div">
      <div className="blackline"></div>
      <div className="gray_line">
        <p className="cvc_num">{cvc || "000"}</p>
      </div>
      <div>
        <img src={grayline} alt="" />
      </div>
    </div>
  );
}

export default CardForCVC;
