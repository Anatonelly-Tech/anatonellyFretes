import "../styles/components/Button.css";
// eslint-disable-next-line react/prop-types
const Button = ({ name, type, functionButton }) => {
  return (
    <div>
      <button
        className="ButtonComponent"
        role="button"
        onClick={functionButton}
        type={type}
      >
        <span className="text">{name}</span>
      </button>
    </div>
  );
};

export default Button;
