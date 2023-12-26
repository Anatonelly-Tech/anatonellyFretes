import React from "react";
import "../styles/components/InputRadio.css";

const InputRadio = ({
  name,
  id,
  title,
  tituloRadios,
  direction,
  selected,
  onChange,
}) => {
  const createRadio = (name, id, title) => {
    const radioArray = [];
    for (let i = 0; i < id.length; i++) {
      radioArray.push(
        <label key={id[i]} className="labelRadio">
          <input
            type="radio"
            name={name}
            value={id[i]}
            checked={selected === id[i]}
            onChange={() => onChange(id[i])}
          />
          <span>{title[i]}</span>
        </label>
      );
    }
    return radioArray;
  };
  const StyleDirecton = {
    display: "flex",
    flexDirection: direction,
  };

  return (
    <div className="container">
      <h3>{tituloRadios}</h3>
      <div className="direction" style={StyleDirecton}>
        {createRadio(name, id, title)}
      </div>
    </div>
  );
};

export default InputRadio;
