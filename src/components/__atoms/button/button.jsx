import "./button.css";

function Button({ onClick, disabled, text }) {
  return (
    <>
      <button className="btn" onClick={onClick} disabled={disabled} >
      {text}
      </button>
    </>
  );
}

export default Button;
