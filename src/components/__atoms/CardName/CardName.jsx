import "./CardName.css";

function CardName({ name, expirationDate }) {
  return (
    <div className="cardname">
      <h1 className="name_heading">{name || "JANE APPLESEED"}</h1>
      <p className="name_num">{expirationDate || "00/00"}</p>
    </div>
  );
}

export default CardName;
