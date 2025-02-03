import Background from "../../__molecules/Background/Background";
import CardForCVC from "../../__molecules/CardForCVC/CardForCVC";
import CardForNums from "../../__molecules/CardForNums/CardForNums";
import "./Cards.css"

function Cards({ text, name, expirationDate, cvc }) {
  return (
    <>
     <div className="bc">
     <Background />
      <CardForNums text={text} name={name} expirationDate={expirationDate} />
      <CardForCVC cvc={cvc} />
     </div>
    </>
  );
}

export default Cards;
